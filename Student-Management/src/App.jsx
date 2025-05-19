import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import StudentList from "./pages/StudentList";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/students",
    element: <StudentList />,
  },
  {
    path: "/add",
    element: <AddStudent />,
  },
  {
    path: "/edit/:id",
    element: <EditStudent />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
