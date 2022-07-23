import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { increment, decrement } from "./store/actions";
import counter from "./store/reducers";
import { Provider } from "react-redux";

// 1. ACTION (actions.js)
// 2. REDUCER (reducers.js)
// 3. STORE (state)
let store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => console.log(store.getState()));
// 4. DISPATCH
store.dispatch(increment(5));
store.dispatch(decrement(5));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
