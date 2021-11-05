import React, { Component } from "react";
import { fetchCourse } from "../../store/actions/course";
import { connect } from "react-redux";
import Layout from "../../HOCs/layout";
class Detail extends Component {
  render() {
    // optional chaining bóc tách p/tử
    const { hinhAnh, tenKhoaHoc, moTa } = this.props.course || {};
    return (
      <Layout>
        <h3>DETAIL PAGE</h3>
        <img src={hinhAnh} alt="" />
        <h1>{tenKhoaHoc}</h1>
        <p>{moTa}</p>
      </Layout>
    );
  }

  componentDidMount() {
    const courseID = this.props.match.params.id;

    this.props.dispatch(fetchCourse(courseID));
    // 1. tạo dữ liệu mới trên store courseDetail
    // 2.tạo async action fetchCourse()
    // 3.dispatch async action
    // 4. lên reducer ,xử lý action (action creator, tạo type)
    // 5. ở component Detail, connect lên store, lấy courseDetail
    // 6. Hiện hình , tên khoá, mô tả, tên người tạo
  }
}

const mapStateToProps = (state) => {
  return {
    course: state.course.courseDetail,
  };
};

export default connect(mapStateToProps)(Detail);
