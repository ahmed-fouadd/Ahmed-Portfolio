import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import ProjectCymatics from "./pages/ProjectCymatics";
import ProjectOrbit from "./pages/ProjectOrbit";
import ProjectLoftCapstone from "./pages/ProjectLoftCapstone";
import ProjectInnerLight from "./pages/ProjectInnerLight";
import About from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/projects/loft-capstone",
    Component: ProjectLoftCapstone,
  },
  {
    path: "/projects/cymatics-resonance",
    Component: ProjectCymatics,
  },
  {
    path: "/projects/orbit-lighting",
    Component: ProjectOrbit,
  },
  {
    path: "/projects/innerlight",
    Component: ProjectInnerLight,
  },
  {
    path: "/about",
    Component: About,
  },
]);