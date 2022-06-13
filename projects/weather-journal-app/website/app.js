/* Global Variables */
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip='
let apiKey = '6e06782fcbeceda142b7bbf675c03371'

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// fetch API data
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
    const newZip =  document.getElementById('zip').value;
    const newContent = document.getElementById('feelings').value;

    getWeather(baseURL, newZip, apiKey)
    .then(function(data) {
        postData('/addData', {
            temp: data.main.temp,
            date: newDate,
            content: newContent
         });
    })
};

const getWeather = async (baseURL, zip, key)=>{

  const res = await fetch(baseURL+zip+',us&appid='+key)
  try {

    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
  }
};

// post data
const postData = async ( url = '', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
       
      body: JSON.stringify(data), 
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  };