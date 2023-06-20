import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SalesChat from "../sales/SalesChat";
import ApiForms from "../forms-api/ApiForms";
import Solution from "../sales/Solution";


/** Site-wide routes.
 *
 *
 * Visiting a non-existant route navigates to the homepage.
 */

function RoutesList({submit, questions}) {
  console.debug("Routes");

  return (
    <div className="pt-5">
      <Routes>
          <Route path="/saleschat"element={<SalesChat submit={submit} questions={questions} />} />
          <Route path="/apiforms"element={<ApiForms submit={submit} />} />
          <Route path="/solution"element={<Solution />} />
          <Route path="*" element={<Navigate to="/saleschat" />}/>
      </Routes>
    </div>
  );
}

export default RoutesList;