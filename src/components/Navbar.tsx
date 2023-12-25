import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "./icons";
import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";
import Cart from "./Cart";

export default function Navbar() {
  const user = null;
  return (
    <div className="sticky inset-x-0 top-0 z-50 h-16 bg-white">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex items-center h-16">
              {/* TODO: Mobile nav */}
              <div className="flex ml-4 lg:ml-0">
                <Link href="/">
                  <Icons.logo className="w-10 h-10" />
                </Link>
              </div>
              <div className="z-50 hidden lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>
              <div className="flex items-center ml-auto">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {user ? null : (
                    <Link
                      href="/sign-in"
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Sign In
                    </Link>
                  )}
                  {user ? null : (
                    <span className="w-px h-6 bg-gray-200" aria-hidden="true" />
                  )}
                  {user ? (
                    <p></p>
                  ) : (
                    <Link
                      href="/sign-up"
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Create Account
                    </Link>
                  )}
                  {user ? (
                    <span className="w-px h-6 bg-gray-200" aria-hidden="true" />
                  ) : null}
                  {user ? null : (
                    <div className="flex lg:ml-6">
                      <span
                        className="w-px h-6 bg-gray-200"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                  <div className="flow-root ml-4 lg:ml-6">
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
}
