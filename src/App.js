
import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News'
import { BrowserRouter, Link, Routes } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


const App = () => {
  const [progress, setProgress] = useState(0);

  const setprogress = (progress) => {
    setProgress(progress)
  }
  
  let apikey = process.env.REACT_APP_API
  return (
   
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={3}
        
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setprogress} category='general' pagesSize={5} country='in' apikey={apikey} />}></Route>
          <Route exact path="/business" element={<News setProgress={setprogress} key="business" category='business' pagesSize={5} country='in' apikey={apikey} />}></Route>
          <Route exact path="/sports" element={<News setProgress={setprogress} key="sports" category='sports' pagesSize={5} country='in' apikey={apikey} />}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setprogress} key="entertainment" category='entertainment' pagesSize={5} country='in' apikey={apikey} />}></Route>
          <Route exact path="/general" element={<News setProgress={setprogress} key="general" category='general' pagesSize={5} country='in' apikey={apikey} />}></Route>
          <Route exact path="/health" element={<News setProgress={setprogress} key="health" category='health' pagesSize={5} country='in' apikey={apikey} />}></Route>
          <Route exact path="/science" element={<News setProgress={setprogress} key="science" category='science' pagesSize={5} country='in' apikey={apikey} />}></Route>
          <Route exact path="/technology" element={<News setProgress={setprogress} key="technology" category='technology' pagesSize={5} country='in' apikey={apikey} />}></Route>

        </Routes>
      </Router>
    </div>
  )
}
export default App
