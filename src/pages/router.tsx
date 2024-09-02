import { createBrowserRouter } from "react-router-dom";
import Contact from "./contact";
import Home from "./home";
import Layout from "./layout";
import NotFound from "./not-found";
import FAQ from "@/components/ui/FAQ";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
       
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
    ],
  },
]);
