import React from "react";
import { useParams } from "react-router-dom";

const QuoteDetail = () => {
  const { quoteId } = useParams();
  return (
    <div>
      QuoteDetail
      <h1>{quoteId}</h1>
    </div>
  );
};

export default QuoteDetail;
