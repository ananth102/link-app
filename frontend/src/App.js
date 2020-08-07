import React from 'react';

import Link from "./components/link";
import Links_list from "./components/links_list";

function App() {
  return (
    <div className="App">
    <Link onClick={onLinkClick} linkid="meow" linktext="https://www.google.com/"/>
    {/* <Links_list linkArr={["woof"]} onClick={onLinkClick} /> */}
    </div>
  );
  function onLinkClick(id){
    console.log(id);
  }
}

export default App;
