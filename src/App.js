import React from 'react';
import './App.css';
import Timer from './component/Timer';
function convertion (duration) {
  var milliseconds = parseInt((duration%1000)/100)
        , seconds = parseInt((duration/1000)%60)
        , minutes = parseInt((duration/(1000*60))%60)
        , hours = parseInt((duration/(1000*60*60))%24);

        return{h:hours,m:minutes,s:seconds}
}
  var t =convertion(789999)


function App() {
  return (
    <div className="App">
      <Timer h={t.h} m={t.m} s={t.s}/> 
    </div>
  );
}

export default App;
