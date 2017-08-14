"use strict";

const pokeAPI = 'http://pokeapi.co/api/v2/pokemon/';
const sortButtonUrl = "https://image.freepik.com/free-icon/sort-arrows-couple-pointing-up-and-down_318-42272.jpg";
const pokemonData = require('./practice.js');
const editImage = 'https://www.iconexperience.com/_img/i_collection_png/256x256/plain/pencil.png';
const deleteImage = 'https://image.freepik.com/free-icon/x-circle_318-2105.jpg';
const tableBody = document.getElementById('pokebody');
//Get request that returns array of all 150 pokemon url's

// const getAllPokemon = () => {
//   const request = new XMLHttpRequest();
//   request.open('GET', pokeAPI );
//   request.send(null);
//   request.onreadystatechange = function() {
//     const DONE = 4;
//     const OK = 200;

//     if (request.readyState !== 4 || request.status !== 200) {
//       return 'Error:' + request.status;
//     }

//     console.log(JSON.parse(request.responseText).results);
//     const pokeData = JSON.parse(request.responseText).results;
//     for (var i = 0; i < pokeData.length; i++) {
//       getOnePokemon(pokeData[i].url);
//     }
//   }
// }

//Get request for each individual pokemon
// const getOnePokemon = (url) => {
//   const request = new XMLHttpRequest();
//   request.open('GET', url);
//   request.send(null);
//   request.onreadystatechange = function() {
//     const DONE = 4;
//     const OK = 200;

//     if (request.readyState !== 4 || request.status !== 200) {
//       return 'Error:' + request.status;
//     }
//     const pokemon = JSON.parse(request.responseText);
//     addRow(pokemon);
//   }
// }

const addRow = (row) => {
  const pokemon = pokemonData[row];
  const newRow = document.createElement('tr');
  const nameCol = document.createElement('td');
  const numberCol = document.createElement('td');
  const typesCol = document.createElement('td');
  const imageCol = document.createElement('td');
  const actionsCol = document.createElement('td');
  const sprite = new Image(80, 80);
  const editButton = new Image(20, 20);
  const deleteButton = new Image(20, 20);

  nameCol.innerHTML = pokemon.name;
  numberCol.innerHTML = pokemon.number;
  typesCol.innerHTML = pokemon.types;
  sprite.src = pokemon.imageUrl;
  editButton.src = editImage;
  deleteButton.src = deleteImage;

  newRow.classList.add(row);
  nameCol.classList.add('name', 'row');
  numberCol.classList.add('number', 'row');
  typesCol.classList.add('types', 'row');
  imageCol.classList.add('image', 'row');
  actionsCol.classList.add('actions', 'row');

  imageCol.appendChild(sprite);
  actionsCol.appendChild(editButton);
  actionsCol.appendChild(deleteButton);
  newRow.appendChild(nameCol);
  newRow.appendChild(numberCol);
  newRow.appendChild(typesCol);
  newRow.appendChild(imageCol);
  newRow.appendChild(actionsCol);
  tableBody.appendChild(newRow);
};

const populatePage = (page) => {
  const pageToRows = {
    1: 0,
    2: 10,
    3: 20,
    4: 30,
    5: 40,
    6: 50,
    7: 60,
    8: 70,
    9: 80,
    10: 90,
    11: 100,
    12: 110,
    13: 120,
    14: 130,
    15: 140
  };
  const firstRowOfPage = pageToRows[page];

  for (var i = firstRowOfPage; i < firstRowOfPage + 10; i++) {
    addRow(i);
  }
};

populatePage(1);

const clearTable = () => {
  while (tableBody.hasChildNodes()) {
    tableBody.removeChild(tableBody.firstChild);
  }
};

const firstPage = () => {
  const firstPageElement = document.getElementsByClassName('first');
  const firstPageButton = firstPageElement[0];

  firstPageButton.addEventListener('click', e => {
    clearTable();
    populatePage(1);
  });
};

firstPage();

const lastPage = () => {
  const lastPageElement = document.getElementsByClassName('last');
  const lastPageButton = lastPageElement[0];

  lastPageButton.addEventListener('click', e => {
    clearTable();
    populatePage(15);
  });
};

lastPage();

const switchPages = () => {
  const pageButtonElements = document.getElementsByClassName('paginate_button');
  const pageButtons = [...pageButtonElements];
  pageButtons.forEach(button => {
    button.addEventListener('click', e => {

    });
  });
};
// const addEditing = () => {
//   const actionElements = document.getElementsByClassName('action');
//     [...actionElements].forEach(action => {
//     action.addEventListener('click', e => {
//       if (action.classList.contains('edit')) {
//         const rowToEdit = action.classList[2];
//         const row = document.getElementsByClassName(rowToEdit)[0];

