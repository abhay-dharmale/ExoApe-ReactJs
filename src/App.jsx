import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Work from "./components/Work";
import Playreel from "./components/Playreel";
import Images from "./components/Images";
import Spread from "./components/Spread";



export default function App() {
  return (
    <main className="w-full">
      <Navbar />
      <Landing />
      <Work />
      <Playreel />
      <Images />
      <Spread />
    </main>
  );
}
