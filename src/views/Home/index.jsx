import React, { Component } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import CourseItem from "../../components/CourseItem";
import { connect } from "react-redux";
import { fetchCourses } from "../../store/actions/course";
import Layout from "../../HOCs/layout";

class Home extends Component {
  render() {
    return (
      <Layout>
        <Typography component="h1" variant="h3" align="center" gutterBottom>
          Danh Sách Khóa Học
        </Typography>

        {/* container */}
        <Container maxWidth="lg">
          {/* row */}
          <Grid container spacing={3}>
            {/* col */}
            {this.props.courses.map((item) => {
              return (
                <Grid key={item.maKhoaHoc} item xs={12} sm={6} md={3}>
                  <CourseItem item={item}></CourseItem>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Layout>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchCourses);
  }
}

const mapStateToProps = (state) => ({
  courses: state.course.courseList,
});
export default connect(mapStateToProps, null)(Home);
