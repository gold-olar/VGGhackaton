import React, {Component} from 'react';
import './App.css';
import NavigationBar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header'
import Services from '../components/Services/Services';
import Upload from '../components/Upload/Upload';
import Footer from '../components/Footer/Footer';

class App extends Component{
    constructor() {
      super();
      this.state = {
        route : ''
      };
    }

    RouteChange = (newRoute) => {
      this.setState({
       route: newRoute
       })
      };
    
  render(){
    return(
        <div>
        
         {this.state.route === 'scan' ?
            <Upload/>
        :
        <div>
           <NavigationBar/>
            <Header RouteChange= {this.RouteChange}/>
            <Services/>
        </div>
         }

         <Footer/>
        </div>
      )
  }
}


export default App;



