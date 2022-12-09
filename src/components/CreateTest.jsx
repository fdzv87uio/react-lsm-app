import React, { useState } from "react";
import { getData } from "../utils/getData";

// this is a list of 100 Potential searches
const searchList = [
  "New York",
  "Buffalo",
  "Rochester",
  "Yonkers",
  "Syracuse",
  "Albany",
  "New Rochelle",
  "Mount Vernon",
  "Schenectady",
  "Utica",
  "San Jose",
  "San Francisco",
  "Fresno",
  "Sacramento",
  "Long Beach",
  "Oakland",
  "Bakersfield",
  "Anaheim",
  "Santa Ana",
  "Riverside",
  "Stockton",
  "Chula Vista",
  "Irvine",
  "Fremont",
  "San Bernardino",
  "Modesto",
  "Fontana",
  "Oxnard",
  "Moreno Valley",
  "Huntington Beach",
  "Costa Mesa",
  "Inglewood",
  "Carlsbad",
  "San Buenaventura (Ventura)",
  "Fairfield",
  "West Covina",
  "Murrieta",
  "Richmond",
  "Norwalk",
  "Antioch",
  "Temecula",
  "Burbank",
  "Daly City",
  "Rialto",
  "Santa Maria",
  "El Cajon",
  "San Mateo",
  "Clovis",
  "Compton",
  "Jurupa Valley",
  "Chicago",
  "Aurora",
  "Rockford",
  "Joliet",
  "Naperville",
  "Springfield",
  "Peoria",
  "Elgin",
  "Waukegan",
  "Cicero",
  "Champaign",
  "Bloomington",
  "Arlington Heights",
  "Evanston",
  "Decatur",
  "Schaumburg",
  "Bolingbrook",
  "Palatine",
  "Skokie",
  "Des Plaines",
  "Jacksonville",
  "Miami",
  "Tampa",
  "Orlando",
  "St. Petersburg",
  "Hialeah",
  "Tallahassee",
  "Fort Lauderdale",
  "Port St. Lucie",
  "Cape Coral",
  "Pembroke Pines",
  "Hollywood",
  "Miramar",
  "Gainesville",
  "Coral Springs",
  "Miami Gardens",
  "Clearwater",
  "Palm Bay",
  "Pompano Beach",
  "West Palm Beach",
  "Seattle",
  "Spokane",
  "Tacoma",
  "Vancouver",
  "Bellevue",
  "Kent",
  "Everett",
  "Renton",
  "Yakima",
  "Federal Way",
  "Spokane Valley",
  "Bellingham",
  "Kennewick",
  "Auburn",
  "Pasco",
  "Marysville",
  "Lakewood",
  "Redmond",
];

function CreateTest({ data, setData }) {
  const [time, setTime] = useState(0);
  const [entityCount, setEntityCount] = useState(0);
  const [status, setStatus] = useState("initial");
  // this function retrieves data entities using the FAQX Search API, and stores it in the store
  async function fetchData() {
    // start timer
    const startTime = performance.now().toFixed(4);
    // results array
    let resultsArray = [];
    // entity count
    let ec = 0;
    // loop through searchlist

    searchList.forEach(async (item) => {
      // perform search based on item
      const apiData = await getData(item);
      if (apiData) {
        apiData.forEach((item) => {
          const currentData = item;
          resultsArray.push(currentData);
          ec = ec + 1;
          setEntityCount(ec);
        });
      }
    });
    const endTime = performance.now().toFixed(4);
    const totalTime = (endTime - startTime).toFixed(4);
    setData(resultsArray);
    setTime(totalTime);
    setStatus("Completed");
    //
  }

  function deleteData() {
    setData([]);
    setTime(0);
    setStatus("initial");
    setEntityCount(0);
  }
  return (
    <div>
      <p>
        <strong>Entity Count: </strong>
        {entityCount}
      </p>
      <p>
        <strong>Time (ms): </strong>
        {time}
      </p>
      <p>
        <strong>Status: </strong>
        {status}
      </p>
      <button onClick={() => fetchData()}>Update</button>
      <button onClick={() => deleteData()}>Delete</button>
    </div>
  );
}

export default CreateTest;
