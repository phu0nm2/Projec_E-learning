import { request } from "../../api/request";
import { createAction } from "./index";
import { actionType } from "./type";

// async action
export const signIn = (userLogin, callback) => {
  return (dispatch) => {
    request({
      method: "POST",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: userLogin,
    })
      .then((res) => {
        // console.log(res);
        dispatch(createAction(actionType.SET_ME, res.data));
        localStorage.setItem("t", res.data.accessToken);
        callback();
      })
      .catch((err) => {
        console.log({ ...err }, err.response.data);
      });
  };
};

export const fetchMe = (dispatch) => {
  request({
    method: "POST",
    url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinNguoiDung",
  })
    .then((res) => {
      dispatch(createAction(actionType.SET_ME, res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
