import { createAction } from ".";
import { request } from "../../api/request";
import { actionType } from "./type";

// Middleware
// async action //closure
export const fetchCourses = (dispatch) => {
  // side-effect: hành động nhằm thay đổi 1 state nằm ngoài scope của func
  request({
    method: "GET",
    url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
  })
    .then((res) => {
      dispatch(createAction(actionType.SET_COURSE, res.data));
    })
    .catch((err) => {
      console.log(err);
    });

  //
};

// Xem chi tiết
export const fetchCourse = (id) => {
  return (dispatch) => {
    request({
      // POST dùng data, GET dùng params
      method: "GET",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc",
      params: {
        maKhoaHoc: id,
      },
    })
      .then((res) => {
        // dispatch action lên store, lưu lại
        dispatch(createAction(actionType.FETCH_INFO, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
