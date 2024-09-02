import NavBar from "@/components/organisms/nav-bar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main>
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
    </main>
  );
}
