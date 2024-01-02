import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import About from './pages/About';
import EventReminder from './pages/EventReminder';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <EventReminder />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "home",
        element: <Home />
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
