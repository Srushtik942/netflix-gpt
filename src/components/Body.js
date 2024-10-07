import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, Navigate, useNavigate } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
const Body = () => {

    //creating routing



    const appRouter = createBrowserRouter([
        {
            path:"/",
            element: <Login/>
        },
        {
            path:"/browse",
            element: <Browse/>
        },
    ]);


  return (
    <div>
   <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;
