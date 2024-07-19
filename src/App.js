
import './App.css';

import { Layout, RequireAuth } from './routes/layout/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/login/Login';
import Signup from './routes/register/Signup';
import HomePage from './routes/homePage/HomePage';
import { Provider } from 'react-redux';
import store from './redux/store';
import ConnectionForm from './routes/connectUs/ConnectionForm';
import ForgetPass from './routes/forgetPassword/ForgetPass';
import AllInflucer from './routes/influcerAll/AllInflucer';
import SingleInfu from './routes/SingleInfuCard/SingleInfu';
import ScrollToTop from './utils/ScrollTop';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
       
      ],
    },

    {
      path: '/',
      element: <RequireAuth />,
      children: [
        {
          path: '/connect',
          element: <ConnectionForm />,
        },
        {
          path: '/allinfuc',
          element: <AllInflucer />,
        },
        {
          path: 'singleInfu',
          element: <SingleInfu />,
        },
      ],
    },

    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Signup />,
    },
    {
      path: '/forgetPass',
      element: <ForgetPass />,
    },
  ]);
  return (
    <div className="App ">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
