/* Global Variables */
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip='
const apiKey = config.apiKey;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1) +'.'+ d.getDate()+'.'+ d.getFullYear();

// fetch API data
document.getElementById('generate').addEventListener('click', performAction);

//validate zip
function validateZipCode(elementValue){
  var zipCodePattern = /^\d{5}$|^\d{5}-\d{4}$/;
   return zipCodePattern.test(elementValue);
}


//click action
function performAction(e){
  const newZip =  document.getElementById('zip').value;
  const newContent = document.getElementById('feelings').value;
  
  if (validateZipCode(newZip)) {
    getWeather(baseURL, newZip, apiKey)
    .then(function(data) {
        postData('/addData', {
            temp: data.main.temp,
            date: newDate,
            content: newContent
         }).then(updateUI());
    })
  } else {
    document.getElementById('errorMsg').innerText = "invalid zip, please try again";
  }

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
      document.getElementById('errorMsg').innerText = "";
  
    }catch(error){
      console.log("error", error);
    }
  }