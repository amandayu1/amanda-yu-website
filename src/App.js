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

function ProjectCard(props){
  return(
    <section style={{border: "2px solid grey"}}>
      <img src={props.image} width={300} alt={props.alt}/>
      <h1>{props.proj_name}</h1>
      <lead><a href={props.projLink} class="active" style={{color: 'blue'}} activeStyle={{color: 'grey'}}>
        Click here!</a></lead>
      <p>{props.proj_description}</p>
    </section>
  )
}

function Footer(props){
  return(
    <footer>
      <ul style={{textAlign: "left"}}>
        {props.listThing.map( (listItemThingTemp) =>
        <li key={listItemThingTemp.id}>{listItemThingTemp.title}</li>)}
      </ul>
      <p>Contact me</p>
      <p>Copyright © {props.year}</p>
 
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
  return (
    <div className="App">
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

export default App;
