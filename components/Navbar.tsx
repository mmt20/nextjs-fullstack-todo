import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <div className="container flex items-center justify-end p-4  gap-4 ">
      <ModeToggle />
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
};

export default Navbar;
