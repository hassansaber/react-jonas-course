import { useQuery } from "@tanstack/react-query";
import { getBookingsAfterDate } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { subDays } from "date-fns";

export const useRecentBookings = () => {
  const [searchParams] = useSearchParams();

  const numDays = searchParams.get("last")
    ? Number(searchParams.get("last"))
    : 7;

  const queryData = subDays(new Date(), numDays).toISOString();

  const { data: bookings, isLoading: isLoadingBookings } = useQuery({
    queryFn: () => getBookingsAfterDate(queryData),
    queryKey: ["bookings", `last-${numDays}`],
  });

  return { bookings, isLoadingBookings };
};
