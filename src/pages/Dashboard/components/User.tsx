import { useContext } from "react";
import { FaBuilding, FaMapMarkerAlt, FaUsers } from "react-icons/fa";

/* Contexts */
import { UserContext } from "@/context/UserContext";

export function User() {
  const { user } = useContext(UserContext);
  if (!user) return;

  return (
    <aside>
      <img src={user.avatar_url} className="w-64 h-64 mb-4 rounded-full" />

      <p className="text-xl">{user.name}</p>
      <p className="text-lg text-slate-300">{user.login}</p>

      <p className="my-3 text-slate-300">{user.bio}</p>

      <div className="flex items-center mb-4 gap-2">
        <FaUsers className="w-4 h-4 text-slate-200" />
        <span>
          <b>{user.followers}</b> followers · <b>{user.following}</b> following
        </span>
      </div>

      <div className="flex items-center gap-2">
        <FaBuilding className="w-4 h-4 text-slate-200" />
        <span>{user.company}</span>
      </div>

      <div className="flex items-center gap-2">
        <FaMapMarkerAlt className="w-4 h-4 text-slate-200" />
        <span>{user.location}</span>
      </div>
    </aside>
  );
}
