import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import AgentDescription from './Components/AgentDescriptionScreen/AgentDesc.tsx'
import 'bootstrap/dist/css/bootstrap.css'

//DOM STUFF
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const DOMroot = ReactDOM.createRoot(document.getElementById('root')!);
//this lets me keep a referencing to DOM root so i can use it later for router i think?
//dont fully get it though need to look up more 

DOMroot.render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, //this renders APP as its root, or initial render path like starting point
    //for navhost/navgraph

    //KEEP IN MIND APP IS THE ROOT, probaly need to refractor to 
    //"agent screen" or smth later
    //error parsing later too 
  },
  {
    path: "AgentDescriptionScreen/:Agent",
    element: <AgentDescription />,
  },

]);

DOMroot.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);