const pokeAPI = 'http://pokeapi.co/api/v2/pokemon/?limit=150';
const tableBody = document.getElementById('pokebody');

const retrievePokemon = () => {
  const request = new XMLHttpRequest();
  request.open('GET', pokeAPI);
  request.send(null);
  request.onreadystatechange = function() {
    var DONE = 4;
    var OK = 200;

    if (request.readyState !== 4 || request.status !== 200) {
      return 'Error:' + request.status;
    }

    console.log(JSON.parse(request.responseText).results);
    const pokeData = JSON.parse(request.responseText);
    buildTable(pokeData);
  }
}

const buildTable = (pokeData) => {
  const newRow = document.createElement('tr');
  const newCol = document.createElement('td');
  newRow.appendChild(newCol).innerHTML = pokeData.name;
  newRow.appendChild(newCol).innerHTML = pokeData.id;
  tableBody.appendChild(newRow);
  console.log(tableBody)
}
