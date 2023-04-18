import React from "react";
import Header from "../components/Header";
import landing from "../assets/images/landing.jpg";

import ListByCity from "../components/ListByCity";
import SearchItem from "../components/SearchItem";
import ListByType from "../components/ListByType";
import General from "../components/General";

const Home = () => {
  return (
    <>
      <Header />
      <ListByCity />
      <General />

      <SearchItem />
      <ListByType />
    </>
  );
};

export default Home;
