import { useQuery } from '@tanstack/react-query';
import fetchBreedList from './fetchBreedList';

export default function useBreedList(animal) {
  const queryKey = ['breeds', animal];
  const queryFn = fetchBreedList;

  const results = useQuery({ queryKey, queryFn });

  return [results?.data?.breeds ?? [], results.status];
}
