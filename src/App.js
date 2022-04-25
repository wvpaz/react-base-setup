import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-content container-fluid p-5">
          <h3>Oilá!</h3>
          <Routes>
            {/* <Route path='/' element={<Home />} exact />             */}
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;