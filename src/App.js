import React,{Component} from 'react';
import './App.css';
import ReactDOM from 'react-dom'; 
import Navbar from './components/Navbar';
import CovidUpdate from './covidUpdate/CovidUpdate';
import Footer from './components/Footer';
import SocialMedia from './SocialMedia/SocialMedia';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      news : []
    }
  }
    componentDidMount()
    {
      fetch('https://cryptic-ravine-96718.herokuapp.com/')
     .then((response) => {
    return response.json();
      })
     .then((myJson) => {
       this.setState({
         news : myJson.news
       })
    });
    }
  render(){

    return(
    <div className= "App">
     <Navbar />
     <CovidUpdate />
      <div > 
       {this.state.news.map((item,index) => {
        return (
         <div className = "update"> 
          <h1 className = "heading"> {item.title}  </h1> <br></br>
          <img  className= "image" src = {item.img} alt="logo" />
           <a className = "matter"
            href= {item.link}>
              <h4>Wanna read more {"\n"} </h4>
            </a>
            <br></br> <br></br> <br></br>
         </div>
       )})}
      </div>
       <Footer /> 
       <SocialMedia />
    </div>
    )
  }
};
export default App;