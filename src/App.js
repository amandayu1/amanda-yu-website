import React, {useState} from 'react';
import './App.css';
import smartCart from "./smartCart.png";
import coronavrus from "./coronavrus.jpg";

function Header() {
  return(
    <header>
      <h1>Amanda's website</h1>
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

function Resume(){
  return(
    <h1>This is the resume page</h1>
  )
}

function Contact(){
  return(
    <h1>This is the Contact page</h1>
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

function App() {
  const [page, setContact] = useState("Home");
  const [loading, setLoading] = useState(false);
  
  if (loading) return <h1>Loading ...</h1>;
  else {
  return (
    <div className="App">
      <h1>This is the {page} page.</h1> 
      <button onClick={() => setContact("Home")}>Home</button>
      <button onClick={() => setContact("Contact Me")}>Contact Me</button> 
      <button onClick={() => setContact("Resume")}>Resume</button> 
      <Header />    
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
}

export default App;
