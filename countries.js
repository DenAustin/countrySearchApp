const countriesContainer = document.querySelector(".countries-container"); // To localize target html container
const searchField = document.querySelector(".search-field"); // User input text field
const totalCountries = document.querySelector('.total-countries')
const startingLetterBtn = document.querySelector(".starting-letter"); // Search states by starting letters
const buttonsDiv = document.querySelector('.buttons')




const countrySearch = totalCountries.filter((country) => {
 return country;
})
console.log(countrySearch(Finland));
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

