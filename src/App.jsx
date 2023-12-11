import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "@/router/index.jsx";
import MainLayout from "@/layout/MainLayout";
import NotFound from "@/pages/not-found/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      errorElement: <NotFound />,
      children: routes,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
