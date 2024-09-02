import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section>
      <div className="container flex flex-col items-center justify-center h-screen gap-5">
        <h1 className="text-xl font-bold">404 not found</h1>
        <Link to="/" className={buttonVariants({size:"sm",className:"rounded-full "})}>Back home</Link>
      </div>
    </section>
  );
}
