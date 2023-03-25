import React, { useEffect, useState } from "react";
import { Button, Input } from "semantic-ui-react";
const TM_KEY = process.env.REACT_APP_TM_KEY;

function App() {
  const [eventList, setEventList] = useState([]);

  let TM_API = `https://app.ticketmaster.com/discovery/v2/events?apikey=${TM_KEY}&keyword=`;

  const getSearchValue = () => {
    let searchValue = document.getElementById("search").value;
    console.log(searchValue);

    TM_API += searchValue;

    console.log(TM_API);
  };

  const getEvents = () => {
    fetch(TM_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEventList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div data-testid="app">
      <h1>Ticketmaster</h1>
      <Input id="search" icon="search" placeholder="Search..." />
      <Button
        onClick={() => {
          getSearchValue();
          getEvents();
        }}
      />
    </div>
  );
}

export { App };
