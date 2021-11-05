import React, { Component } from "react";
import { Container, TextField, Button } from "@material-ui/core";
import { signIn } from "../../store/actions/auth";
import { connect } from "react-redux";
import Header from "../../components/Header";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: {
        taiKhoan: "",
        matKhau: "",
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
    e.preventDefault();
    this.props.dispatch(
      // Truyền hàm callback, login thành công chuyển qua trang home
      signIn(this.state.formValue, () => {
        this.props.history.push("/");
      })
    );
  };

  handleSetDefaultUser = () => {
    this.setState({
      formValue: {
        taiKhoan: "baba",
        matKhau: "123456789",
      },
    });
  };
  render() {
    return (
      <div>
        <Header></Header>
        <Container maxWidth="sm">
          <h1 style={{ textAlign: "center" }}>Đăng Nhập</h1>
          <form onSubmit={this.handleSubmit}>
            <div style={{ marginBottom: 30 }}>
              <TextField
                value={this.state.formValue.taiKhoan}
                onChange={this.handleChange}
                name="taiKhoan"
                fullWidth
                label="Tài khoản"
                variant="outlined"
              />
            </div>
            <div style={{ marginBottom: 30 }}>
              <TextField
                value={this.state.formValue.matKhau}
                onChange={this.handleChange}
                name="matKhau"
                fullWidth
                label="Mật khẩu"
                variant="outlined"
              />
            </div>

            <div>
              <Button type="submit" variant="contained" color="primary">
                Đăng Nhập
              </Button>

              <Button
                onClick={this.handleSetDefaultUser}
                type="submit"
                variant="contained"
                color="secondary"
              >
                Set Default User
              </Button>
            </div>
          </form>
        </Container>
      </div>
    );
  }
}

export default connect()(Signin);
