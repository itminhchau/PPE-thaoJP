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
import ShowSiderContextProvider from "./contexts/ShowSiderContextProvider";
import PlayPage from "./layouts/playPage/PlayPage";
import IsExpContextProvider from "./contexts/IsExpContextProvider";
const App = () => {
  return (
    <Fragment>
      <ShowSiderContextProvider>
        <IsExpContextProvider>
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
              <Route path={path.PLAY}>
                <PlayPage />
              </Route>
            </Switch>
          </Router>
        </IsExpContextProvider>
      </ShowSiderContextProvider>

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
