// "use strict";

// // const pokeAPI = 'http://pokeapi.co/api/v2/pokemon/';
// const sortButtonUrl = "https://image.freepik.com/free-icon/sort-arrows-couple-pointing-up-and-down_318-42272.jpg";
// const pokemonData = require('./pokemonData.js');
// const editImage = 'https://www.iconexperience.com/_img/i_collection_png/256x256/plain/pencil.png';
// const deleteImage = 'https://image.freepik.com/free-icon/x-circle_318-2105.jpg';
// const tableBody = document.getElementById('pokebody');

// //I use this currentPage variable to keep track of page state.
// let currentPage = 1;

// //I tried to use the Pokemon API, but I had trouble with it
// //Get request that returns array of all 150 pokemon url's

// // const getAllPokemon = () => {
// //   const request = new XMLHttpRequest();
// //   request.open('GET', pokeAPI );
// //   request.send(null);
// //   request.onreadystatechange = function() {
// //     const DONE = 4;
// //     const OK = 200;

// //     if (request.readyState !== 4 || request.status !== 200) {
// //       return 'Error:' + request.status;
// //     }

// //     console.log(JSON.parse(request.responseText).results);
// //     const pokeData = JSON.parse(request.responseText).results;
// //     for (var i = 0; i < pokeData.length; i++) {
// //       getOnePokemon(pokeData[i].url);
// //     }
// //   }
// // }

// //Get request for each individual pokemon
// // const getOnePokemon = (url) => {
// //   const request = new XMLHttpRequest();
// //   request.open('GET', url);
// //   request.send(null);
// //   request.onreadystatechange = function() {
// //     const DONE = 4;
// //     const OK = 200;

// //     if (request.readyState !== 4 || request.status !== 200) {
// //       return 'Error:' + request.status;
// //     }
// //     const pokemon = JSON.parse(request.responseText);
// //     addRow(pokemon);
// //   }
// // }

// const addRow = (row) => {
//   const pokemon = pokemonData[row];
//   if (pokemon) {
//     const newRow = document.createElement('tr');
//     const nameCol = document.createElement('td');
//     const numberCol = document.createElement('td');
//     const typesCol = document.createElement('td');
//     const imageCol = document.createElement('td');
//     const actionsCol = document.createElement('td');
//     const sprite = new Image(70, 70);
//     const editButton = new Image(40, 40);
//     const deleteButton = new Image(40, 40);

//     nameCol.innerHTML = pokemon.name;
//     numberCol.innerHTML = pokemon.number;
//     typesCol.innerHTML = pokemon.types.length === 2 ? pokemon.types[0] + '/' + pokemon.types[1] : pokemon.types;
//     sprite.src = pokemon.imageUrl;
//     editButton.src = editImage;
//     deleteButton.src = deleteImage;

//     newRow.classList.add('row', row);
//     nameCol.classList.add('name', 'cell');
//     numberCol.classList.add('number', 'cell');
//     typesCol.classList.add('types', 'cell');
//     imageCol.classList.add('image', 'cell');
//     editButton.classList.add('edit', 'cell', row);
//     deleteButton.classList.add('delete', 'cell', row);
//     actionsCol.classList.add('actions', 'cell');

//     imageCol.appendChild(sprite);
//     actionsCol.appendChild(editButton);
//     actionsCol.appendChild(deleteButton);
//     newRow.appendChild(nameCol);
//     newRow.appendChild(numberCol);
//     newRow.appendChild(typesCol);
//     newRow.appendChild(imageCol);
//     newRow.appendChild(actionsCol);
//     tableBody.appendChild(newRow);
//   }
// };
// const addEditing = () => {
//   const editButtonElements = document.getElementsByClassName('edit');
//   const editButtons = [...editButtonElements];

//   editButtons.forEach(button => {
//     button.addEventListener('click', e => {
//       const row = button.classList[2];
//       const rowToEdit = document.getElementsByClassName(button.classList[2])[0];

