import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();

  const filtervalue = searchParams.get("status");

  // FILTER
  let filter =
    !filtervalue || filtervalue === "all"
      ? null
      : { field: "status", value: filtervalue, method: "eq" };

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", filter], //unique name for cache
    queryFn: () => getBookings({ filter }), //fn should return promise
  });

  return { isLoading, bookings, error };
}
