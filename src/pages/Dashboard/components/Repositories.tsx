import { useCallback, useContext, useState } from "react";
import { StringParam, useQueryParam } from "use-query-params";

/* Components */
import { Input } from "@/components/ui/input";

/* Contexts */
import { UserContext } from "@/context/UserContext";

/* Utils */
import { orderByAsc, orderByDesc } from "@/utils/order";

/* Dashboard Components */
import { Repository } from "./Repository";
import { SelectOrder } from "./SelectOrder";

export function Repositories() {
  const { repositories } = useContext(UserContext);

  const [order] = useQueryParam("order", StringParam);
  const [searchedRepository, setSearchedRepository] = useState<string>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedRepository(event.target.value);
  };

  const filteredRepositories = useCallback(() => {
    if (repositories) {
      const orderedRepositories = repositories.filter((repo) => {
        return repo.name
          .toLowerCase()
          .includes(searchedRepository?.toLowerCase() ?? "");
      });

      if (order === "asc") {
        return orderByAsc(orderedRepositories);
      } else {
        return orderByDesc(orderedRepositories);
      }
    }

    return [];
  }, [order, repositories, searchedRepository]);

  if (!repositories) return;

  return (
    <main className="col-span-2">
      <div className="flex gap-4 mb-4">
        <Input placeholder="Find a repository" onChange={handleChange} />
        <SelectOrder />
      </div>

      {filteredRepositories().map((repo) => (
        <Repository data={repo} key={repo.full_name} />
      ))}
    </main>
  );
}
