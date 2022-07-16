import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        Hola Mundo V5
        <Footer />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));