import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMultibleOffers,  getOffers } from "../redux/actions/actions";
import { Grid } from "@material-ui/core";
import Navbar from "../components/Navbar";
import Offers from "../components/Offers";
const Home = () => {
  const { offerList, loading, haveData,multibleOfferList,offerCount } = useSelector(
    (state) => state.reducer
  );
  const dispatch = useDispatch();
  const handleOpenTask3 = () =>{
    dispatch(getMultibleOffers())

  }


  const handleFetchData = (task) => {
   if(task === "task1")dispatch(getOffers("case1"))
   if(task === "task2")dispatch(getOffers("case2"))
   if(task === "task3")handleOpenTask3()
      
  };


  

  return (
    <Grid>
      <Navbar />

      <Offers
        handleFetchData={handleFetchData}
        offerList={offerList}
        loading={loading}
        haveData={haveData}
        multibleOfferList={multibleOfferList}
        offerCount={offerCount}
      />
    </Grid>
  );
};

export default Home;
