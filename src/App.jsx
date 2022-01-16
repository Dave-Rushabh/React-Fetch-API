import React, { useEffect, useState } from "react";
import "./App.css";
import BarChartIcon from "@mui/icons-material/BarChart";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    const response = await fetch("https://data.covid19india.org/data.json");
    const actualdata = await response.json();
    console.log(actualdata.statewise);
    setData(actualdata.statewise);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className="title">
        <BarChartIcon /> &nbsp;
        <p className="intro">
          Welcome to INDIA's Covid-19 Daily Updates by RD through Fetch API
        </p>
        &nbsp;
        <BarChartIcon />
      </div>

      <div className="table-container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">State</th>
              <th scope="col">Confirmed</th>
              <th scope="col">Recovered</th>
              <th scope="col">Deaths</th>
              <th scope="col">Active</th>
              <th scope="col">Updated On</th>
            </tr>
          </thead>
          <tbody>
            {data.map((currentElement, index) => {
              return (
                <tr key={index}>
                  <td>{currentElement.state}</td>
                  <td>{currentElement.confirmed}</td>
                  <td>{currentElement.recovered}</td>
                  <td>{currentElement.deaths}</td>
                  <td>{currentElement.active}</td>
                  <td>{currentElement.lastupdatedtime}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
