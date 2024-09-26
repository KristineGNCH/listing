import "./Listing.css";

export default function Listing(props) {
  const { items } = props;

  return (
    <div className="item__container">
      {items.map((item) => {
        const {
          listing_id,
          url,
          MainImage,
          title,
          currency_code,
          price,
          quantity,
        } = item;

        const itemPrice =
          currency_code === "USD"
            ? "$" + price
            : currency_code === "EUR"
            ? "€" + price
            : price + " " + currency_code;

        const itemQuantity =
          quantity <= 10
            ? "level-low"
            : quantity <= 20
            ? "level-medium"
            : "level-high";

            if(!url){
              return null;
            }
            
        return (
          <div className="item" key={listing_id}>
            <div className="item-image">
              <a href={url}>
                <img src={MainImage.url_570xN} alt="item screen"></img>
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">
                {title.length < 50 ? title : title.slice(0, 50) + "..."}
              </p>
              <div className="item-info">
              <p className="item-price">{itemPrice}</p>
              <p className={"item-quantity " + itemQuantity}>
                {quantity} left
              </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