//       if (!button.classList.contains('editing')) {
//         rowToEdit.childNodes.forEach((child, i) => {
//           if (i < 4) {
//             editCell(child, i, row);
//           }
//         });
//         button.classList.add('editing');
//       } else {
//         const editedCellElements = document.getElementsByClassName('new');
//         const editedCells = [...editedCellElements];

//         saveCells(editedCells, row);
//         button.classList.remove('editing');
//       }
//     });
//   });
// };

// const addDeletion = () => {
//   const deleteButtonElements = document.getElementsByClassName('delete');
//   const deleteButtons = [...deleteButtonElements];

//   deleteButtons.forEach(button => {
//     button.addEventListener('click', e => {
//       const row = button.classList[2];
//       deleteRow(row);
//     });
//   });
// };

// const populatePage = (page) => {
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

//   for (var i = firstRowOfPage; i < firstRowOfPage + 10; i++) {
//     addRow(i);
//   }
// };

// const populateWholePage = () => {
//   for (var i = 1; i <= 15; i++) {
//     populatePage(i);
//   }
//   let tableRows = document.getElementsByTagName('tr');
//   for (var i = 11; i < tableRows.length; i++) {
//     tableRows[i].style.display = 'none';
//   }
// }

// populateWholePage();

// const clearTable = () => {
//   while (tableBody.hasChildNodes()) {
//     tableBody.removeChild(tableBody.firstChild);
//   }
// };


// const editCell = (cell, i, row) => {
//   console.log('row to edit', row);
//   let edit;
//   let isEditing = false;
//   let oldText = cell.innerHTML;
//   let input = document.createElement('input');

//   if (cell.classList.contains('image')) {
//     oldText = cell.childNodes[0].src;
//   }
//   cell.innerHTML = '';
//   cell.appendChild(input);
//   if (i === 3) {
//     input.placeholder = 'Paste a new image url';
//   } else {
//     input.placeholder = oldText;
//   }
//   input.addEventListener('input', e => {
//     edit = e.target.value;
//     isEditing = true;
//   });
//   if (isEditing) {
//     input.innerText = edit;
//   } else {
//     input.innerText = oldText;
//   }

//   input.classList.add('new');
// };

// const saveCells = (cells, row) => {
//   const pokemon = pokemonData[row];
//   pokemon.name = cells[0].value ? cells[0].value : cells[0].textContent;
//   pokemon.number = cells[1].value ? cells[1].value : cells[1].textContent;
//   pokemon.types = cells[2].value ? cells[2].value : cells[2].textContent;
//   pokemon.imageUrl = cells[3].value ? cells[3].value : cells[3].textContent;
//   console.log(pokemonData[row]);
//   clearTable();
//   populateWholePage();
//   addEditing();
//   addDeletion();
// };

// const deleteRow = (row) => {
//   console.log('row to delete', row)
//   pokemonData.splice(row, 1);
//   clearTable();
//   populatePage(currentPage);
//   addEditing();
//   addDeletion();
//   showAllRemainingRows(currentPage);
// };

// const addSortButtons = () => {
//   const sortButton = new Image(20, 20);

//   sortButton.classList.add('sort');
//   sortButton.src = sortButtonUrl;
//   const sortButton2 = sortButton.cloneNode();
//   const sortButton3 = sortButton.cloneNode();

//   sortButton.classList.add('name', 'sort');
//   sortButton2.classList.add('number', 'sort');
//   sortButton3.classList.add('types', 'sort');
//   const headers = document.getElementsByTagName('th');

//   headers[0].appendChild(sortButton);
//   headers[1].appendChild(sortButton2);
//   headers[2].appendChild(sortButton3);
// };

// //sort the pokemon dataset based off column name
// const sortColumn = (column) => {
//   const sortedPokemonData = pokemonData.sort((a, b) => {
//     return a[column] < b[column] ? -1 : a[column] > b[column] ? 1 : 0;
//   });

//   return sortedPokemonData;
// };

// const addSorting = () => {
//   const sortButtonElements = document.getElementsByClassName('sort');
//   const sortButtons = [...sortButtonElements];

