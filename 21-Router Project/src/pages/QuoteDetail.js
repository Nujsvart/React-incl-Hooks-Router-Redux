import React from "react";
import { useParams, Route } from "react-router-dom";

import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const { quoteId } = useParams();
  return (
    <>
      <h1>QuoteDetail</h1>
      <p>{quoteId}</p>
      <Route path={`/quotes/${quoteId}/comments`} component={Comments} />
    </>
  );
};

export default QuoteDetail;

