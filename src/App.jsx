import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Work from "./components/Work";



export default function App() {
  return (
    <main className="w-full">
      <Navbar />
      <Landing />
      <Work />
    </main>
  );
}
