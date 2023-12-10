import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './index.css'
import ErrorPage from "../src/error404/errorPage.tsx";
import AboutPage from './components/About/AboutPage.tsx';
import ContactPage from './components/Contacts/ContactPage.tsx';
import WellListPage from './components/ListOfWell/WellListPage.tsx';
import InregistrarePage from './components/Inregistrarea/InregistrareaPage.tsx';



const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
    errorElement: <ErrorPage />,
  },
  {
    path : "about/",
    element : <AboutPage/>,
    errorElement: <ErrorPage />,
  },
  {
    path : "Inregistrarea/",
    element :   <InregistrarePage/>,
    errorElement: <ErrorPage />,
  },
  // {
  //   path : "lista-de-fintini/",
  //   element :   <WellListPage/>,
  //   errorElement:  <ErrorPage />,
  // },
  {
    path : "contacts/",
    element : <ContactPage/>,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
