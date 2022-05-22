import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/index";
import { compose } from "@mui/system";
import reduxThunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);
