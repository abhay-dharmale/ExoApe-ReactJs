import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Work from "./components/Work";
import Playreel from "./components/Playreel";
import Images from "./components/Images";
import Spread from "./components/Spread";

import LocomotiveScroll from 'locomotive-scroll';


export default function App() {
  const locomotiveScroll = new LocomotiveScroll()
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
