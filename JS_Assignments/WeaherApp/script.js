






const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temperature = document.getElementById("temperature");

// const temp = <span id="temperature">&#8451</span>;

const weatherStatus = document.getElementById("weatherStatus");
const logoImage = document.getElementById("logoImage");



// const getData =  (event) => {
  //     event.preventDefault();
  // }
  
const getData = async  (event) => {
    event.preventDefault();
    if (inputBox.value  === "") {
      alert("Please Enter The City Name: ");
      return;
    }
  
  
  const city = inputBox.value;
  
  const fetchData = await  fetch(
    `http://api.weatherapi.com/v1/current.json?key=f933d12dd1d543e38e150946231304&q=${city}`
  );

  
  const orgData = await fetchData.json();
  data = orgData;
  console.log(data);

  // const data = await fetchData.json();
  // console.log(data);

  
// Displaying the data in HTML
countryName.innerHTML = data.location.country;
stateName.innerHTML = data.location.region;
cityName.innerHTML = data.location.name;
humidity.innerHTML = data.current.humidity;
windSpeed.innerHTML = data.current.wind_kph;
temperature.innerHTML = data.current.temp_c;

// temperature.innerHTML=temp.innerText+temperature.innerText;

logoImage.src = data.current.condition.icon;
weatherStatus.innerHTML = data.current.condition.text;
};
  // const fetchData = await fetch(`https://api.weatherapi.com/v1/current.json?key=f933d12dd1d543e38e150946231304&q=?`);

  

  

