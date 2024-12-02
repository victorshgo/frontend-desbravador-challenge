import { useContext } from "react";
import { FaAngleLeft, FaAngleRight, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

/* Contexts */
import { UserContext } from "@/context/UserContext";

export function RepositoryHeader() {
  const navigate = useNavigate();

  const { repositoryDetails } = useContext(UserContext);
  if (!repositoryDetails) return;

  const handleBack = () => navigate(`/${repositoryDetails.owner.login}`);

  return (
    <header className="w-full pb-4 flex justify-between items-center">
      <div className="flex items-center cursor-pointer" onClick={handleBack}>
        <FaAngleLeft className="w-5 h-5 mr-4 text-slate-200" />
        <span className="text-lg underline">Previous Page</span>
      </div>
      <FaGithub className="h-16 w-auto" />
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
