import './App.css';
import MccubedApi from './api/api';
import {useState} from "react";
import RoutesList from './routes-nav/RoutesList';
import Navigation from './routes-nav/Navigation';
// import ApiForms from './forms-api/ApiForms';

/**
 * App
 *
 * App => {RoutesList, ApiForms}
 */
function App() {

  let questions = [];
  async function requests(data, method){
    console.log("requests", "data", data, "method", method)
    const endpoint="";
    return await MccubedApi.request(endpoint,data,method);
  }


  return (
    <div className="App">
    <Navigation />
    <RoutesList submit={requests} questions={questions} />
    </div>
  );
}

export default App;
