import { formatDistanceStrict } from "date-fns";
import { FaStar } from "react-icons/fa";

/* Types */
import { Repositories } from "@/types/repositories";

type RepositoryProps = {
  data: Repositories;
};

export function Repository({ data }: RepositoryProps) {
  return (
    <section className="py-6 border-t" key={data.full_name}>
      <div className="flex items-center">
        <a href={`/${data.full_name}`} className="mr-2 text-xl underline">
          {data.name}
        </a>
        <div className="w-fit px-2 flex justify-center items-center rounded-full border">
          <span className="text-xs">{data.visibility}</span>
        </div>
      </div>
      <p className="mt-1 text-slate-300">{data.description}</p>
      <div className="flex items-center mt-2 text-slate-300">
        <p className="mr-4">
          Updated At: {formatDistanceStrict(new Date(), data.updated_at)}
        </p>
        <p>Language: {data.language}</p>
      </div>
      <div className="flex items-center mt-4">
        <FaStar className="w-4 h-4 text-slate-200 mr-2" />
        <span className="mt-1 text-xs">{data.stargazers_count}</span>
      </div>
    </section>
  );
}
