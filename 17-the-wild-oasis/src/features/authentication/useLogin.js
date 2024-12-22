import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  // const queryClient = useQueryClient();

  const { mutate: login, isLoading: isLoggingin } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (user) => {
      navigate("/dashboard");
      // queryClient.setQueryData(["user"], user);
    },

    onError: (error) => {
      console.log("Error", error);
      toast.error("Provided username or eamil are incorrect");
    },
  });

  return { isLoggingin, login };
};
