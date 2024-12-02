import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

/* Components */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

/* Layout */
import { Layout } from "@/layout";

export function Search() {
  const navigate = useNavigate();

  const [searchedUser, setSearchedUser] = useState<string>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedUser(event.target.value);
  };

  const handleSearch = () => navigate(`/${searchedUser}`);

  return (
    <Layout>
      <FaGithub className="h-16 w-auto" />
      <Card className="w-96 mt-8">
        <CardHeader>
          <CardTitle>Search user</CardTitle>
          <CardDescription>
            Search by user and see their details.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Input placeholder="Username" onChange={handleChange} />
          <Button onClick={handleSearch} className="w-full mt-4 rounded-lg">
            Search
          </Button>
        </CardContent>
      </Card>
    </Layout>
  );
}
