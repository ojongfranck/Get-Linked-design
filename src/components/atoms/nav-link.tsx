import { cn } from "@/utils";
import { Link, LinkProps } from "react-router-dom";

export default function NavLinkItem({ className, ...props }: LinkProps) {
  return <Link className={cn("capitalize", className)} {...props} />;
}
