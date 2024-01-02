import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import EventReminder from './pages/EventReminder';
import Home from './pages/Home';
import UpcomingReminder from "./pages/UpcomingReminder";

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
        path: "upcoming",
        element: <UpcomingReminder />
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
