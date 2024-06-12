import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabins() {

  const { isLoading, data: cabins } = useQuery({
    queryKey: ["cabins"], //unique name for cache
    queryFn: getCabins, //fn should return promise
  });

  return { isLoading, cabins }
}