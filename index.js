
/*// LESSON 4.1
//question 1
// Make a call to the following endpoint:
// https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json
// Display the team name and city of the first 15 results,
// but exclude any team whose name begins with c.
// There will be a maximum of 15 results displayed if no teams' names begin with "C",
// and less than 15 displayed if there are teams whose names begin with "C".
const url =
  "https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json";
const resultsContainer = document.querySelector(".container");
async function fetchTeams() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    // always log and inspect the data you get from an API call to see what properties it has
    console.log(json);
    const teams = json;
    resultsContainer.innerHTML = "";
    for (let i = 0; i < teams.length; i++) {
      // we only want to display a maximum of 15 teams
      if (i === 15) {
        break;
      }
      const teamName = teams[i].teamName;
      const city = teams[i].location;
      // checking for small "c" and big "C"
      if (teamName.startsWith("c") || teamName.startsWith("C")) {
        continue;
      }
      // instead of checking for both small "c" and big "C" we can make the teamName lowercase and just check for "c"
      // if (teamName.toLowerCase().startsWith("c")) {
      //     continue;
      // }
      resultsContainer.innerHTML += `<div class="card">
                                       <h4>${teamName}</h4>
                                       <p>${city}</p>
                                     </div>`;
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = message("error", error);
  }
}
fetchTeams();*/

// LESSON 4.2
// Make a call to the following endpoint:
// https://breakingbadapi.com/api/characters/6
// Display the name, image and status of the character returned.

const detailContainer = document.querySelector(".details");
const url = "https://breakingbadapi.com/api/characters/6";

// we need an async function as we are using await// we need an async function as we are using await
async function fetchCharacter() {
  try {
    const response = await fetch(url);
    const result = await response.json();

    console.log(result);

    // the endpoint is an array with one result, so we need to access the first item in the array
    const details = result[0];

    // pass the details to the function that will create the HTML
    createHtml(details);
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = error;
  }
}

// call the function
fetchCharacter();

function createHtml(details) {
  detailContainer.innerHTML += `<h1 class="name">${details.name}</h1>
                                <div class="image" style="background-image: ulr=('${details.img}')"></div>
                                <div class="status">Status: <b>${details.status}</b></div>`;
}
