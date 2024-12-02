import { FaAngleLeft, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  return (
    <header className="p-4 border-b">
      <h1 className="flex items-center cursor-pointer" onClick={handleBack}>
        <FaAngleLeft className="w-5 h-5 mr-4 text-slate-200" />
        <FaGithub className="h-10 w-auto" />
      </h1>
    </header>
  );
}
