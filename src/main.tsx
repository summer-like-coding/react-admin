import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Loading from "./components/loading";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