//         row.classList.add('editing');
//         console.log(row);
//         let input;
//         let edit = '';
//         row.childNodes.forEach((child, i, array) => {
//           if (i !== array.length - 1) {
//             input = document.createElement('input');
//             child.appendChild(input);
//             input.placeholder = child.innerText;
//           }
//           input.addEventListener('input', e => {
//             console.log(e.target.value, e);
//             edit = e.target.value;
//             console.log(edit, 'edit')
//           });
//             input.innerText = edit;
//             input.classList.add(rowToEdit + 'input');
//           // input.setAttribute('onkeypress', handlEnter(e));
//         });
//         action.classList.remove('edit');
//         action.classList.add('save');
//       } else if (action.classList.contains('delete')) {
//         const rowToDelete = action.classList[2];
//         console.log('delete row', rowToDelete)
//         console.log('array index',  rowToDelete[rowToDelete.length - 1]);
//         deleteRow(rowToDelete[rowToDelete.length - 1]);
//       } else {
//         console.log('saving')
//         console.log(action.classList)
//         const rowToSave = action.classList[1][action.classList[1].length - 1];
//         const updatedInfo = document.getElementsByClassName(action.classList[1] + 'input');
//         const dataObj = {};
//         [...updatedInfo].forEach(info => {
//           const key = info.parentNode.className.split('_')[0];
//           console.log(key, 'key', info.value);
//           dataObj[key] = info.value;
//         });
//         editPokemonData(rowToSave, dataObj);
//         action.classList.add('edit');
//         action.classList.remove('save');
//       }
//     })
//   })
// }

// const addSortButtons = () => {
//   const sortButton = new Image(12, 12);
//   sortButton.classList.add('sort');
//   sortButton.src = sortButtonUrl;
//   const sortButton2 = sortButton.cloneNode();
//   const sortButton3 = sortButton.cloneNode();
//   sortButton.classList.add('name');
//   sortButton2.classList.add('number');
//   sortButton3.classList.add('type');

//   const nameHeader = document.getElementById('name');
//   const numberHeader = document.getElementById('number');
//   const typeHeader = document.getElementById('type(s)');

//   nameHeader.appendChild(sortButton);

//   numberHeader.appendChild(sortButton2);

//   typeHeader.appendChild(sortButton3);
// }

// addSortButtons();



// const addRows = (page) => {
//   //for non-API data set
//   clearTable();
//   const firstRowOfPage = choosePage(currentPage);
//   console.log(firstRowOfPage)
//   for (var i = firstRowOfPage; i <= firstRowOfPage + 9; i++) {
//     const newRow = document.createElement('tr');
//     const nameCol = document.createElement('td');
//     nameCol.classList.add('name_column');
//     const numCol = document.createElement('td');
//     numCol.classList.add('number_column');
//     const typeCol = document.createElement('td');
//     typeCol.classList.add('types_column');
//     const imgCol = document.createElement('td');
//     imgCol.classList.add('image_column');
//     const img = new Image(70, 70);
//     const taskCol = document.createElement('td');
//     taskCol.classList.add('action_column');
//     const editImg = new Image(20, 20);
//     editImg.src = 'https://www.iconexperience.com/_img/i_collection_png/256x256/plain/pencil.png';
//     editImg.classList.add('action');
//     editImg.classList.add('edit');
//     editImg.classList.add(`row_${i}`);
//     const deleteImg = new Image(20, 20);
//     deleteImg.src = 'https://image.freepik.com/free-icon/x-circle_318-2105.jpg';
//     deleteImg.classList.add('action');
//     deleteImg.classList.add('delete');
//     deleteImg.classList.add(`row_${i}`);
//     img.src = pokemonData[i].imageUrl;
//     imgCol.appendChild(img);
//     newRow.appendChild(nameCol).innerHTML = pokemonData[i].name;
//     newRow.appendChild(numCol).innerHTML = pokemonData[i].number;
//     if (pokemonData[i].types.length > 1) {
//       newRow.appendChild(typeCol).innerHTML = pokemonData[i].types[0] + '/' + pokemonData[i].types[1];
//     } else {
//       newRow.appendChild(typeCol).innerHTML = pokemonData[i].types;
//     }
//     newRow.appendChild(imgCol);
//     taskCol.appendChild(editImg);
//     taskCol.appendChild(deleteImg);
//     newRow.appendChild(taskCol);
//     newRow.classList.add(`row_${i}`);
//     tableBody.appendChild(newRow);
//   }
//   addEditing();
// };

