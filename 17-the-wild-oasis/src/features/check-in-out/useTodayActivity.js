import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export const useTodayAcitvity = () => {
  const { data: activities, isLoading: isLoadingAcitvities } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ["today-activity"],
  });

  return { activities, isLoadingAcitvities };
};
