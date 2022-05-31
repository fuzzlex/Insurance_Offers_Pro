import { Button, CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import OfferCard from "./OfferCard";
import TabNavbar from "./TabNavbar";

const Offers = ({
  //PROPS
  handleFetchData,
  loading,
  offerList,
  haveData,
  multibleOfferList,
  offerCount,
}) => {
  // SORTED ALL OFFERS FUNCTIONS
  const [sortedList, setSortedList] = useState([]);
  const [active, setActive] = useState(false);
  console.log(multibleOfferList.map(e => e.QuotaInfo))
  const handleSort = () => {
    const sortedMultibleOfferList = multibleOfferList?.sort(
      (a, b) => (!a.QuotaInfo.HasDiscount ? a.Cash : a.QuotaInfo.PremiumWithDiscount  ) - (!b.QuotaInfo.HasDiscount ?  b.Cash :  b.QuotaInfo.PremiumWithDiscount ));
    setSortedList(sortedMultibleOfferList);
    setActive(!active); 
  };

  return (
    <div>
      <TabNavbar handleFetchData={handleFetchData} />

      {haveData && <h1>OFFERS</h1>}
      {offerCount > 0 && <h1>YOU HAVE {offerCount} OFFER </h1>}
      {offerCount > 0 && offerCount === multibleOfferList.length && (
        <Button variant="contained" color="secondary" onClick={handleSort}>
          SORTED BY PRICE CHEAPE-EXPENSİVE
        </Button>) }
      {loading && (
        <CircularProgress
          style={{ width: "11vw", height: "25vh", color: "orange" }}
        />
      )}
      {(offerCount === 0
        ? offerList
        : active
        ? sortedList
        : multibleOfferList
      ).map((offer, index) => (
        <OfferCard offer={offer} key={index} />
      ))}
    </div>
  );
};

export default Offers;
