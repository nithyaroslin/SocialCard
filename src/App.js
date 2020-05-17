import React from "react";
import { Provider } from "react-redux";
import store from "./components/redux/store";

import { IconContext } from "react-icons";
import { FaDev } from "react-icons/fa";
import "./App.css";
import SocialcardContainer from "./components/SocialcardContainerV0";
// import FetchUserContainer from "./components/FetchUserContainer";

function App() {
  return (
    <div>
      <Provider store={store}>
        <IconContext.Provider value={{}}>
          <div className="container">
            <div className="row">
              <div className="col-2">
                <FaDev size="5rem" />
              </div>
              <div className="col-10">
                <SocialcardContainer />
              </div>
            </div>
          </div>
        </IconContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
