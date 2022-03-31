import React from "react";
import { useParams, Route } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighLightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTEs = [
  { id: 1, text: "I love React", author: "React" },
  { id: 2, text: "I love Redux", author: "Redux" },
  { id: 3, text: "I love React Router", author: "React Router" },
  { id: 4, text: "I love React Hooks", author: "React Hooks" },
  { id: 5, text: "I love React Context", author: "React Context" },
];

const QuoteDetail = () => {
  const { quoteId } = useParams();
  const quote = DUMMY_QUOTEs.find(q => q.id === parseInt(quoteId));

  if (!quote) {
    return <p>No Quote Found</p>;
  }
  return (
    <>
      <HighLightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${quoteId}/comments`} component={Comments} />
    </>
  );
};

export default QuoteDetail;
