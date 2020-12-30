import React, {useState} from 'react';
import '../../App.css';
import Landing from "../Landing";
import smartCart from "../smartCart.png";
import coronavrus from "../coronavrus.jpg";
import Navbar from '../Navbar';
import Cards from '../Cards';
import { Button } from '../Button';

function Header() {
  const [page, setContact] = useState("my skills.");  
  return(
      <header className="App">
        <h1>Take a look at {page}.</h1> 
        <Button className="btns" onClick={() => setContact("Development")}>Development</Button>
        <Button className="btns" onClick={() => setContact("Design")}>Design</Button> 
        <Button className="btns" onClick={() => setContact("Product Management")}>Product Management</Button>
      </header>
    )
  }
  
  function ProjectCard({image , alt, proj_name, projLink, proj_description}){
    return(
      <section style={{border: "2px solid grey"}}>
        <img src={image} width={300} alt={alt}/>
        <h1>{proj_name}</h1>
        <lead><a href={projLink} class="active" style={{color: 'blue'}} activeStyle={{color: 'grey'}}>
          Click here!</a></lead>
        <p>{proj_description}</p>
      </section>
    )
  }
  
  function Footer({listThing, year}){
    return(
      <footer>
        <ul style={{textAlign: "left"}}>
          {listThing.map( (listItemThingTemp) =>
          <li key={listItemThingTemp.id}>{listItemThingTemp.title}</li>)}
        </ul>
        <p>Contact me</p>
        <p>Copyright © {year}</p>
   
      </footer>
    )
  }
  
  const listThing = [
    "Engineering",
    "GEM",
    "list item 3"
  ]
  
  const listObjects = listThing.map((listItem, i) => ({id: i, title: listItem}))
  
  export function HomePage() {
    /*const [loading, setLoading] = useState(false);*/
    return (
      <div className="App">
        <Navbar header="My Website Homepage"/>
        <Landing />  
        <Header />  
        <Cards />
        <ProjectCard
          image={smartCart}
          alt="SmartCart logo"
          projLink="https://devpost.com/software/grocery-app-n0ps83"
          proj_name="Unzucc.me"
          proj_description="Grocery App on moblie used to scan items"
          />
        <ProjectCard
          image={coronavrus}
          alt="Coronavrus logo"
          projLink="https://devpost.com/software/coronavrus"
          proj_name="Coronavrus"
          proj_description="An educational augmented reality app to show you how long COVID-19 can live on different surfaces"/>
        <Footer year={new Date().getFullYear()} listThing={listObjects}/>
      </div>
    );
  }

  export default HomePage;