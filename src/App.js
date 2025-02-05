
import './App.css';
import NavBar from './Components/NavBar';
import React from 'react'
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
const App=()=>{
  const pagesize=9;
  
    return (
      <div>
        <Router>
        <NavBar/>
        <Routes>
              <Route exact path="/" element={<News  key='general' pageSize={pagesize} country="us" category="general" />} />
              <Route exact path="/science" element={<News  key='science' pageSize={pagesize} country="us" category="science" />} />
              <Route exact path="/entertainment" element={<News  key='entertainment' pageSize={pagesize} country="us" category="entertainment" />} />
              <Route exact path="/sports" element={<News  key='sports' pageSize={pagesize} country="us" category="sports" />} />
              <Route exact path="/business" element={<News  key='business' pageSize={pagesize} country="us" category="business" />} />
              <Route exact path="/health" element={<News  key='health' pageSize={pagesize} country="us" category="health" />} />
              <Route exact path="/technology" element={<News  key='tecchnology' pageSize={pagesize} country="us" category="technology" />} />
          </Routes> 
        </Router>
      </div>
    )
  
}

export default App