// const choosePage = (page) => {
//   console.log('page inside choosePage', page)
//   const pageToRows = {
//     1: 0,
//     2: 10,
//     3: 20,
//     4: 30,
//     5: 40,
//     6: 50,
//     7: 60,
//     8: 70,
//     9: 80,
//     10: 90,
//     11: 100,
//     12: 110,
//     13: 120,
//     14: 130,
//     15: 140
//   };
//   const firstRowOfPage = pageToRows[page];

//   return firstRowOfPage;
// };

// let currentPage = 1;



// const clearTable = () => {
//   while (tableBody.hasChildNodes()) {
//     tableBody.removeChild(tableBody.firstChild);
//   }
// }

// addRows(pokemonData, 0, 9);

// //sort the pokemon dataset based off column name
// const sortTable = (column) => {
//   const sortedPokemonData = pokemonData.sort((a, b) => {
//     return a[column] < b[column] ? -1 : a[column] > b[column] ? 1 : 0;
//   });

//   return sortedPokemonData;
// };

// const sortIcons = document.getElementsByClassName('sort');

// const elements = [...sortIcons];

// elements.forEach(el => {
//   el.addEventListener('click', e => {
//     const columnToSort = el.classList[1];
//     let sortedPokemonData = sortTable(columnToSort);
//     clearTable();
//     console.log('clicked', el.classList)

//     if (el.classList.contains('sorted')) {
//       sortedPokemonData = sortedPokemonData.reverse();
//       el.classList.remove('sorted');
//       console.log('after sorted', el.classList)
//     } else {
//       el.classList.add('sorted');
//     }
//     console.log('current page inside sort', currentPage)
//     addRows(currentPage);
//   });
// });

// const toggleElements = document.getElementsByClassName('toggle_button');
// const columnHeaders = document.getElementsByClassName('column_header');
// console.log(columnHeaders, 'line 1531')
// const toggleButtons = [...toggleElements];
// toggleButtons.forEach(toggle => {
//   toggle.addEventListener('click', e => {
//     let columnName = toggle.innerHTML;
//     for (var i = 0; i < columnHeaders.length; i++) {
//       console.log('column headers', columnHeaders)
//       if (columnName === columnHeaders[i].innerText) {
//         const nameColumn = document.getElementsByClassName('name_column');
//         const rows = document.getElementsByTagName('tr');

//         columnHeaders[i].remove();
//         for (var i = 0; i < rows.length; i++) {
//           if (columnName === 'Name') {
//             console.log('child rows', rows[i].childNodes)
//             rows[i].childNodes.forEach(child => {
//               if (child.className === 'name_column') {
//                 child.remove();
//               }
//             });
//           } else if (columnName === 'Number') {
//             rows[i].childNodes.forEach(child => {
//               if (child.className === 'number_column') {
//                 child.remove();
//               }
//             });
//           } else if (columnName === 'Type(s)') {
//             rows[i].childNodes.forEach(child => {
//               if (child.className === 'types_column') {
//                 child.remove();
//               }
//             });
//           } else if (columnName === 'Image') {
//             rows[i].childNodes.forEach(child => {
//               if (child.className === 'image_column') {
//                 child.remove();
//               }
//             });
//           } else if (columnName === 'Action') {
//             rows[i].childNodes.forEach(child => {
//               if (child.className === 'action_column') {
//                 child.remove();
//               }
//             });
//           }
//         }
//       } else {
//         addRows();
//         const rowHeaders = document.getElementById('headers_row');
//         console.log('contains or not:', [...rowHeaders.children].map(child => {
//           return child.id;
//         }).includes(columnName));
//         // createHeader(rowHeaders)
//         // const header = document.createElement('th');
//         // header.innerHTML = columnName;
//         // header.classList.add('column_header');
//         // header.id = columnName.toLowerCase();

//         // rowHeaders.appendChild(header);
//       }
//     }
//   });
// });


// addEditing();

// const editPokemonData = (row, dataObj) => {
//   const pokemonEntry = pokemonData[parseInt(row)];
//   console.log('edit data', dataObj)
//   console.log(pokemonEntry);
//   for (var key in dataObj) {
//     pokemonEntry[key] = dataObj[key];
//   }
//   addRows();
//   addEditing();
// }

// const deleteRow = (row) => {
//   pokemonData.splice(parseInt(row), 1);
//   addRows();
//   addEditing();
// }

// document.getElementById('term').onkeyup = function() { search() };

// function search() {
//   const searchTerm = document.getElementById('term');
//   console.log(searchTerm.value);
//   let filter = searchTerm.value.toUpperCase();
//   let tr = tableBody.getElementsByTagName("tr");

//   // Loop through all table rows, and hide those who don't match the search query
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// }

// // getAllPokemon();