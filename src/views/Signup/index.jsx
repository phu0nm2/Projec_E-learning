import React, { Component, Fragment } from "react";
import { Container, TextField, Button, withStyles } from "@material-ui/core";
import Header from "../../components/Header";
import styles from "./style";
import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: {
        // mỗi thuộc tính tương ứng với name
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        soDT: "",
        email: "",
        maNhom: "GP01",
      },
    };
  }

  handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({
      formValue: {
        ...this.state.formValue,
        // taiKhoan: gia tri (dùng dynamic key)
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    // chặn mặc định, giúp không reload lại trang
    e.preventDefault();

    axios({
      method: "POST",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data: this.state.formValue,
    })
      .then((res) => {
        console.log(res);
        alert("Đăng Kí Thành Công!");
      })
      .catch((err) => {
        console.error({ ...err });
      });
  };

  handleSetDefaultUse = () => {
    this.setState({
      formValue: {
        taiKhoan: "Aaaa",
        matKhau: "123",
        hoTen: "Tran Van A",
        soDT: "013245689",
        email: "A@gmail.com",
        maNhom: "GP01",
      },
    });
  };

  render() {
    const { formInput } = this.props.classes;
    return (
      <Fragment>
        <Header />
        <Container maxWidth="sm">
          <h1>Đăng Ký</h1>
          <form onSubmit={this.handleSubmit}>
            <div className={formInput}>
              <TextField
                // mỗi thuộc tính tương ứng với name
                name="taiKhoan"
                onChange={this.handleChange}
                //
                value={this.state.formValue.taiKhoan}
                fullWidth
                label="Tài khoản"
                variant="outlined"
              />
            </div>
            <div className={formInput}>
              <TextField
                name="matKhau"
                onChange={this.handleChange}
                //
                value={this.state.formValue.matKhau}
                fullWidth
                label="Mật khẩu"
                variant="outlined"
              />
            </div>
            <div className={formInput}>
              <TextField
                name="hoTen"
                onChange={this.handleChange}
                //
                value={this.state.formValue.hoTen}
                fullWidth
                label="Họ Tên"
                variant="outlined"
              />
            </div>
            <div className={formInput}>
              <TextField
                name="email"
                onChange={this.handleChange}
                //
                value={this.state.formValue.email}
                fullWidth
                label="Email"
                variant="outlined"
              />
            </div>
            <div className={formInput}>
              <TextField
                name="soDT"
                onChange={this.handleChange}
                //
                value={this.state.formValue.soDT}
                fullWidth
                label="Số ĐT"
                variant="outlined"
              />
            </div>
            <div className={formInput}>
              <Button type="submit" variant="contained" color="primary">
                Đăng Ký
              </Button>
              
              <Button
                onClick={this.handleSetDefaultUse}
                type="submit"
                variant="contained"
                color="secondary"
              >
                Set Default User
              </Button>
            </div>
          </form>
        </Container>
      </Fragment>
    );
  }
}
export default withStyles(styles)(Signup);
