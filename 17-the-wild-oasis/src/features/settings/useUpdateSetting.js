import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSetting() {

  const queryClient = useQueryClient();
  // UPDATE cabin
  const { isLoading: isUpdating, mutate: updateSetting } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
      toast.success("setting  successfully updated");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateSetting }
}