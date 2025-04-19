import { useEffect, useState } from "react";
import backendClient from "@/backendClient";
import BackdropWithSpinner from "@/components/ui/backdropwithspinner";
import { log } from "@/lib/logger";
import { Card } from "@/components/ui/card";

const Examples = () => {
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = async() => {
    setLoading(true);
    const response = await backendClient.get("/users");
    setUsers(response.data)
    log(response)
    setLoading(false);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h1>Welcome to the About Page</h1>
      {users.map(user => <Card>{user.name}</Card>)}
      {isLoading && <BackdropWithSpinner />}
    </>
  );
}

export default Examples;