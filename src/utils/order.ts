/* Types */
import { RepositoriesResponseProps } from "@/types/repositories";

export function orderByAsc(data: RepositoriesResponseProps) {
  return data.sort((a, b) => {
    return a.stargazers_count - b.stargazers_count;
  });
}

export function orderByDesc(data: RepositoriesResponseProps) {
  return data.sort((a, b) => {
    return b.stargazers_count - a.stargazers_count;
  });
}
