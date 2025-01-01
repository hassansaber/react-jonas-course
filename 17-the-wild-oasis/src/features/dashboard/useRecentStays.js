import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { subDays } from "date-fns";
import { getStaysAfterDate } from "../../services/apiBookings";

export const useRecentStays = () => {
  const [searchParams] = useSearchParams();

  const numDays = searchParams.get("last")
    ? Number(searchParams.get("last"))
    : 7;
  const queryData = subDays(new Date(), numDays).toISOString();

  const { data: stays, isLoading: isLoadingStays } = useQuery({
    queryFn: () => getStaysAfterDate(queryData),
    queryKey: ["stays", `last-${numDays}`],
  });

  const confirmed = stays?.filter(
    (stay) => stay.status === "checked-in" || stay.status === "checked-out"
  );
  return { stays, isLoadingStays, confirmedStays };
};
