import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAndEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useUpdateCabin() {

  const queryClient = useQueryClient();
  // UPDATE cabin
  const { isLoading: isEditing, mutate: editCabin } = useMutation({
    mutationFn: (
      { newCabinData, id } // because RQ only accepts one argument
    ) => createAndEditCabin(newCabinData, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast.success("cabin successfully edited");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editCabin }
}