//   sortButtons.forEach(button => {
//     button.addEventListener('click', e => {
//       const columnToSort = button.classList[1];
//       let sortedPokemonData = sortColumn(columnToSort);
//       clearTable();
//       if (button.classList.contains('sorted')) {
//         sortedPokemonData = sortedPokemonData.reverse();
//         button.classList.remove('sorted');
//         console.log('after sorted', button.classList)
//       } else {
//         button.classList.add('sorted');
//       }
//       populatePage(currentPage);
//       addEditing();
//       addDeletion();
//       showAllRemainingRows(currentPage);
//     });
//   });
// };

// const rotatePages = (pageButtons, currentPage, direction) => {
//   pageButtons.forEach(button => {
//     if (button.classList.contains('button-border')) {
//       button.classList.remove('button-border');
//     }
//   });
//   if (direction === 'down') {
//     pageButtons[0].innerHTML = currentPage - 4;
//     pageButtons[1].innerHTML = currentPage - 3;
//     pageButtons[2].innerHTML = currentPage - 2;
//     pageButtons[3].innerHTML = currentPage - 1;
//     pageButtons[4].innerHTML = currentPage;
//     pageButtons[4].classList.add('button-border');
//   } else {
//     pageButtons[0].innerHTML = currentPage;
//     pageButtons[1].innerHTML = currentPage + 1;
//     pageButtons[2].innerHTML = currentPage + 2;
//     pageButtons[3].innerHTML = currentPage + 3;
//     pageButtons[4].innerHTML = currentPage + 4;
//     pageButtons[0].classList.add('button-border');
//   }
// };

// const firstPage = () => {
//   const firstPageElement = document.getElementById('first');
//   const pageButtonElements = document.getElementsByClassName('nums');
//   const pageButtons = [...pageButtonElements];

//   firstPageElement.addEventListener('click', e => {
//     if (currentPage === 1) {
//       return;
//     }
//     currentPage = 1;
//     clearTable();
//     populatePage(1);
//     addEditing();
//     addDeletion();
//     showAllRemainingRows(currentPage);
//     rotatePages(pageButtons, currentPage, 'up');
//   });
// };

// const lastPage = () => {
//   const lastPageElement = document.getElementById('last');
//   const pageButtonElements = document.getElementsByClassName('nums');
//   const pageButtons = [...pageButtonElements];

//   lastPageElement.addEventListener('click', e => {
//     if (currentPage === 15) {
//       return;
//     }
//     currentPage = 15;
//     clearTable();
//     populatePage(15);
//     addEditing();
//     addDeletion();
//     showAllRemainingRows(currentPage);
//     rotatePages(pageButtons, currentPage, 'down');
//   });
// };

// const previousPage = () => {
//   const previousPageElement = document.getElementById('previous');
//   const pageButtonElements = document.getElementsByClassName('nums');
//   const pageButtons = [...pageButtonElements];

//   previousPageElement.addEventListener('click', e => {
//     if (currentPage > 1) {
//       clearTable();
//       populatePage(--currentPage);
//       showAllRemainingRows(currentPage);
//       addEditing();
//       addDeletion();
//     } else {
//       return;
//     }
//     const currentPageBorder = document.getElementsByClassName('button-border')[0];
//     currentPageBorder.classList.remove('button-border');
//     pageButtons.forEach(button => {
//       if (parseInt(button.innerHTML) === currentPage) {
//         button.classList.add('button-border');
//       }
//     });
//     if (currentPage + 1 === parseInt(pageButtons[0].innerHTML)) {
//       rotatePages(pageButtons, currentPage, 'down');
//     }
//   });
// };

// const nextPage = () => {
//   const nextPageElement = document.getElementById('next');
//   const pageButtonElements = document.getElementsByClassName('nums');
//   const pageButtons = [...pageButtonElements];

//   nextPageElement.addEventListener('click', e => {
//     if (currentPage < 15) {
//       clearTable();
//       populatePage(++currentPage);
//       showAllRemainingRows(currentPage);
//       addEditing();
//       addDeletion();
//     } else {
//       return;
//     }
//     const currentPageBorder = document.getElementsByClassName('button-border')[0];
//     currentPageBorder.classList.remove('button-border');
//     pageButtons.forEach(button => {
//       if (parseInt(button.innerHTML) === currentPage) {
//         button.classList.add('button-border');
//       }
//     });
//     if (currentPage - 1 === parseInt(pageButtons[4].innerHTML)) {
//       rotatePages(pageButtons, currentPage, 'up');
//     }
//   });
// };

