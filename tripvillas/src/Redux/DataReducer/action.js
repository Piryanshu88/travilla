
import * as types from "./actionTypes"
import axios from "axios";

const sendDatatoLocal = (payload) => {
  return {
    type: types.SendToLocalStorage,
    payload
  }
}

const getDatafromLocal = () => {
  return {
    type: types.GetFromLocalStorage
  }
}

// HOTEL LIST REQUEST

const getHotelListReq = () => {
  return {
    type: types.getHotelListReq,
  }
}
const getHotelListSuc = (payload) => {
  return {
    type: types.getHotelListSuc,
    payload
  }
}
const getHotelListErr = () => {
  return {
    type: types.getHotelListErr,
  }
}

const getData = (q, p) => (dispatch) => {
  dispatch(getHotelListReq())
  return axios
    .get(`https://long-plum-mite-cape.cyclic.app/results?q=${q}&_limit=7`, p)
    .then((res) => dispatch(getHotelListSuc(res.data)))
    .catch((err) => dispatch(getHotelListErr()))
}

export { sendDatatoLocal, getDatafromLocal, getHotelListErr, getHotelListReq, getHotelListSuc, getData }