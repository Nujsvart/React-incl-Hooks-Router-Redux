import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTEs = [
  { id: 1, text: "I love React", author: "React" },
  { id: 2, text: "I love Redux", author: "Redux" },
  { id: 3, text: "I love React Router", author: "React Router" },
  { id: 4, text: "I love React Hooks", author: "React Hooks" },
  { id: 5, text: "I love React Context", author: "React Context" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTEs} />;
};

export default AllQuotes;
