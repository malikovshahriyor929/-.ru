import React from "react";
import Showcase from "../../components/showcase";
import UnderTheShowcase from "../../components/underTheShowcase";
import TypesOfUnderShowcase from "../../components/type";
import DiscountUnderType from "../../components/discountUnderType";
import Card from "../../components/card";
import Brend from "../../components/brend";
import CardBestSell from "../../components/card bestSell";
import News from "../../components/news";

const Home = () => {
  return (
    <div>
      <Showcase />
      <UnderTheShowcase />
      <TypesOfUnderShowcase />
      <DiscountUnderType />
      <Card />
      <Brend />
      <CardBestSell />
      <News />
    </div>
  );
};

export default Home;
