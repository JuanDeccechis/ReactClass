import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  render() {
    const tabContent = [
      "This is a detail text inisde the first tab.",
      "You just switched to the second tab.",
      "Hi there, this is the third tab."
    ];
      
    return (
      <div className="App">
        <Card title="Card 1" subTitle="Subtitle 1" description="Lorem ipsum lorem ipsum" tabContent={tabContent} />
        <Card title="Card 2" subTitle="Subtitle 2" description="Description of a dummy card to test this components, with a long text" tabContent={tabContent} />
        <Card title="Card 3" subTitle="Subtitle 3" tabContent={tabContent} />
        <Card title="Card 4" subTitle="Subtitle 4" tabContent={tabContent} />
        <Card title="Card 5" subTitle="Subtitle 5" description="Lorem ipsum asda asdasd " tabContent={tabContent} />
        <Card title="Card 6" subTitle="Subtitle 6" description="Description of a dummy card to test this components, with a long text" tabContent={tabContent} />
      </div>
    );
  }
}

class Card extends Component {

  render() {
    return (
      <div className="card">
        <h1 className="title">COMPLETAR</h1>
        <h4 className="subtitle">COMPLETAR</h4>
        <div className="description">
          COMPLETAR
        </div>
        <button>Show/Hide Tabs</button>
        
        <div className="tabContainer">
          <div className="tabsRow">
            <div className="tab selected">Tab 1</div>
            <div className="tab">Tab 2</div>
            <div className="tab">Tab 3</div>
          </div>
          <div className="tabContent">
            COMPLETAR
          </div>
        </div>
      </div>
    )
  }
}

export default App;
