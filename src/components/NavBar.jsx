import React from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const count = useSelector((state) => state.counter.value);

  return <div>{`Updated Navbar count using redux toolkit is : ${count} `}</div>;
};

export default NavBar;
