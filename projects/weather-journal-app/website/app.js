/* Global Variables */
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip='
const apiKey = '6e06782fcbeceda142b7bbf675c03371&units=imperial'

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
         }).then(updateUI());
    })
};

const getWeather = async (baseURL, zip, key)=>{

  const res = await fetch(baseURL+zip+',us&appid='+key)
  try {

    const data = await res.json();
    return data;
  }  catch(error) {
    console.log("error", error);
  }
};

// post data
const postData = async ( url = '', data = {})=>{
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
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  };

//display function
const updateUI = async () => {
    const request = await fetch('/all');
    try{
      const allData = await request.json();
      document.getElementById('temp').innerHTML = Math.round(allData.temp)+ ' degrees';
      document.getElementById('content').innerHTML = allData.content;
      document.getElementById("date").innerHTML =allData.date;
    
      document.getElementById('zip').value = "";
      document.getElementById('feelings').value = "";
  
    }catch(error){
      console.log("error", error);
    }
  }