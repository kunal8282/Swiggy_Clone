import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import RestaurantPage from './Components/RestaurantPage';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"

function App() {
  return (
      <>
        <Header />
        <Outlet />
      </>
  );
}

const routing = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path : "/restaurant/:id",
        element: <RestaurantPage /> 
      }
    ]
  }
])

function AppRouting(){
  return (
    <>  
        <RouterProvider router={routing}/>
    </>
  )
}


export default AppRouting;
