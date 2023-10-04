import './App.css';
import MainMenu from './components/MainMenu/MainMenu';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Game from './components/Game/Game';
import Settings from './components/Settings/Settings';
import SignUp from './components/Sign-up/SignUp';
import SignIn from './components/Sign-in/SignIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainMenu />,
  },
  {
    path: "/settings",
    element:<Settings/>
  },
  {
    path: "/game",
    element: <Game />
  },
  {
    path: "/sign-up",
    element: <SignUp />
  },
  {
    path: "/sign-in",
    element: <SignIn />,
    exact : true
  },
  {
    path: "*",
    element: <div className='h-screen bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center flex-col gap-6'>
      <p className='text-6xl text-white animate-bounce'>PAGE NOT FOUND</p>
    </div>
  }
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
