/* Types */
import {
  RepositoriesProps,
  RepositoriesResponseProps,
  RepositoryDetailsProps,
  RepositoryDetailsResponseProps,
} from "@/types/repositories";

/* API */
import { api } from "./api";

export async function getRepositories(props: RepositoriesProps) {
  const { data } = await api.get<RepositoriesResponseProps>(
    `/users/${props.username}/repos`
  );
  return data;
}

export async function getRepositoryDetails(props: RepositoryDetailsProps) {
  const { data } = await api.get<RepositoryDetailsResponseProps>(
    `/repos/${props.username}/${props.repository}`
  );
  return data;
}
