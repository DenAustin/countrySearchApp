// COUNTRIES API BY DENIS - 20200128


//const countriesContainer = document.querySelector(".countries-container"); // To localize target html container
//const searchField = document.querySelector(".search-field"); // User input text field
//const totalCountries = document.querySelector('.total-countries')
//const startingLetterBtn = document.querySelector(".starting-letter"); // Search states by starting letters
//const buttonsDiv = document.querySelector('.buttons')
/*
//OTHER HTML ELEMENTS' SELECTORS
const flasher = document.querySelector("flash-display"); // To flash ...
const firstCharButton = document.querySelector("starting-letter"); // Search states by starting letters
const keyWordButton = document.querySelector("search-word");

const searchLensIcon = document.querySelector("search-icon"); //Search/magnifying lens icon
const displayOrder = document.querySelector("display-order"); // Ascending or descending display order 

// API Function

const countriesAPI = () => {
  let searchResult = [];
  
  for(const country of countriesArray){
    //console.log(countriesArray[country]);
    let userInput = document.querySelector(".search-field");
    let myString = userInput.value;
    let output = country.startsWith(myString);
    
    if(output == true) {
      
      searchResult.push(countriesArray[country]);
      return searchResult
      
    }else{
      console.log("Nothing");
    }
    return searchResult
    console.log(searchResult)

    



  }

}
*/

//console.log(countriesAPI());


const countriesContainer = document.querySelector(".countries-container"); // To localize target html container
const searchField = document.querySelector(".search-field"); // User input text field
const totalCountries = document.querySelector('.total-countries')
const startLetterBtn = document.querySelector(".starting-letter"); // Search states by starting letters
const searchLetterBtn = document.querySelector(".search-word");
const buttonsDiv = document.querySelector('.buttons')



// function to filter nations by start letter
const filterCountriesByStartingStr = (arr, term) => {
  const filteredCountries = arr.filter((country) =>  country.toLowerCase().startsWith(term.toLowerCase()))
  return filteredCountries
}

// function to filter nations by string segment
const filterNationsByStrSequence = (arr, term) => {
  const filteredCountries = arr.filter((country) =>  country.toLowerCase().includes(term.toLowerCase()))
  return filteredCountries
}

const showCountries = (arr) => {

  countriesContainer.innerHTML = ''

  let content = ''
  for(const country of arr){

    content += `<div>
    <h1>${country}</h1>
    </div>`
  }

  countriesContainer.innerHTML = content


}

showCountries(countries)

const filterCountries = (arr, term) => {
  const filteredCountries = arr.filter((country) =>  country.toLowerCase().includes(term.toLowerCase()))
  return filteredCountries
}

// Event listener for starting word button
searchField.addEventListener('input', (event) => {
  let searchTerm = event.target.value;
  const filteredCountries = filterCountries(countries, searchTerm)
  showCountries(filteredCountries)

})

// Listener for start letter click *** event.target replaced by searchField.value
startLetterBtn.addEventListener("click", (event) => {
  let searchChar = searchField.value;
  const filteredNations = filterCountriesByStartingStr(countries, searchChar);
  showCountries(filteredNations)
});


// Event listener for search by keyword
searchLetterBtn.addEventListener("click", (e) => {
  let searchStrgs = searchField.value;
  const filteredNations = filterNationsByStrSequence(countries, searchStrgs);
  showCountries(filteredNations)
})

let reverseUp = document.querySelector(".reverse-button");

reverseUp.addEventListener('click', (e) => {
  
  let flag = false;
  let target = e.target;

  if(target.className === 'starting-letter'){
    target.classList.add('active')
    
  }else if (target.className === 'reverse-button') {
    showCountries(countries.reverse());
    target.classList.add('active')
    reverseUp.innerHTML = `<i class="fas fa-sort-alpha-up"></i>`;
  } else {
    showCountries(countries)

 }
  
})

//<i class="fas fa-sort-alpha-up"></i>

 



