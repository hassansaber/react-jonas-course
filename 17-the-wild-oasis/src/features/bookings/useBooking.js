import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBooking } from "../../services/apiBookings";

export function useBooking() {
  const { bookingId } = useParams();

  const { isLoading, data: booking } = useQuery({
    queryKey: ["booking"], //unique name for cache
    queryFn: () => getBooking(bookingId), //fn should return promise
  });

  return { isLoading, booking };
}
