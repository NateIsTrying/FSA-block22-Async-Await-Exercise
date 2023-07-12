// Doing Rest Countries - https://restcountries.com/v3.1/all 
// Submit this as soon as finished.

// Categories to complete:
// Current Time in Country
// Add Comas to Population or turn it into millions.
// Coat of Arms


const body = document.querySelector('body');
const country = document.querySelector('#country');
const capital = document.querySelector('#capital');
const language = document.querySelector('#language');
const regionSubRegion = document.querySelector('#regionSubRegion');
const population = document.querySelector('#population');
const currency = document.querySelector('#currency');
const flag = document.querySelector('#flag');
const coatOfArms = document.querySelector('#coatOfArms');
const flagTitle = document.querySelector('#flagTitle');

const getRandomCountry = async() => {
        // fetch - used to call another API(another computer with information)
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        const countries = await response.json();
        const random = Math.floor(Math.random() * countries.length);
        const randomCountry = countries[random];

        // used to test and pick facts to present.
        // console.log(randomCountry)

        //Create span element and assign the id countryColor
        const countryColor = document.createElement('span');
        countryColor.id = 'countryColor';
        countryColor.innerHTML = randomCountry.name.common;

        // Append the span element to the country heading
        country.innerHTML = `Today's Country: `;
        country.appendChild(countryColor);

        capital.innerText = `It's capital is ${randomCountry.capital}.`;
        flagTitle.innerText = `${randomCountry.name.common}'s National Flag:`;
        flag.setAttribute('src',`${randomCountry.flags.png}`);
        flag.setAttribute('alt', `${randomCountry.flags.alt}`);
        language.innerText = `It's primary language is ${Object.values(randomCountry.languages)[0]}.`; 
        regionSubRegion.innerText = `It's located in ${randomCountry.region}, specifically ${randomCountry.subregion}.`;
        population.innerText = `About ${randomCountry.population} live in ${randomCountry.name.common}.`;
        currency.innerText = `The currency in ${randomCountry.name.common} is the ${Object.values(randomCountry.currencies)[0].name}.`;

        randomCountryColor()
}

const randomCountryColor = () => {
        // create key for randomization
        const hexParts = '0123456789ABCDEF';
        // stores all randomized hex values
        let randomColor = '#';
        // loop through each character of the hexcolor.
        for(let i = 0; i < 6; i++){
            // takes 16 times random number between (0 to 1), rounds  
            // down to a whole number, then pulls an index from 
            // the string 'hexParts'
            randomColor += hexParts[Math.floor(Math.random() * 16)];    
        }
        // console.log(randomColor);
        const countryColor = document.querySelector('#countryColor');
        countryColor.style.color = randomColor;
}

getRandomCountry();

// Attempted to place in current time at the country, but didn't have enough time.
// const timeAndDate = new Date();
// const tADDate = timeAndDate.getDate();
// const tADHours = timeAndDate.getHours();
// const tADMinutes = timeAndDate.getMinutes();
// const tADSeconds = timeAndDate.getSeconds();
// console.log(timeAndDate);
// console.log(``);