// const choosePage = () => {
//   const pageButtonElements = document.getElementsByClassName('nums');
//   const pageButtons = [...pageButtonElements];

//   pageButtons.forEach((button, i) => {
//     button.addEventListener('click', e => {
//       currentPage = e.target.innerHTML;
//       const currentPageBorder = document.getElementsByClassName('button-border')[0];
//       currentPageBorder.classList.remove('button-border');
//       button.classList.add('button-border');
//       console.log('currentPage', currentPage)
//       clearTable();
//       populatePage(currentPage);
//       showAllRemainingRows(currentPage);
//       addEditing();
//       addDeletion();
//     });
//   });
// };

// const toggleColumns = () => {
//   const toggleButtonElements = document.getElementsByClassName('toggle');
//   console.log(toggleButtonElements)
//   const toggleButtons = [...toggleButtonElements];
//   toggleButtons.forEach(button => {
//     button.addEventListener('click', e => {
//       const columnName = button.innerHTML.toLowerCase();
//       console.log(columnName, 'columnName')
//       const columnToToggleElements = document.getElementsByClassName(columnName);
//       const columnToToggle = [...columnToToggleElements];
//       console.log(columnToToggle);
//       columnToToggle.forEach(cell => {
//         if (!cell.style.display) {
//           cell.style.display = 'none';
//         } else {
//           cell.style.display = '';
//         }
//       });
//     });
//   });
// };

// const showAllRemainingRows = (currentPage) => {
//   console.log('currentPage', currentPage)
//   for (let i = currentPage + 1; i <= 15; i++) {
//     populatePage(i);
//   }
//   let tr = tableBody.getElementsByTagName('tr');

//   for (let i = 10; i < tr.length; i++) {
//     tr[i].style.display = 'none';
//   }
// };

// const searchNames = () => {
//   const searchTerm = document.getElementById('namesearch');
//   let filter = searchTerm.value.toUpperCase();
//   let tr = tableBody.getElementsByTagName('tr');
//   for (let i = 0; i < tr.length; i++) {
//     const td = tr[i].getElementsByTagName('td')[0];

//     if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
//       tr[i].style.display = '';
//     } else {
//       tr[i].style.display = 'none';
//     }
//   }
// };

// document.getElementById('namesearch').onkeyup = searchNames;

// const searchNumbers = () => {
//   const searchTerm = document.getElementById('numbersearch');
//   console.log(searchTerm.value);
//   let filter = searchTerm.value;
//   let tr = tableBody.getElementsByTagName('tr');

//   for (let i = 0; i < tr.length; i++) {
//     const td = tr[i].getElementsByTagName('td')[1];

//     if (td.innerHTML === filter) {
//       tr[i].style.display = '';
//     } else {
//       tr[i].style.display = 'none';
//     }
//   }
// };

// document.getElementById('numbersearch').onkeyup = searchNumbers;

// const searchTypes = () => {
//   const searchTerm = document.getElementById('typesearch');
//   console.log(searchTerm.value);
//   let filter = searchTerm.value.toUpperCase();
//   let tr = tableBody.getElementsByTagName('tr');

//   for (let i = 0; i < tr.length; i++) {
//     const td = tr[i].getElementsByTagName('td')[2];
//     const firstType = td.innerHTML.split('/')[0].toUpperCase();

//     if (firstType.indexOf(filter) > -1) {
//       tr[i].style.display = '';
//     } else {
//       tr[i].style.display = 'none';
//     }
//   }
// };

// document.getElementById('typesearch').onkeyup = searchTypes;

// firstPage();
// previousPage();
// nextPage();
// lastPage();
// choosePage();
// addSortButtons();
// addSorting();
// addEditing();
// addDeletion();
// toggleColumns();