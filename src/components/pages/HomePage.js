import React, {useState} from 'react';
import '../../App.css';
import Landing from "../Landing";
import Navbar from '../Navbar';
import Cards from '../Cards';
import Footer from '../Footer';
import { Button } from '../Button';


function Header() {
  const [page, setContact] = useState("my skills");  
  return(
      <header className="home" style={{backgroundColor: "#b0b0b0", paddingTop: "20px", paddingBottom: "20px"}}>
        <h1>Take a look at {page}.</h1> 
        <Button className="btns" onClick={() => setContact("Development")}>Development</Button>
        <Button className="btns" onClick={() => setContact("Design")}>Design</Button> 
        <Button className="btns" onClick={() => setContact("Product Management")}>Product Management</Button>
      </header>
    )
  }
  
 function ListRandom({listThing}){
    return(
      <ul style={{backgroundColor: "#fff", margin:"0", paddingBottom: "20px"}}>
        {listThing.map( (listItemThingTemp) =>
        <li key={listItemThingTemp.id}>{listItemThingTemp.title}</li>)}
      </ul>
    )
  }
  
  
  export function HomePage() {
    /*const [loading, setLoading] = useState(false);*/
    /*Cant declare these two const anywhere */
    const listThing = [
      "Engineering",
      "GEM",
      "list item 3"
    ]
    const listObjects = listThing.map((listItem, i) => ({id: i, title: listItem}))
    return (
      <div className="home">
        <Navbar header="My Website Homepage"/>
        <Landing />  
        {/*<Header /> */}
        <Cards />
        {/*<ListRandom listThing={listObjects} />*/}
        <Footer year={new Date().getFullYear()} />
      </div>
    );
  }

  export default HomePage;