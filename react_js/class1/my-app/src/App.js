import React from 'react';
import './appcopy.css';

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import FirstRow from './components/FirstRow';
import SecondRow from './components/SecondRow';
import ThirdRow from './components/ThirdRow';
import Footer from './components/Footer';

function App() {
  return (
    
    <div className="App">

      <header>

      </header>


      <div id="wrapper">

        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">

          <div id="content">

            <Topbar />

            <div className="container-fluid">

              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
              </div>

              <FirstRow />


              <SecondRow />


              <h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>
              <ThirdRow />




            </div>
          </div>


          <Footer />


        </div>

      </div>


    </div>
  );
}

export default App;
