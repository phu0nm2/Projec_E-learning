import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import course from "./reducers/course";
import thunk from "redux-thunk";
import me from "./reducers/me";
const reducers = combineReducers({
  course,
  me,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers);
export default createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
