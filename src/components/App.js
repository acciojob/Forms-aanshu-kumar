// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Form from "./Form";
import FormRef from "./FormRef";
import FormState from "./FormState";

const App = () => {
  return (
    <Router>
      <div className="p-4">
        <nav className="flex justify-center gap-4 mb-6">
          <Link id="form-link" to="/">Section 1</Link>
          <Link id="form-ref-link" to="/ref">Section 2</Link>
          <Link id="form-state-link" to="/state">Section 3</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/ref" element={<FormRef />} />
          <Route path="/state" element={<FormState />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



