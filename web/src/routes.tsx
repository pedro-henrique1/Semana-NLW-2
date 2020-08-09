import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/landing";
import teacherList from "pages/landing/teacherList";
import teacherForm from "pages/landing/teacherForm";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={teacherForm} />
      <Route path="/give-classes" component={teacherList} />
    </BrowserRouter>
  );
}

export default Routes;
