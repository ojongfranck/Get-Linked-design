import useClickOutside from "@/hooks/use-click-outside";
import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { Dispatch, ReactNode, SetStateAction, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../atoms/logo";
import Icons from "../molecules/icons";
import Button, { buttonVariants } from "../ui/button";
import NavBarLinks from "./nav-bar-links";

export default function NavBar() {
  return (
    <>
      <header className="h-20 border-b-[0.5px] border-b-foreground/15 sticky top-0 mb-8 flex items-center z-50">
        <div className="container flex items-center justify-between h-full">
          <Logo />
          <div className="items-center justify-between hidden gap-x-24 md:flex ">
            <NavBarLinks className="hidden lg:flex" />
            <RegisterButton />
          </div>
          <MobileNav>
            {({ setOpen }) => (
              <Button
                variant={"ghost"}
                size="icon"
                onClick={() => setOpen(true)}
                className="md:hidden "
              >
                <Icons.Menu />
              </Button>
            )}
          </MobileNav>
        </div>
      </header>
    </>
  );
}

interface RegisterButtonProps extends VariantProps<typeof buttonVariants> {
  className?: string;
}
export const RegisterButton = ({ size, variant, className }: RegisterButtonProps) => (
  <Link
    to={"/register"}
    className={buttonVariants({ size, variant, className })}
  >
    Register
  </Link>
);

interface MobileNavProps {
  children: ({}: {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
  }) => ReactNode;
}

const MobileNav = ({ children }: MobileNavProps) => {
  const [open, setOpen] = useState(false);

  const ref = useRef(null);
  useClickOutside(ref, () => setOpen(false));

  return (
    <>
      <div
        className={cn(
          "absolute h-screen bg-black/60  md:hidden  w-full top-0 left-0  transition-all duration-300",
          {
            "overflow-hidden invisible opacity-0 ":
              !open,
          }
        )}
      >
        <div
          ref={ref}
          className={cn(
            "pt-20  supports-[backdrop-filter]:bg-background/60 shadow-lg backdrop-blur w-full top-0 left-0 h-[50vh] transition-all duration-300",
            {
              "h-0 overflow-hidden invisible opacity-0 -translate-y-[52vh]":
                !open,
            }
          )}
        >
          <Logo className="absolute top-5 left-5 w-28" />
          <div className="h-full px-5">
            <NavBarLinks
              className="flex flex-col items-start gap-4 max-w-fit"
              onClick={() => setOpen(false)}
            />
            <RegisterButton size={"sm"} className="w-full mt-6 xs:w-36" />
          </div>
          <Button
            size={"icon"}
            variant={"outline"}
            onClick={() => setOpen(false)}
            wrapperClassName="rounded-full absolute right-5 top-5 size-8"
            className="p-0 rounded-full size-[30px] abs"
          >
            <Icons.Cancel className="size-5" />
          </Button>
        </div>
      </div>
      {children({ open, setOpen })}
    </>
  );
};
