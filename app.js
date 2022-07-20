
const searchBtn = document.getElementById('search-btn');
const countryInp = document.getElementById('country-inp');
const result = document.querySelector('.result');

searchBtn.addEventListener('click', search);

// fuction

function search() {
    let countryName = countryInp.value;
    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    // console.log(finalUrl);
    fetch(finalUrl)
    .then( res => res.json())
    .then( data => {
        console.log(data);
        result.innerHTML = ` 
         <img src="${data[0].flags.svg}" alt=""> 
         <h2>${data[0].name.common}</h2>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Captail : </h4>
                <span>${data[0].capital}</span>
            </div>
         </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continent : </h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Population : </h4>
                <span>${data[0].population}</span>
            </div>
        </div>
        <div class="wrapper">
        <div class="data-wrapper">
            <h4>Currency : </h4>
            <span>$${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)}</span>
        </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Common Language : </h4>
                <span>${Object.values(data[0].languages)}</span>
            </div>
        </div>
         `
    }).catch( (error) => {
        if(countryInp.value.length === 0) {
            result.innerHTML = `<h3>The input field cannot be empyt</h3>`
        } else {
            result.innerHTML = `<h3>Please enter a valid country name</h3>`
        }
    });

}