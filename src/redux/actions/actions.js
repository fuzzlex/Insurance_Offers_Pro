import { FETCH_DATA } from "./actionTypes";
import axios from "axios";

export const setFetchData = (
  payload,
  loading,
  haveData,
  multibleOfferList,
  offerCount
) => ({
  type: FETCH_DATA,
  state: payload,
  loading: loading,
  haveData: haveData,
  multibleOfferList: multibleOfferList,
  offerCount: offerCount,
});


//TASK1- TASK2 ACTIONS FUNCTION HERE

export const getOffers = (caseState) => {
  return async (dispatch) => {
    dispatch(setFetchData([], true, false, [], 0));
    let url = `https://snetmyapp.herokuapp.com/${caseState}`;
    try {
      const res = await axios.get(url);
      const { offerList } = res.data;
      dispatch(setFetchData(offerList, false, true, [], 0));
    } catch (error) {
      console.log(error);
      dispatch(setFetchData([], true, false, [], 0));
    }
  };
};



//TASK3 ACTIONS FUNCTION HERE


export const getMultibleOffers = () => {
  return async (dispatch) => {
    dispatch(setFetchData([], true, true, [], 0));
    try {
      let offerUrl = `https://snetmyapp.herokuapp.com/get_offer_count`;
      let offerCountRes = await axios.get(offerUrl);
      let offerCount = offerCountRes.data.num_offers;
      dispatch(setFetchData([], true, true, [], offerCount));
      for (let i = 0; i < offerCount; i++) {
        let url = `https://snetmyapp.herokuapp.com/case3`;
        let res = await axios.get(url);
        let offerList = [res.data];
        dispatch(
          setFetchData([], i === offerCount-1 ? false : true, true, offerList,offerCount)
        );
      }
    } catch (error) {
      console.log(error);
      dispatch(setFetchData([], true, false));
    }
  };
};

