import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchFindMovieById = ({ id }) => {
  return api.get(`/movie/${id}`);
};

export const useFindMovieByIdQuery = ({ id }) => {
  return useQuery({
    queryKey: ["movie-findById", id],
    queryFn: () => fetchFindMovieById({ id }),
    select: (result) => result.data,
  });
};
