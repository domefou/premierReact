/*
-nom de composent toujour avec une majuscule
-toujour importer la bibliotheque react
-verifier les accolades
-verifier le chemin d'acces
-App sert de page de reférence
-veiller a bien exporter et utiliser dans le render pour afficher le contenu
*/
import React from "react";
class Forms extends React.Component{
    constructor(props){
        super(props);
    
        this.state = {
          brand: "Peugeot",
          model: "207",
          color: ""
        }
    
        this.handleChange = this.handleChange.bind(this);
    
    
      
  
      }
    
      handleChange(event){
        this.setState({
          color: event.target.value
        });
      }
    
      render(){
        return(
          <div>
            <h1>Ma voiture</h1>
    
            <h2>Marque :{this.state.brand}</h2>
            <h2>Modèle :{this.state.model} </h2>
            <h2>Ma couleur :{this.state.color} </h2>
    
            <form>
    
              <label htmlFor="selectColor" >Choiosir une couleur</label>
              <select id="selectColor" onChange={this.handleChange} >
                <option value="Bleu" >Bleu</option>
                <option value="Blanc">Blanc</option>
                <option value="Rouge">Rouge</option>
                <option value="Noir">Noir</option>
              </select>
            </form>

        </div>
    
        )}};

export default Forms;