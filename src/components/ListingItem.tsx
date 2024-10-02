import "./Listing.css";

interface ItemProps {
  item: Props;
}

export interface Props {
  listing_id: number,
  url: string;
  MainImage: { url_570xN: string };
  title: string;
  currency_code: string;
  price: number;
  quantity: number;
}

const ListingItem = ({ item }: ItemProps) => {
  const { url, MainImage, title, currency_code, price, quantity } =
    item;
  let itemPrice;

  if (currency_code === "USD") {
    itemPrice = "$" + price;
  } else if (currency_code === "EUR") {
    itemPrice = "€" + price;
  } else {
    itemPrice = price + " " + currency_code;
  }

  function itemQuantity() {
    if (quantity <= 10) {
      return "level-low";
    }
    if (quantity <= 20) {
      return "level-medium";
    }
    return "level-high";
  }

  if (!url) {
    return null;
  }

  return (
    <div className="items">
      <div className="item-image">
        <a href={url}>
          <img src={MainImage.url_570xN} alt="image"></img>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">
          {title.length < 50 ? title : title.slice(0, 50) + "..."}
        </p>
        <div className="item-info">
          <p className="item-price">{itemPrice}</p>
          <p className={"item-quantity " + itemQuantity}>{quantity} left</p>
        </div>
      </div>
    </div>
  );
};

export default ListingItem;
