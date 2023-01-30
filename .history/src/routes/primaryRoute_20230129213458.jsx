import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../layouts/PrimaryLayout";
import AboutUsPage from "../pages/AboutUsPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import ServisPage from "../pages/ServisPage";

export const primaryRoute = createBrowserRouter([
  {
    path: '/',
    element: <PrimaryLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'productos',
        element: <h1>Productos</h1>
      },
      {
        path: 'servicios',
        element: <ServisPage />
      },
      {
        path: 'nosotros',
        element: <AboutUsPage />
      },
      {
        path: 'contacto',
        element: <ContactPage />
      }
    ]
  }
]);