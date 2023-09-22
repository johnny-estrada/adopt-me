// *********************************************
// *********************************************
// React Query (TanStack)
// This is the react query (Tanstack) way of
// fetching data.
// *********************************************
// *********************************************

import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);

  return [results?.data?.breeds ?? [], results.status];
}