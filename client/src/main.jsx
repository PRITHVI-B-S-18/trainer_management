import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import Reducers from "./reducers";
import {thunk} from "redux-thunk";
//To know about react redux and its working, refer ( https://www.youtube.com/watch?v=HKU24nY8Hsc&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=34 ,
// https://static.javatpoint.com/tutorial/reactjs/images/react-redux-architecture.png )
const store = createStore(Reducers, compose(applyMiddleware(thunk)));

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Provider>
);
