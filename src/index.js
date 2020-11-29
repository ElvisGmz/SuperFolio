import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Loader from "./Components/Loader";

const App = React.lazy(() => import('./App'))

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
