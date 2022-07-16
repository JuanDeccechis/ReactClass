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
  constructor(props) {
    super(props);

    this.state = {
      showTabs: false,
      selectedTabIndex: 0
    }
  }

  toggleTabs = () => {
    this.setState((prevState) => {
      return {
        showTabs: !prevState.showTabs
      }
    })
  }

  render() {
    const { showTabs, selectedTabIndex } = this.state;
    const { title, subTitle, description = "Default description", tabContent } = this.props;
    return (
      <div className="card">
        <h1 className="title">{title}</h1>
        <h4 className="subtitle">{subTitle}</h4>
        <div className="description">
          {description}
        </div>
        <button onClick={this.toggleTabs}>Show/Hide Tabs</button>
        
        {showTabs && 
          <div className="tabContainer">
            <div className="tabsRow">
              <div 
                className={`tab ${selectedTabIndex === 0 ? 'selected' : ''}`}
                onClick={() => this.setState({ selectedTabIndex: 0 })}
              >
                Tab 1
              </div>
              <div 
                className={`tab ${selectedTabIndex === 1 ? 'selected' : ''}`}
                onClick={() => this.setState({ selectedTabIndex: 1 })}
              >
                Tab 2
              </div>
              <div 
                className={`tab ${selectedTabIndex === 2 ? 'selected' : ''}`}
                onClick={() => this.setState({ selectedTabIndex: 2 })}
              >
                Tab 3
              </div>
            </div>
            <div className="tabContent">
              {tabContent[selectedTabIndex]}
            </div>
          </div>
        }
      </div>
    )
  }
}

export default App;
