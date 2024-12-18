import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export const useUser = () => {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  if (error) {
    console.log("userError", error);
  }

  return {
    user,
    isLoading,
    isAuthenticated: user?.role === "authenticated",
  };
};
