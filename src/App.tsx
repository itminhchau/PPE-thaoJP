import { Fragment } from "react";
import { Col, DatePicker } from "antd";
import { Text } from "./components/text";
import HeaderPage from "./layouts/HeaderPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { path } from "./utils/constaint";
import HomePage from "./layouts/homePage/HomePage";
import CategoryPage from "./layouts/categoryPage/CategoryPage";
const App = () => {
  return (
    <Fragment>
      <Router>
        <HeaderPage
          title={"minhchau"}
        />
        <Switch>
          <Route exact path={path.HOME}>
            <HomePage />
          </Route>
          <Route path={path.CATEGORY}>
            <CategoryPage />
          </Route>
        </Switch>
      </Router>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div>
          <Text title="Hello AsurRaa" />
          <DatePicker />
        </div>
      </div> */}


    </Fragment>
  );
};

export default App;
