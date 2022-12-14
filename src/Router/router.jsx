import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Error from "../Components/Error";
import Tabs from "../Features/Topics/Tabs/Tabs";

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Tabs />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);
