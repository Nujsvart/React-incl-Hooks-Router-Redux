import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  console.log("App running");

  // React.memo , useMemo, useCallback

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={() => setShowParagraph(!showParagraph)}>
        Toggle Paragraph
      </Button>
    </div>
  );
}

export default App;
