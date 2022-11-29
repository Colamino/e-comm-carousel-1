import "./App.css";
import Navbar from "./components/navbar/Navbar";
import FlashDeals from "./components/flashDeals/FlashDeals";
import { useSelector } from "react-redux";

function App() {
  const { isLoading } = useSelector((state) => state.items);
  //* set laoding
  // if (isLoading) {
  //   return;
  // }
  return (
    <div className="App">
      <Navbar />
      <FlashDeals />
    </div>
  );
}

export default App;
