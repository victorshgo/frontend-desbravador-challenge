import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

/* Contexts */
import { UserContext } from "@/context/UserContext";

/* Hooks */
import { useToast } from "@/hooks/useToast";

/* Layout */
import { Layout } from "@/layout";

/* Services */
import { getRepositories } from "@/services/repositories";
import { getUser } from "@/services/user";

/* Types */
import { RepositoriesResponseProps } from "@/types/repositories";
import { UserResponseProps } from "@/types/user";

/* Dashboard Components */
import { Repositories } from "./components/Repositories";
import { User } from "./components/User";

export function Dashboard() {
  const { username } = useParams();

  const { toast } = useToast();
  const { setUser, setRepositories } = useContext(UserContext);

  const notify = (description: string) =>
    toast({
      title: "Error",
      description,
    });

  const searchedUserData = useMutation({
    mutationFn: getUser,
    onSuccess: (data: UserResponseProps) => setUser(data),
    onError: () => notify("An error occurred while fetching user data."),
  });

  const searchedUserRepositoriesData = useMutation({
    mutationFn: getRepositories,
    onSuccess: (data: RepositoriesResponseProps) => setRepositories(data),
    onError: () =>
      notify(
        "An error occurred when fetching data from the user's repositories."
      ),
  });

  useEffect(() => {
    searchedUserData.mutate({ username });
    searchedUserRepositoriesData.mutate({ username });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  return (
    <Layout>
      <div className="grid grid-cols-1 p-4 gap-8 md:grid-cols-3 md:p-0">
        <User />
        <Repositories />
      </div>
    </Layout>
  );
}
