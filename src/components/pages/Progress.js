import React from "react"
import "../../App.css";
import {Navbar} from "../Navbar";
import Footer from '../Footer';

export function Progress() {
    return(
        <div className="Progress">
            <Navbar header="Under Progress" />
            <div className="page-content">
               <h1>Under Construction</h1>
               <p style={{textAlign: "center"}}>Sorry! This website is still in the making. This page will be available soon.</p>
            </div>
            <Footer year={new Date().getFullYear()}/>
        </div>
    );
}