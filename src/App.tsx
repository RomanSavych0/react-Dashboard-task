import React from 'react';
// @ts-ignore
import styles from  './App.scss';
import DashboardContainer from "./components/dashboard/Dashboard-container";
import Header from "./components/header/Header";

class App extends React.Component{
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
      return (
          <div className={styles.appWrapper}>
              <Header/>
              <DashboardContainer/>
          </div>
      );
  }
};

export default App;
