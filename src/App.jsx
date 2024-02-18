import { useState } from "react";
import "./App.css";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import NavbarTop from "./NavbarTop";
import Footer from "./pages/footer/Footer";
function App() {
  // const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/about",
      element: <div>About</div>,
    },
  ]);

  return (
    <div>
      <NavbarTop />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
