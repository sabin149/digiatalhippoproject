"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { ShoppingCart } from "lucide-react";
import { Separator } from "./ui/separator";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

export default function Cart() {
  const itemCount = 1;
  const fee = 1;
  return (
    <Sheet>
      <SheetTrigger className="flex items-center p-2 -m-2 group">
        <ShoppingCart
          aria-hidden="true"
          className="flex-shrink-0 w-6 h-6 text-gray-400 group-hover:text-gray-500"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          0
        </span>
      </SheetTrigger>
      <SheetContent className="flex flex-col w-full pr-0 sm:max-w-lg ">
        <SheetTitle>
          <SheetHeader className="space-y-2.5 pr-6">Cart (0)</SheetHeader>
        </SheetTitle>
        {itemCount > 0 ? (
          <>
            <div className="flex flex-col w-full pr-6">
              {/* TODO: cart logic */}
              cart items
            </div>
            <div className="pr-6 space-y-4">
              <Separator />
              <div className="space-y-1.5 pr-6 text-sm"></div>
              <div className="flex">
                <span className="flex-1">Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex">
                <span className="flex-1">Transaction Fee</span>
                <span>{formatPrice(fee)}</span>
              </div>
              <div className="flex">
                <span className="flex-1">Total</span>
                <span>{formatPrice(fee)}</span>
              </div>
            </div>
            <SheetFooter>
              <SheetTrigger asChild>
                <Link
                  className={buttonVariants({
                    className: "w-full",
                  })}
                  href="/cart"
                >
                  Continue to Checkout
                </Link>
              </SheetTrigger>
            </SheetFooter>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full space-y-1">
            <div
              className="relative mb-4 h-60 w-60 text-muted-foreground"
              aria-hidden="true"
            >
              <Image
                src="/hippo-empty-cart.png"
                fill
                alt="Empty shopping cart hippo"
              />
            </div>
            <div className="text-xl font-semibold">
              <SheetTrigger>
                <Link
                  href="/products"
                  className={buttonVariants({
                    variant: "link",
                    className: "text-small text-muted-foreground",
                  })}
                >
                  Add items to your cart to checkout
                </Link>
              </SheetTrigger>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
