import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signup as signupApi } from "../../services/apiAuth";

export const useSignup = () => {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess(data) {
      console.log(data);
      toast.success(
        "Account success fully created! Please verify the new account from user's email address."
      );
    },
  });

  return { signup, isLoading };
};
