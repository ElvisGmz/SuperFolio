import React, {Suspense} from "react";
import {lazy} from '@loadable/component';
import ReactDOM from "react-dom";
import "./index.css";
import Loader from "./Components/Loader";

const App = lazy(() => import('./App'))
ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </React.StrictMode>
  ,
  document.getElementById("root")
);
