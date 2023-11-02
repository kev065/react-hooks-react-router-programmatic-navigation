import React from "react";
import { Redirect } from "react-router-dom";

function Home({ isLoggedIn }) {

  // if the user isn't logged in, redirect them to the login page
  if (!isLoggedIn) return <Redirect to="/login" />;

  // otherwise, return the home page
  return (
    <div>
      <h1>Welcome, my boy</h1>
    </div>
  );
}

export default Home;
