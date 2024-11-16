/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

const Cards = () => {
  const { category } = useParams();
  const data = useLoaderData();
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    if (category) {
      const filteredGadgets = data.filter((data) => data.category === category);
      setGadgets(filteredGadgets);
    } else {
      setGadgets(data);
    }
  }, [category, data]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {gadgets.map((data) => (
        <Card data={data}></Card>
      ))}
    </div>
  );
};

export default Cards;
