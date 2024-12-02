/* Types */
import { UserProps, UserResponseProps } from "@/types/user";

/* API */
import { api } from "./api";

export async function getUser(props: UserProps) {
  const { data } = await api.get<UserResponseProps>(`/users/${props.username}`);
  return data;
}
