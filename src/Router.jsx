import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/layout";
import ThemePaletteViewer from "./theme/ThemePaletteViewer";

export const Home = () => {
  return <h2>Home</h2>;
};
export const About = () => {
  return <h2>About</h2>;
};
export const NotFound = () => {
  return <h2>404 Not Found</h2>;
};

// Define the routes using the object structure
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // The layout wraps all nested routes
    errorElement: <NotFound />, // Component to render on route errors
    children: [
      {
        index: true, // This makes the Home page the default route for the parent path ('/')
        element: <Home />,
      },
      {
        path: "about", // Relative path, resolves to '/about'
        element: <About />,
      },
      {
        path: "theme",
        element: <ThemePaletteViewer />,
      },
      {
        path: "FFI",
        element: <my-mfe-page name="React User" />,
      },
      // You can add routes with dynamic parameters
      {
        path: "users/:id",
        element: <div>User Profile</div>,
      },
    ],
  },
  // Add other top-level routes as needed
  // {
  //   path: '/auth',
  //   element: <AuthLayout />,
  //   children: [/* ... */]
  // }
]);

export default router;
