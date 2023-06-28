import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./redux/store.ts";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter basename="/Quiz-project">
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </BrowserRouter>
  </Provider>
);
