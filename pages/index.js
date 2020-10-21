/*eslint-disable*/
import React from "react";
import Link from "next/link";
import PageWrapper from "../configApp/PageWrapper";
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import Footer from "../components/Footers/Footer.js";
import Landing from "../views/Landing";

function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <Landing />
      <Footer />
    </>
  );
}
export default PageWrapper(Index);
