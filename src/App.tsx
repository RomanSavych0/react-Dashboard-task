import React from 'react';

import './App.css';
import DashboardContainer from "./components/Dashboard-container";

class App extends React.Component{
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
      return (
          <div>
              <DashboardContainer/>
          </div>
      );
  }
};

export default App;
