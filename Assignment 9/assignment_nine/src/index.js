import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App'

// function Car (props) {
//   return (<h2>{props.color} Car!</h2>);
// }

// function Garage (){
//   return (
//     <>
//       <h2>Who's in the garage?</h2>
//       <Car color = "blue" />
    
//     </>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)