import Users from "./Users";
import "./App.css";
import { UsersProvider } from "./UsersContext";

function App() {
  return (
    <UsersProvider>
      <Users />
    </UsersProvider>
  );
}

export default App;
