import React from "react";
import "../styles/main.css";
import { HTMLHeader } from "./htmlHead";
import { SideNav } from "./sidenav";
import { TopNav } from "./topnav";
import { motion } from "framer-motion";

export const Layout = (props) => {
  return (
    <div className="flex flex-col md:flex-row bg-background-primary min-h-screen">
      <HTMLHeader />
      <div className="w-full md:hidden">
        <TopNav />
      </div>
      <div className="w-12 hidden md:block h-screen">
        <SideNav />
      </div>

      <motion.main
        className="w-full flex-1 flex flex-col items-center p-3 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {props.children}
      </motion.main>
    </div>
  );
};
