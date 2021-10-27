import React, { useState, useEffect } from 'react';

const api = {
  key: "cf12fd4e2e2227d274067af029af9c48",
  base: "https://api.openweathermap.org/data/2.5/"
}

var nameIndex = 0;

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [latestSearches, setLatestSearches] = useState({});
  useEffect(() => {
    console.log(`The latest searches are ${latestSearches}`)
    // console.log(latestSearches.includes('Kilkis'))
    console.log(latestSearches)
    console.log(typeof latestSearches)
  }, [latestSearches])

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result)
          setQuery('')
          if (!result.message) {
            // console.log("Yparxei")
            if (!Object.values(latestSearches).includes(nameFixer(query))) {
              localStorage.setItem(nameAssigner(), nameFixer(query))
              setLatestSearches(Object.values(localStorage))
            }
          }
        });
    }
  }

  function nameFixer(name) {
    var finalName = ""
    var fixedName = name.split("");
    fixedName = fixedName.map(x => x.toLowerCase())
    fixedName[0] = fixedName[0].toUpperCase()
    for (let letter of fixedName) {
      finalName += letter
    }
    console.log(`The final name is ${finalName}`)
    return finalName
  }

  function nameAssigner() {
    if (nameIndex !== 4) {
      let name = `search${nameIndex}`;
      nameIndex += 1

      // console.log(name)
      return name;
    } else {
      let name = `search${nameIndex}`
      nameIndex = 0
      // console.log(name)
      return name;
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  function clearCache() {
    localStorage.clear()
    setLatestSearches("")
  }

  function clickedItem(value) {
    // setQuery(value);
    fetch(`${api.base}weather?q=${value}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result)
        setQuery('')
      });
  }
  // const item1 = document.querySelector('#item1').addEventListener("click", () => console.log('Clicked'))
  // const myList = document.querySelector("#searchList")
  // myList.addEventListener("click", () => console.log("Clicked"))


  return (
    <div className={(typeof weather.main != 'undefined')
      ? ((weather.main.temp > 16)
        ? 'app warm'
        : 'app')
      : 'app'}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        <div className='details'>
          <div className='searches'>
            <ul id='searchList'>
              <li id='item1' onClick={(event) => clickedItem(event.target.innerHTML)}>{localStorage.search0}</li>
              <li id='item2' onClick={(event) => clickedItem(event.target.innerHTML)}>{localStorage.search1}</li>
              <li id='item3' onClick={(event) => clickedItem(event.target.innerHTML)}>{localStorage.search2}</li>
              <li id='item4' onClick={(event) => clickedItem(event.target.innerHTML)}>{localStorage.search3}</li>
              <li id='item5' onClick={(event) => clickedItem(event.target.innerHTML)}>{localStorage.search4}</li>
            </ul>
            <div>
              <button id='clear-button' onClick={clearCache}>Clear searches</button>
            </div>
          </div>
          <div className='info-container'>
            {(typeof weather.main != 'undefined') ? (
              <div className='info'>
                <div className="location-box">
                  <div className="location">{weather.name}, {weather.sys.country}</div>
                  <div className="date">{dateBuilder(new Date())}</div>
                </div>
                <div className="weather-box">
                  <div className="temp">
                    {Math.round(weather.main.temp)}°C
                  </div>
                  <div className="weather"> {weather["weather"][0]["description"]} </div>
                </div>
              </div>
            ) : ('')}
          </div>
          <div>
          </div>

        </div>
      </main>

    </div>
  );
}

export default App;
