import './App.css';
import Layout from './components/Layout/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Introduction from './Pages/Getstarted/Introduction';
import Button from './Pages/Component/Button';
import 'twuiclass/dist/tailwind.css'
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "introduction",
        element: <Introduction/>,
      },
      {
        path: "Button",
        element: <Button/>,
      },
    ]
  }
  
  
]);

function App() {
 

  return (
       <>
     <RouterProvider router={router} />
     </> 
  )
}

export default App
