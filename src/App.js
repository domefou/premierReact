import React from "react";
import Forms from "./form";

class App extends React.Component{
  constructor(props){
      super(props);
    this.state = {
      count: 0
    };
  }

  resetCount = () => { 
    this.setState({ count: 0 });
}

 render(){ 
    return ( 
      <div> 
        <Forms /> {/* Utilisation correcte du composant Forms */} 
        <p>compteur : {this.state.count}</p> 
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>+1</button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>-1</button>
        <button onClick={this.resetCount}>Reset</button> {/* Bouton Reset */}
      </div> ); }
    }

export default App;