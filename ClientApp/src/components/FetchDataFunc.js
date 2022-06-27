import React, { useState, useLayoutEffect } from "react"
import axios from "axios"

const FetchDataFunc = () => {
  const [forecasts, setForecasts] = useState({
    data: [],
    loading: true,
  })

  useLayoutEffect(() => {
    populateWeatherData()
    console.log(forecasts.data)
  }, [])

  const renderForecastsTable = (forecasts) => {
    return (
      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((forecast) => (
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  const populateWeatherData = async () => {
    axios("http://localhost:44445/weatherforecast")
      .then((res) => setForecasts({ data: res.data }))
      .catch((err) => console.log(err))
  }

  let contents = forecasts.loading ? (
    <p>
      <em>Loading...</em>
    </p>
  ) : (
    renderForecastsTable(forecasts.data)
  )

  return (
    <div>
      <h1 id="tabelLabel">Weather forecast</h1>
      <p>This component demonstrates fetching data from the server.</p>
      {contents}
    </div>
  )
}

export default FetchDataFunc

// import React, { Component } from "react"

// export class FetchData extends Component {
//   static displayName = FetchData.name

//   constructor(props) {
//     super(props)
//     this.state = { forecasts: [], loading: true }
//   }

//   componentDidMount() {
//     this.populateWeatherData()
//   }

//   static renderForecastsTable(forecasts) {
//     return (
//       <table className="table table-striped" aria-labelledby="tabelLabel">
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Temp. (C)</th>
//             <th>Temp. (F)</th>
//             <th>Summary</th>
//           </tr>
//         </thead>
//         <tbody>
//           {forecasts.map((forecast) => (
//             <tr key={forecast.date}>
//               <td>{forecast.date}</td>
//               <td>{forecast.temperatureC}</td>
//               <td>{forecast.temperatureF}</td>
//               <td>{forecast.summary}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     )
//   }

//   render() {
//     let contents = this.state.loading ? (
//       <p>
//         <em>Loading...</em>
//       </p>
//     ) : (
//       FetchData.renderForecastsTable(this.state.forecasts)
//     )

//     return (
// <div>
//   <h1 id="tabelLabel">Weather forecast</h1>
//   <p>This component demonstrates fetching data from the server.</p>
//   {contents}
// </div>
//     )
//   }

//   async populateWeatherData() {
//     const response = await fetch("weatherforecast")
//     const data = await response.json()
//     this.setState({ forecasts: data, loading: false })
//   }
// }
