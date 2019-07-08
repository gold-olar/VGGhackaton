import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Upload from '../components/Upload/Upload';
import Footer from '../components/Footer/Footer';
import Definitions from '../components/Definitions/Definitions';

// import QuestionCard from '../components/QuestionCard/QuestionCard';

import {definitions} from '../components/definitions';
import {questions} from '../components/questions';

class App extends Component{
    constructor() {
      super();
      this.state = {
        route : '',
        currentQuestion : 0,
        questions: [],
        definitions: [],
        score: '',
        totalQuestions: '',
        showResults: false,
        chosen: false,
        finished: true
      };
    }

    componentDidMount(){
      // console.log(questions);
      this.setState({
        questions,
        definitions
      })
    }
    RouteChange = (newRoute) => {
      this.setState({
        route: newRoute
      })
    };


    
  render(){
    return(
        <BrowserRouter>
        <Route  path ="/" exact render={()=> <Home/> }/>
        <Route  path ="/upload" exact render={()=> <Upload/>}/>
        <Route  path ="/definitions" exact render={()=> <Definitions definitions={this.state.definitions}/>}/>
        

        <Footer/>
          
        
        </BrowserRouter>
      )
  }
}


export default App;


