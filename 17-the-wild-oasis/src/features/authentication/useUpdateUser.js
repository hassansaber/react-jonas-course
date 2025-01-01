import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updateUser } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      toast.success("user successfully updated");
    },
  });

  return { isUpdating, updateUser };
};
