import React from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

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
  const match = useRouteMatch();
  const { quoteId } = useParams();
  const quote = DUMMY_QUOTEs.find(q => q.id === parseInt(quoteId));
  console.log(match);

  if (!quote) {
    return <p>No Quote Found</p>;
  }
  return (
    <>
      <HighLightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`} component={Comments} />
    </>
  );
};

export default QuoteDetail;
