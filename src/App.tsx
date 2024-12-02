import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/* Contexts */
import { UserProvider } from "@/context/UserContext";

/* Routes */
import { Router } from "@/routes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Router />
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
