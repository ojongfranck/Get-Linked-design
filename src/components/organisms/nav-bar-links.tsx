import { cn } from "@/utils";
import { useLocation } from "react-router-dom";
import NavLinkItem from "../atoms/nav-link";
import { ComponentPropsWithoutRef } from "react";

const LINKS = ["#timeline", "#overview", "#FAQs", "contact"] as const;

interface NavBarLinksProps extends ComponentPropsWithoutRef<"div"> {}
export default function NavBarLinks({
  className,
  ...others
}: NavBarLinksProps) {
  const location = useLocation();
  const isActive = (route?: string) =>
    location.hash === route || location.pathname.replace("/", "") === route;

  return (
    <div className={cn("items-center  gap-8 ", className)} {...others}>
      {LINKS.map((link) => (
        <NavLinkItem
          key={link}
          to={`/${link}`}
          className={cn("transition hover:text-transparent bg-clip-text bg-primary-btn",isActive(link) && "active")}
        >
          {link.replace("#", "")}
        </NavLinkItem>
      ))}
    </div>
  );
}
