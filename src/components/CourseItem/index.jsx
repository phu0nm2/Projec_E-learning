import React, { Component } from "react";
import {
  CardMedia,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";

import { NavLink } from "react-router-dom";

export default class CourseItem extends Component {
  render() {
    const { hinhAnh, tenKhoaHoc, moTa, maKhoaHoc } = this.props.item;
    return (
      <div>
        <Card>
          <CardActionArea>
            <CardMedia
              style={{ height: 200 }}
              image={hinhAnh}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {tenKhoaHoc}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {moTa.substr(0, 50) + ".."}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {/* Sử dụng thẻ NavLink để chuyển trang */}
            <NavLink to={`/detail/${maKhoaHoc}`}>
              <Button size="small" color="primary">
                Xem Chi Tiết
              </Button>
            </NavLink>
          </CardActions>
        </Card>
      </div>
    );
  }
}
