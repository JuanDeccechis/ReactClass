import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    //1- Implementar el state inicial, con una propiedad "selectedLanguage"
    this.state = {
      selectedLanguage: "All"
    };
    //2- Bindear el metodo updateLanguage
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    console.log("Se hizo click en: ", lang);
    //4- Implementar este metodo, que actualiza el state con el nuevo language
    this.setState({
      selectedLanguage: lang
    });
  }

  render() {
    var languages = [
      "All",
      "Spanish",
      "French",
      "English",
      "Chinese",
      "Italian"
    ];
    /*Creamos una copia de this en self para poder utilizar dentro del map que se
    encuentra debajo, ya que sino perdemos el contexto*/
    var self = this;
    return (
      <div className="container">
        <div>
          <p>Selected Language is {this.state.selectedLanguage} </p>
        </div>
        <div>
          <ul className="languages">
            {languages.map((language, index) => {
              return (
                <li key={index}
                  style={
                    language ===
                      self.state
                        .selectedLanguage /* Acceder y compararlo con el valor de state*/
                      ? { color: "#d0021b" }
                      : {}
                  }
                  onClick={function() {
                    self.updateLanguage(language);
                  }}
                >
                {language}
                </li>
              )
            })}
            
            
          </ul>
        </div>

      </div>
    );
  }
}

export default App;
