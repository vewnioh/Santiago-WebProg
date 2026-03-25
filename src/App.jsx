import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import ArticlePage from "./pages/ArticlePage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

const routes = [
  { 
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // Use index: true for the default home route
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "articles", // Updated to plural to match NavBar
        element: <ArticlePage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);
function App() {
  return <RouterProvider router={router} />;
}

export default App;