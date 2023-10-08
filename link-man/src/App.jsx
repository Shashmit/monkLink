import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import RedirectPage from "./pages/RedirectPage/RedirectPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/:shortId",
    element: <RedirectPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App(props) {
  return (
    <div>
      <RouterProvider router={BrowserRouter} />
    </div>
  );
}

export default App;
