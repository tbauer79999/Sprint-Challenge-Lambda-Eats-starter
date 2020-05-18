import React from "react";
import { Route } from "react-router-dom";
import NewFORM from './components/RadioMenu';
import NavNav from './nav.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// import 'bootstrap/dist/css/bootstrap.min.css';

// const App = () => {
//   return (
//     <div>
//       <h1>Lambda Eats</h1>
//       <Fullpage></Fullpage>
//     </div>
//   );
// };


const App = () => {
  return (
    
   <div>
      <nav className="navbar">
      </nav>
      <div className="App">
          <Route exact path="/" component={NavNav} />
          <Route exact path="/pizza" component={NewFORM} />
      </div>
      </div>
  )};












export default App;
