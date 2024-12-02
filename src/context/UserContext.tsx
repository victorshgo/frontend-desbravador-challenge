import React, { createContext, useState } from "react";

/* Types */
import { UserResponseProps } from "@/types/user";
import {
  RepositoriesResponseProps,
  RepositoryDetailsResponseProps,
} from "@/types/repositories";

type ContextProps = {
  user: UserResponseProps | undefined;
  setUser: (user: UserResponseProps) => void;

  repositories: RepositoriesResponseProps | undefined;
  setRepositories: (repositories: RepositoriesResponseProps) => void;

  repositoryDetails: RepositoryDetailsResponseProps | undefined;
  setRepositoryDetails: (repositories: RepositoryDetailsResponseProps) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({} as ContextProps);

export const UserProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserResponseProps>();
  const [repositories, setRepositories] = useState<RepositoriesResponseProps>();
  const [repositoryDetails, setRepositoryDetails] =
    useState<RepositoryDetailsResponseProps>();

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        repositories,
        setRepositories,
        repositoryDetails,
        setRepositoryDetails,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
