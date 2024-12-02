import { useContext } from "react";
import { FaAngleRight } from "react-icons/fa";

/* Contexts */
import { UserContext } from "@/context/UserContext";

export function RepositoryHeader() {
  const { repositoryDetails } = useContext(UserContext);
  if (!repositoryDetails) return;

  return (
    <header className="w-full pb-4 flex items-center justify-between border-b">
      <p className="text-lg">All information from the selected repository</p>
      <div className="flex items-center cursor-pointer">
        <a
          href={repositoryDetails.html_url}
          target="_blank"
          className="text-lg underline"
        >
          Visit Repository
        </a>
        <FaAngleRight className="w-5 h-5 ml-4 text-slate-200" />
      </div>
    </header>
  );
}
