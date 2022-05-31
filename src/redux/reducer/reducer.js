import { FETCH_DATA } from '../actions/actionTypes';

const initialState = {
  offerList: [],
  loading:false, 
  haveData:false,
  multibleOfferList:[],
  offerCount:0

};



const shopReducer = (state = initialState , action) => {
    switch (action.type) {
      case FETCH_DATA:
        return {
          ...state,
          offerList :  action.state,
          loading: action.loading,
          haveData:action.haveData,
          multibleOfferList: action.multibleOfferList.concat(state.multibleOfferList),
          offerCount:action.offerCount
        };


      default:
        return state;
    }
  };
  
  export default shopReducer;