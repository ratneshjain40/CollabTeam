import Header from "./Header/Header";
import Dashboard from "./Dashboard/Dashboard";
import { useState, useEffect } from "react";
import { GET_WITH_CRED } from "../API_HEADERS";

function Main() {
  const [isLogged, setIsLogged] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    fetch("/is-logged", { GET_WITH_CRED })
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) {
          setIsLogged(false);
        } else {
          setIsLogged(true);
          setUserName(data.user);
        }
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="Main">
      <Header userName={userName} isLogged={isLogged} />
      <Dashboard isLogged={isLogged} />
    </div>
  );
}

export default Main;
