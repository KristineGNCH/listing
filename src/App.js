import Listing from "./components/Listing";
import data from './data/etsy.json';
import "./App.css";


function App() {
  const list = data.map((item) => {
    const {
      listing_id,
      url,
      MainImage,
      title,
      currency_code,
      price,
      quantity,
    } = item;
    return {
      listing_id,
      url,
      MainImage,
      title,
      currency_code,
      price,
      quantity,
    };
  });

  return (
    <div className="container">
      <Listing items={list} />
    </div>
  );
}

export default App;
