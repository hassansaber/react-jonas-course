import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAndEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {

  const queryClient = useQueryClient();
  // CREATE cabin
  const { isLoading: isCreating, mutate: createCabin } = useMutation({
    mutationFn: createAndEditCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast.success("New cabin successfully created");
    },
    onError: (err) => toast.error(err.message),
  });



  return { isCreating, createCabin }
}