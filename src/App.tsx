import React from 'react';
// @ts-ignore
import styles from  './App.scss';
import DashboardContainer from "./components/dashboard/Dashboard-container";
import Header from "./components/header/Header";
import {Route} from "react-router";
import Login from "./components/login/Login";
class App extends React.Component{



    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
      return (
          <div className={styles.appWrapper}>
              <Header/>

              <Route path='/login' render={() => <Login/>}/>
              <Route path='/dashboard' render={() => <DashboardContainer/>}/>

          </div>
      );
  }
};

export default App;
