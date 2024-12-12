import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  // FILTER
  const filtervalue = searchParams.get("status");
  let filter =
    filtervalue === "all" || !filtervalue
      ? null
      : { field: "status", value: filtervalue, method: "eq" };

  // SORT
  const sortByValue = searchParams.get("sortBy") || "startDate-desc";
  const sortBy = {
    field: sortByValue.split("-")[0],
    direction: sortByValue.split("-")[1],
  };

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // QUERY
  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page], //unique name for cache
    queryFn: () => getBookings({ filter, sortBy, page }), //fn should return promise
  });

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  // next
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });

  // prev
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });

  return { isLoading, bookings, error, count };
}
