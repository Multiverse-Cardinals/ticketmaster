require("dotenv").config();
import React, { useEffect, useState } from "react";
import { Button, Input } from "semantic-ui-react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";

let page = 0;
function GetEvents() {
  const [eventList, setEventList] = useState([]);
  const [activePage, setActivePage] = useState(0);
  const [query, setQuery] = useState("Coachella");
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(false);

  let TM_API = `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.TM_KEY}&page=${activePage}&keyword=${query}`; //used TM Api key from .env file

  const getEvents = () => {
    let updatedSearch = searchText.replace(/[\s,]/g, ","); //replace space between keywords with comma for api
    setQuery(updatedSearch);
    setSearchText("");
  };

  useEffect(() => {
    fetch(TM_API)
      .then((res) => res.json())
      .then((data) => {
        setEventList(data._embedded.events);
      })
      .catch((err) => {
        console.log("Error", err);
        setError(true);
        alert("Search not found, please search again");
      });
  }, [activePage, query]);

  const previousPage = () => {
    if (!page == 0) {
      page--;
    }
  };
  const nextPage = () => {
    page++;
  };

  return (
    <div id="main">
      <div id="wrapper">
        <Input
          id="search"
          placeholder="Search..."
          onChange={(event) => setSearchText(event.target.value)}
        />
        <Button
          id="searchBtn"
          content="Search"
          className="btn btn-outline-primary"
          onClick={() => {
            getEvents();
          }}
        />
      </div>

      <Container id="container">
        {console.log(eventList)}

        {eventList.map((eachEvent) => {
          const images = eachEvent.images; //array of image objects
          const imageSize = "4_3";
          let imageUrl;
          images.map((image) => {
            //map through the array of images
            if (image.ratio == imageSize) {
              //if the image ratio is 4_3 then assign the url of this image to imageUrl
              imageUrl = image.url;
            }
          });

          const date = eachEvent.dates.start.dateTime;
          const formatDate = moment(date).format("MMMM Do, YYYY"); //used moment to format date
          const formatTime = moment(date).format("h:mm A");
          const venueName = eachEvent._embedded.venues[0].name;
          const city = eachEvent._embedded.venues[0].city.name;
          const state = eachEvent._embedded.venues[0].state.stateCode;

          return (
            <div className="card" style={{ width: 18 + "rem" }}>
              <img
                className="card-img-top"
                src={imageUrl}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{eachEvent.name}</h5>
                <p className="card-text">{city + ", " + state}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{venueName}</li>
                <li className="list-group-item">
                  {formatDate + " at " + formatTime}
                </li>
              </ul>
              <div className="card-body">
                <a
                  href={eachEvent.url}
                  className="btn btn-info"
                  role="button"
                  target="_blank"
                >
                  {/* target blank to open ticket link in new tab*/}
                  View Tickets
                </a>
              </div>
            </div>

            // <div>
            //   {/* <span>{eachEvent.name}</span>
            //   <img src={imageUrl}></img> */}
            // </div>
          );
        })}
      </Container>
      <div id="pageBtns">
        <Button
          className="btn btn-outline-primary"
          content="Back"
          onClick={() => {
            previousPage();
            setActivePage(page);
          }}
        />
        <Button
          className="btn btn-outline-primary"
          content="Next"
          onClick={() => {
            nextPage();
            setActivePage(page);
          }}
        />
      </div>
    </div>
  );
}

export default GetEvents;
