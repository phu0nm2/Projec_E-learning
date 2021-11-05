import { actionType } from "../actions/type";

const initialState = {
  courseList: [],
  courseDetail: null,
};

const reducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionType.SET_COURSE:
      state.courseList = payload;
      return { ...state };

    case actionType.FETCH_INFO:
      state.courseDetail = payload;
      return { ...state };

    default:
      return state;
  }
};

export default reducers;
