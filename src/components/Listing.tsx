import ListingItem, { Props } from "./ListingItem";

const Listing = ({ items }) => {
    
  const activeItems = items.filter((it: { state: string; })=> it.state === "active");
  return (
    <div className="item">
      {activeItems.map((item: Props) => {
        return (
          <div className="item" key={listing_id}>
            <ListingItem item={item} />
          </div>
        );
      })}
    </div>
  );
};

Listing.defaultProps = {
  items: [],
};

export default Listing;
