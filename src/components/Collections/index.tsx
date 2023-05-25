import { NFTDataArray, NftDataType } from "../../dummyData/dummyDataNFT";

const Collections = () => {
  return (
    <div className="collection-card-list">
      {NFTDataArray.map((item: NftDataType, idx: number) => {
        return (
          <div className="card" key={idx}>
            <div className="card-img">
              <div className="card-img__main">
                <img src={item.image} alt={item.collection_name} />
              </div>
              <div className="card-img__sub">
                <img src={item.image} alt={item.collection_name} />
                <img src={item.image} alt={item.collection_name} />
                <img src={item.image} alt={item.collection_name} />
                <img src={item.image} alt={item.collection_name} />
              </div>
            </div>
            <div className="card-info">
              <p className="card-info__title">{item.collection_name}</p>
              <div className="card-info__transaction">
                <div className="transaction__price">
                  <p>Price</p>
                  <p>{item.price} ETH</p>
                </div>
                <div className="transaction__market-cap">
                  <p>Market Cap</p>
                  <p>{item.price} ETH</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Collections;
