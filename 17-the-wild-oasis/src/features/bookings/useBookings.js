import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

export function useBookings() {

  const { isLoading, data: bookings, error } = useQuery({
    queryKey: ["bookings"], //unique name for cache
    queryFn: getBookings, //fn should return promise
  });

  return { isLoading, bookings, error }
}