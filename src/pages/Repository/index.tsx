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
import { getRepositoryDetails } from "@/services/repositories";

/* Types */
import { RepositoryDetailsResponseProps } from "@/types/repositories";

/* Repository Components */
import { RepositoryDetails } from "./components/RepositoryDetails";
import { RepositoryHeader } from "./components/RepositoryHeader";

export function Repository() {
  const { username, repository } = useParams();

  const { toast } = useToast();
  const { setRepositoryDetails } = useContext(UserContext);

  const searchedRepositoryDetailsData = useMutation({
    mutationFn: getRepositoryDetails,
    onSuccess: (data: RepositoryDetailsResponseProps) =>
      setRepositoryDetails(data),
    onError: () =>
      toast({
        title: "Error",
        description: "An error occurred while fetching repository details.",
      }),
  });

  useEffect(() => {
    searchedRepositoryDetailsData.mutate({ username, repository });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, repository]);

  return (
    <Layout>
      <RepositoryHeader />
      <RepositoryDetails />
    </Layout>
  );
}
