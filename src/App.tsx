import Listing from "./components/ListingItem";
import data from "./data/etsy.json";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Listing item ={data} />
    </div>
  );
}

export default App;