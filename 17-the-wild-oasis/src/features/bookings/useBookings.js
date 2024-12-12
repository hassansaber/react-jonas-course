import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();

  // FILTER
  const filtervalue = searchParams.get("status");
  let filter;
  if (filtervalue !== "all")
    filter = { field: "status", value: filtervalue, method: "eq" };

  // SORT
  const sortByValue = searchParams.get("sortBy") || "startDate-desc";
  const sortBy = {
    field: sortByValue.split("-")[0],
    direction: sortByValue.split("-")[1],
  };

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page], //unique name for cache
    queryFn: () => getBookings({ filter, sortBy, page }), //fn should return promise
  });

  return { isLoading, bookings, error, count };
}
