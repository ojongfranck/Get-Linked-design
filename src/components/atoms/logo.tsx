import { Link } from "react-router-dom";
import Icons from "../molecules/icons";
import { cn } from "@/utils";

export default function Logo({className}:{className?:string}) {
  return (
    <Link to={"/"} className={cn("text-xl font-bold",className)}>
      <Icons.Logo className="w-32 md:w-auto"/>
    </Link>
  );
}
