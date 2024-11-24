import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import store from './scripts/store/store';
import App from "./scripts/App";
import "./assets/styles/main.scss";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
