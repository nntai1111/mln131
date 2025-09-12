import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";

import { LoadScript } from "@react-google-maps/api";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <LoadScript
      googleMapsApiKey="AIzaSyAyBjAXybQ98p7VJfnLICb7o1tBKWpOgV0"
      loadingElement={<></>}
    >
      <StrictMode>
        <App />
      </StrictMode>
    </LoadScript>
  </Provider>
);
