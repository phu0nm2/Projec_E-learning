import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

//========================== Cách 1 xét được nhiều điều kiện ======================================//
// check login
// Create Guard
const createRoute = (condition) => {
  return class extends Component {
    render() {
      const { path, component: RouteComp, redirectPath } = this.props;
      return (
        <Route
          path={path}
          render={(RouteProps) => {
            if (condition()) {
              // k có token thì return về component
              return <RouteComp {...RouteProps} />;
            }

            return <Redirect to={redirectPath} />;
          }}
        ></Route>
      );
    }
  };
};

// Nếu đã đăng nhập rồi thì không được vào trang login nữa
// () => !localStorage.getItem("t"): điều kiện
// AuthRoute là 1 HOC
export const AuthRoute = createRoute(() => !localStorage.getItem("t"));
export const PrivateRoute = createRoute(() => localStorage.getItem("t"));

//========================= Cách 2 chỉ xét được 1 điều kiện =======================================//

// export class AuthRoute extends Component {
//   render() {
//     const { path, component, redirectPath } = this.props;
//     return (
//       <Route
//         path={path}
//         render={() => {
//           if (!localStorage.getItem("t")) {
//             // k có token thì return về component
//             return <component></component>;
//           }

//           return <Redirect to={redirectPath}></Redirect>;
//         }}
//       ></Route>
//     );
//   }
// }
