import { Toaster } from "react-hot-toast";
import Header from "./components/Header/Header";
import MealContainer from "./components/MealContainer/MealContainer";
import "./styles/global.css";

function App() {
  return (
    <>
      <Toaster />
      <Header />
      <MealContainer />
    </>
  );
}

export default App;
