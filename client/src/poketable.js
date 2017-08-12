const pokeAPI = 'http://pokeapi.co/api/v2/pokemon/';
const sortButtonUrl = "https://image.freepik.com/free-icon/sort-arrows-couple-pointing-up-and-down_318-42272.jpg";
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

var pokemonData = [{
  "number": 1,
  "name": "Bulbasaur",
  "types": [
    "Grass",
    "Poison"
  ],
  "imageUrl": "http://vignette4.wikia.nocookie.net/nintendo/images/4/43/Bulbasaur.png/revision/latest?cb=20141002083518&path-prefix=en"
  },
  {
    "number": 2,
    "name": "Ivysaur",
    "types": [
      "Grass",
      "Poison"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/8/86/Ivysaur.png/revision/latest?cb=20141002083450&path-prefix=en"
  },
  {
    "number": 3,
    "name": "Venusaur",
    "types": [
      "Grass",
      "Poison"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/b/be/Venusaur.png/revision/latest?cb=20141002083423&path-prefix=en"
  },
  {
    "number": 4,
    "name": "Charmander",
    "types": [
      "Fire"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/5/56/Charmander.png/revision/latest?cb=20141002083351&path-prefix=en"
  },
  {
    "number": 5,
    "name": "Charmeleon",
    "types": [
      "Fire"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/f/fb/Charmeleon.png/revision/latest?cb=20141002083329&path-prefix=en"
  },
  {
    "number": 6,
    "name": "Charizard",
    "types": [
      "Fire",
      "Flying"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/9/95/Charizard.png/revision/latest?cb=20141002083306&path-prefix=en"
  },
  {
    "number": 7,
    "name": "Squirtle",
    "types": [
      "Water"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/e/e3/Squirtle.png/revision/latest?cb=20141002083243&path-prefix=en"
  },
  {
    "number": 8,
    "name": "Wartortle",
    "types": [
      "Water"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/d/d7/Wartortle.png/revision/latest?cb=20141002083217&path-prefix=en"
  },
  {
    "number": 9,
    "name": "Blastoise",
    "types": [
      "Water"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/4/41/Blastoise.png/revision/latest?cb=20141002083147&path-prefix=en"
  },
  {
    "number": 10,
    "name": "Caterpie",
    "types": [
      "Bug"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/0/05/Caterpie.png/revision/latest?cb=20141002083123&path-prefix=en"
  },
  {
    "number": 11,
    "name": "Metapod",
    "types": [
      "Bug"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/6/6b/Metapod.png/revision/latest?cb=20141002083057&path-prefix=en"
  },
  {
    "number": 12,
    "name": "Butterfree",
    "types": [
      "Bug",
      "Flying"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/9/96/Butterfree.png/revision/latest?cb=20141002083032&path-prefix=en"
  },
  {
    "number": 13,
    "name": "Weedle",
    "types": [
      "Bug",
      "Poison"
    ],
    "imageUrl": "http://vignette4.wikia.nocookie.net/nintendo/images/d/d6/Weedle.png/revision/latest?cb=20141002083010&path-prefix=en"
  },
  {
    "number": 14,
    "name": "Kakuna",
    "types": [
      "Bug",
      "Poison"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/6/63/Kakuna.png/revision/latest?cb=20141002082941&path-prefix=en"
  },
  {
    "number": 15,
    "name": "Beedrill",
    "types": [
      "Bug",
      "Poison"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/0/0d/Beedrill.png/revision/latest?cb=20141002082900&path-prefix=en"
  },
  {
    "number": 16,
    "name": "Pidgey",
    "types": [
      "Normal",
      "Flying"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/b/b7/Pidgey.png/revision/latest?cb=20141002082835&path-prefix=en"
  },
  {
    "number": 17,
    "name": "Pidgeotto",
    "types": [
      "Normal",
      "Flying"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/5/57/Pidgeotto.png/revision/latest?cb=20141002082803&path-prefix=en"
  },
  {
    "number": 18,
    "name": "Pidgeot",
    "types": [
      "Normal",
      "Flying"
    ],
    "imageUrl": "http://vignette4.wikia.nocookie.net/nintendo/images/a/a9/Pidgeot.png/revision/latest?cb=20141002082735&path-prefix=en"
  },
  {
    "number": 19,
    "name": "Rattata",
    "types": [
      "Normal"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/c/c4/Rattata.png/revision/latest?cb=20141002082710&path-prefix=en"
  },
  {
    "number": 20,
    "name": "Raticate",
    "types": [
      "Normal"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/d/d6/Raticate.png/revision/latest?cb=20141002082646&path-prefix=en"
  },
  {
    "number": 21,
    "name": "Spearow",
    "types": [
      "Normal",
      "Flying"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/a/a1/Spearow.png/revision/latest?cb=20141002082622&path-prefix=en"
  },
  {
    "number": 22,
    "name": "Fearow",
    "types": [
      "Normal",
      "Flying"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/4/41/Fearow.png/revision/latest?cb=20160509230225&path-prefix=en"
  },
  {
    "number": 23,
    "name": "Ekans",
    "types": [
      "Poison"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/1/11/Ekans.png/revision/latest?cb=20141002082500&path-prefix=en"
  },
  {
    "number": 24,
    "name": "Arbok",
    "types": [
      "Poison"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/4/4d/Arbok.png/revision/latest?cb=20141002082434&path-prefix=en"
  },
  {
    "number": 25,
    "name": "Pikachu",
    "types": [
      "Electric"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/7/77/Pikachu.png/revision/latest?cb=20141002082401&path-prefix=en"
  },
  {
    "number": 26,
    "name": "Raichu",
    "types": [
      "Electric"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/3/34/Raichu.png/revision/latest?cb=20141002082334&path-prefix=en"
  },
  {
    "number": 27,
    "name": "Sandshrew",
    "types": [
      "Ground"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/d/df/Sandshrew.png/revision/latest?cb=20141002082307&path-prefix=en"
  },
  {
    "number": 28,
    "name": "Sandslash",
    "types": [
      "Ground"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/1/13/Sandslash.png/revision/latest?cb=20141002082238&path-prefix=en"
  },
  {
    "number": 29,
    "name": "Nidoran (♀)",
    "types": [
      "Poison"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/7/74/NidoranF.png/revision/latest?cb=20151022215843&path-prefix=en"
  },
  {
    "number": 30,
    "name": "Nidorina",
    "types": [
      "Poison"
    ],
    "imageUrl": "http://vignette4.wikia.nocookie.net/nintendo/images/3/31/Nidorina.png/revision/latest?cb=20141002082133&path-prefix=en"
  },
  {
    "number": 31,
    "name": "Nidoqueen",
    "types": [
      "Poison",
      "Ground"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/4/43/Nidoqueen.png/revision/latest?cb=20151022215827&path-prefix=en"
  },
  {
    "number": 32,
    "name": "Nidoran (♂)",
    "types": [
      "Poison"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/9/91/NidoranM.png/revision/latest?cb=20151022215854&path-prefix=en"
  },
  {
    "number": 33,
    "name": "Nidorino",
    "types": [
      "Poison"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/7/7a/Nidorino.png/revision/latest?cb=20151022215909&path-prefix=en"
  },
  {
    "number": 34,
    "name": "Nidoking",
    "types": [
      "Poison",
      "Ground"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/7/76/Nidoking.png/revision/latest?cb=20141002081956&path-prefix=en"
  },
  {
    "number": 35,
    "name": "Clefairy",
    "types": [
      "Normal"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/d/d2/Clefairy.png/revision/latest?cb=20110917211807&path-prefix=en"
  },
  {
    "number": 36,
    "name": "Clefable",
    "types": [
      "Normal"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/d/d5/Clefable.png/revision/latest?cb=20141002081855&path-prefix=en"
  },
  {
    "number": 37,
    "name": "Vulpix",
    "types": [
      "Fire"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/8/8d/Vulpix.png/revision/latest?cb=20141002081824&path-prefix=en"
  },
  {
    "number": 38,
    "name": "Ninetales",
    "types": [
      "Fire"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/9/98/Ninetales.png/revision/latest?cb=20141002081754&path-prefix=en"
  },
  {
    "number": 39,
    "name": "Jigglypuff",
    "types": [
      "Normal"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/a/af/Jigglypuff.png/revision/latest?cb=20141002081555&path-prefix=en"
  },
  {
    "number": 40,
    "name": "Wigglytuff",
    "types": [
      "Normal"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/f/f1/Wigglytuff.png/revision/latest?cb=20151020172719&path-prefix=en"
  },
  {
    "number": 41,
    "name": "Zubat",
    "types": [
      "Poison",
      "Flying"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/6/67/Zubat.png/revision/latest?cb=20141002081438&path-prefix=en"
  },
  {
    "number": 42,
    "name": "Golbat",
    "types": [
      "Poison",
      "Flying"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/2/2c/Golbat.png/revision/latest?cb=20160226131643&path-prefix=en"
  },
  {
    "number": 43,
    "name": "Oddish",
    "types": [
      "Grass",
      "Poison"
    ],
    "imageUrl": "http://vignette4.wikia.nocookie.net/nintendo/images/d/d9/Oddish.png/revision/latest?cb=20141002081340&path-prefix=en"
  },
  {
    "number": 44,
    "name": "Gloom",
    "types": [
      "Grass",
      "Poison"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/5/59/Gloom.png/revision/latest?cb=20141002081313&path-prefix=en"
  },
  {
    "number": 45,
    "name": "Vileplume",
    "types": [
      "Grass",
      "Poison"
    ],
    "imageUrl": "http://vignette4.wikia.nocookie.net/nintendo/images/3/32/Vileplume.png/revision/latest?cb=20141002081242&path-prefix=en"
  },
  {
    "number": 46,
    "name": "Paras",
    "types": [
      "Bug",
      "Grass"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/e/ee/Paras.png/revision/latest?cb=20111101142258&path-prefix=en"
  },
  {
    "number": 47,
    "name": "Parasect",
    "types": [
      "Bug",
      "Grass"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/6/62/Parasect.png/revision/latest?cb=20141002081144&path-prefix=en"
  },
  {
    "number": 48,
    "name": "Venonat",
    "types": [
      "Bug",
      "Poison"
    ],
    "imageUrl": "http://vignette4.wikia.nocookie.net/nintendo/images/d/d3/Venonat.png/revision/latest?cb=20160505181228&path-prefix=en"
  },
  {
    "number": 49,
    "name": "Venomoth",
    "types": [
      "Bug",
      "Poison"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/c/c2/Venomoth.png/revision/latest?cb=20141002081030&path-prefix=en"
  },
  {
    "number": 50,
    "name": "Diglett",
    "types": [
      "Ground"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/7/7a/Diglett.png/revision/latest?cb=20141002081004&path-prefix=en"
  },
  {
    "number": 51,
    "name": "Dugtrio",
    "types": [
      "Ground"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/8/8b/Dugtrio.png/revision/latest?cb=20161114145926&path-prefix=en"
  },
  {
    "number": 52,
    "name": "Meowth",
    "types": [
      "Normal"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/9/99/Meowth.png/revision/latest?cb=20160811132041&path-prefix=en"
  },
  {
    "number": 53,
    "name": "Persian",
    "types": [
      "Normal"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/b/b3/Persian.png/revision/latest?cb=20141002080840&path-prefix=en"
  },
  {
    "number": 54,
    "name": "Psyduck",
    "types": [
      "Water"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/3/32/Psyduck.png/revision/latest?cb=20160509232356&path-prefix=en"
  },
  {
    "number": 55,
    "name": "Golduck",
    "types": [
      "Water"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/c/cf/Golduck.png/revision/latest?cb=20141002080725&path-prefix=en"
  },
  {
    "number": 56,
    "name": "Mankey",
    "types": [
      "Fighting"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/8/8b/Mankey.png/revision/latest?cb=20151020171140&path-prefix=en"
  },
  {
    "number": 57,
    "name": "Primeape",
    "types": [
      "Fighting"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/e/e0/Primeape.png/revision/latest?cb=20151020171714&path-prefix=en"
  },
  {
    "number": 58,
    "name": "Growlithe",
    "types": [
      "Fire"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/b/bb/Growlithe.png/revision/latest?cb=20141002080601&path-prefix=en"
  },
  {
    "number": 59,
    "name": "Arcanine",
    "types": [
      "Fire"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/5/50/Arcanine.png/revision/latest?cb=20141002080533&path-prefix=en"
  },
  {
    "number": 60,
    "name": "Poliwag",
    "types": [
      "Water"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/9/90/Poliwag.png/revision/latest?cb=20160509233602&path-prefix=en"
  },
  {
    "number": 61,
    "name": "Poliwhirl",
    "types": [
      "Water"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/2/24/Poliwhirl.png/revision/latest?cb=20160804203710&path-prefix=en"
  },
  {
    "number": 62,
    "name": "Poliwrath",
    "types": [
      "Water",
      "Fighting"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/8/85/Poliwrath.png/revision/latest?cb=20160509233622&path-prefix=en"
  },
  {
    "number": 63,
    "name": "Abra",
    "types": [
      "Psychic"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/f/f6/Abra.png/revision/latest?cb=20141002080336&path-prefix=en"
  },
  {
    "number": 64,
    "name": "Kadabra",
    "types": [
      "Psychic"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/b/b0/Kadabra.png/revision/latest?cb=20141002080307&path-prefix=en"
  },
  {
    "number": 65,
    "name": "Alakazam",
    "types": [
      "Psychic"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/f/f5/Alakazam.png/revision/latest?cb=20141002080217&path-prefix=en"
  },
  {
    "number": 66,
    "name": "Machop",
    "types": [
      "Fighting"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/2/2b/Machop.png/revision/latest?cb=20141002080148&path-prefix=en"
  },
  {
    "number": 67,
    "name": "Machoke",
    "types": [
      "Fighting"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/c/ca/Machoke.png/revision/latest?cb=20141002080118&path-prefix=en"
  },
  {
    "number": 68,
    "name": "Machamp",
    "types": [
      "Fighting"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/b/bf/Machamp.png/revision/latest?cb=20141002080045&path-prefix=en"
  },
  {
    "number": 69,
    "name": "Bellsprout",
    "types": [
      "Grass",
      "Poison"
    ],
    "imageUrl": "http://vignette4.wikia.nocookie.net/nintendo/images/d/d1/Bellsprout.png/revision/latest?cb=20141002080012&path-prefix=en"
  },
  {
    "number": 70,
    "name": "Weepinbell",
    "types": [
      "Grass",
      "Poison"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/f/f9/Weepinbell.png/revision/latest?cb=20160524193835&path-prefix=en"
  },
  {
    "number": 71,
    "name": "Victreebel",
    "types": [
      "Grass",
      "Poison"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/5/55/Victreebel.png/revision/latest?cb=20111102135829&path-prefix=en"
  },
  {
    "number": 72,
    "name": "Tentacool",
    "types": [
      "Water",
      "Poison"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/4/43/Tentacool.png/revision/latest?cb=20141002075841&path-prefix=en"
  },
  {
    "number": 73,
    "name": "Tentacruel",
    "types": [
      "Water",
      "Poison"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/7/78/Tentacruel.png/revision/latest?cb=20141002075755&path-prefix=en"
  },
  {
    "number": 74,
    "name": "Geodude",
    "types": [
      "Rock",
      "Ground"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/1/12/Geodude.png/revision/latest?cb=20141002075657&path-prefix=en"
  },
 {
   "number": 75,
   "name": "Graveler",
   "types": [
     "Rock",
     "Ground"
   ],
   "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/b/b6/Graveler.png/revision/latest?cb=20141002075628&path-prefix=en"
  },
  {
    "number": 76,
    "name": "Golem",
    "types": [
      "Rock",
      "Ground"
    ],
    "imageUrl": "http://vignette4.wikia.nocookie.net/nintendo/images/c/ce/Golem.png/revision/latest?cb=20141002075555&path-prefix=en"
  },
  {
    "number": 77,
    "name": "Ponyta",
    "types": [
      "Fire"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/5/5f/Ponyta.png/revision/latest?cb=20160509233419&path-prefix=en"
  },
  {
    "number": 78,
    "name": "Rapidash",
    "types": [
      "Fire"
    ],
    "imageUrl": "http://vignette4.wikia.nocookie.net/nintendo/images/0/01/Rapidash.png/revision/latest?cb=20141002075439&path-prefix=en"
  },
  {
    "number": 79,
    "name": "Slowpoke",
    "types": [
      "Water",
      "Psychic"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/9/9b/Slowpoke.png/revision/latest?cb=20160509233724&path-prefix=en"
  },
  {
    "number": 80,
    "name": "Slowbro",
    "types": [
      "Water",
      "Psychic"
    ],
    "imageUrl": "http://vignette4.wikia.nocookie.net/nintendo/images/e/e1/Slowbro.png/revision/latest?cb=20141002075231&path-prefix=en"
  },
  {
    "number": 81,
    "name": "Magnemite",
    "types": [
      "Electric"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/8/80/Magnemite.png/revision/latest?cb=20141002075115&path-prefix=en"
  },
  {
    "number": 82,
    "name": "Magneton",
    "types": [
      "Electric"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/d/d1/Magneton.png/revision/latest?cb=20141002075041&path-prefix=en"
  },
  {
    "number": 83,
    "name": "Farfetch'd",
    "types": [
      "Normal",
      "Flying"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/f/fe/Farfetchd.png/revision/latest?cb=20141002075000&path-prefix=en"
  },
  {
    "number": 84,
    "name": "Doduo",
    "types": [
      "Normal",
      "Flying"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/9/9c/Doduo.png/revision/latest?cb=20161112160321&path-prefix=en"
  },
  {
    "number": 85,
    "name": "Dodrio",
    "types": [
      "Normal",
      "Flying"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/1/1a/Dodrio.png/revision/latest?cb=20141002074752&path-prefix=en"
  },
  {
    "number": 86,
    "name": "Seel",
    "types": [
      "Water"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/f/f1/Seel.png/revision/latest?cb=20141002074712&path-prefix=en"
  },
  {
    "number": 87,
    "name": "Dewgong",
    "types": [
      "Water",
      "Ice"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/1/1d/Dewgong.png/revision/latest?cb=20141002074637&path-prefix=en"
  },
  {
    "number": 88,
    "name": "Grimer",
    "types": [
      "Poison"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/d/d7/Grimer.png/revision/latest?cb=20151020145749&path-prefix=en"
  },
  {
    "number": 89,
    "name": "Muk",
    "types": [
      "Poison"
    ],
    "imageUrl": "http://vignette4.wikia.nocookie.net/nintendo/images/8/8e/Muk.png/revision/latest?cb=20141002074427&path-prefix=en"
  },
  {
    "number": 90,
    "name": "Shellder",
    "types": [
      "Water"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/6/63/Shellder.png/revision/latest?cb=20141002074219&path-prefix=en"
  },
  {
    "number": 91,
    "name": "Cloyster",
    "types": [
      "Water",
      "Ice"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/7/71/Cloyster.png/revision/latest?cb=20141002083641&path-prefix=en"
  },
  {
    "number": 92,
    "name": "Gastly",
    "types": [
      "Ghost",
      "Poison"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/c/c1/Gastly.png/revision/latest?cb=20141002083707&path-prefix=en"
  },
  {
    "number": 93,
    "name": "Haunter",
    "types": [
      "Ghost",
      "Poison"
    ],
    "imageUrl": "http://vignette4.wikia.nocookie.net/nintendo/images/4/41/Haunter.png/revision/latest?cb=20141002083742&path-prefix=en"
  },
  {
    "number": 94,
    "name": "Gengar",
    "types": [
      "Ghost",
      "Poison"
    ],
    "imageUrl": "http://vignette4.wikia.nocookie.net/nintendo/images/f/f8/Gengar.png/revision/latest?cb=20101120205715&path-prefix=en"
  },
  {
    "number": 95,
    "name": "Onix",
    "types": [
      "Rock"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/b/b2/Onix.png/revision/latest?cb=20141002083816&path-prefix=en"
  },
  {
    "number": 96,
    "name": "Drowzee",
    "types": [
      "Psychic"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/5/5d/Drowzee.png/revision/latest?cb=20141002083845&path-prefix=en"
  },
  {
    "number": 97,
    "name": "Hypno",
    "types": [
      "Psychic"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/0/0e/Hypno.png/revision/latest?cb=20141002083909&path-prefix=en"
  },
  {
    "number": 98,
    "name": "Krabby",
    "types": [
      "Water"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/d/da/Krabby.png/revision/latest?cb=20141002083932&path-prefix=en"
  },
  {
    "number": 99,
    "name": "Kingler",
    "types": [
      "Water"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/a/a4/Kingler.png/revision/latest?cb=20141002083955&path-prefix=en"
  },
  {
    "number": 100,
    "name": "Voltorb",
    "types": [
      "Electric"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/8/80/Voltorb.png/revision/latest?cb=20141002084033&path-prefix=en"
  },
  {
    "number": 101,
    "name": "Electrode",
    "types": [
      "Electric"
    ],
    "imageUrl": "http://vignette4.wikia.nocookie.net/nintendo/images/5/52/Electrode.png/revision/latest?cb=20141002084112&path-prefix=en"
  },
  {
    "number": 102,
    "name": "Exeggcute",
    "types": [
      "Grass",
      "Psychic"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/5/5f/Exeggcute.png/revision/latest?cb=20141002084139&path-prefix=en"
  },
  {
    "number": 103,
    "name": "Exeggutor",
    "types": [
      "Grass",
      "Psychic"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/e/e0/Exeggutor.png/revision/latest?cb=20141002084212&path-prefix=en"
  },
  {
    "number": 104,
    "name": "Cubone",
    "types": [
      "Ground"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/6/65/Cubone.png/revision/latest?cb=20141002084247&path-prefix=en"
  },
  {
    "number": 105,
    "name": "Marowak",
    "types": [
      "Ground"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/c/c4/Marowak.png/revision/latest?cb=20160811131620&path-prefix=en"
  },
  {
    "number": 106,
    "name": "Hitmonlee",
    "types": [
      "Fighting"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/0/0f/Hitmonlee.png/revision/latest?cb=20141002084340&path-prefix=en"
  },
  {
    "number": 107,
    "name": "Hitmonchan",
    "types": [
      "Fighting"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/7/73/Hitmonchan.png/revision/latest?cb=20141002084407&path-prefix=en"
  },
  {
    "number": 108,
    "name": "Lickitung",
    "types": [
      "Normal"
    ],
    "imageUrl": "http://vignette4.wikia.nocookie.net/nintendo/images/a/ab/Lickitung.png/revision/latest?cb=20151020145904&path-prefix=en"
  },
  {
    "number": 109,
    "name": "Koffing",
    "types": [
      "Poison"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/b/b2/Koffing.png/revision/latest?cb=20141002084455&path-prefix=en"
  },
  {
    "number": 110,
    "name": "Weezing",
    "types": [
      "Poison"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/8/88/Weezing.png/revision/latest?cb=20141002084534&path-prefix=en"
  },
  {
    "number": 111,
    "name": "Rhyhorn",
    "types": [
      "Ground",
      "Rock"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/3/36/Rhyhorn.png/revision/latest?cb=20141002084605&path-prefix=en"
  },
  {
    "number": 112,
    "name": "Rhydon",
    "types": [
      "Ground",
      "Rock"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/0/01/Rhydon.png/revision/latest?cb=20141002084631&path-prefix=en"
  },
  {
    "number": 113,
    "name": "Chansey",
    "types": [
      "Normal"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/2/2b/Chansey.png/revision/latest?cb=20151020145947&path-prefix=en"
  },
  {
    "number": 114,
    "name": "Tangela",
    "types": [
      "Grass"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/0/03/Tangela.png/revision/latest?cb=20141002084736&path-prefix=en"
  },
  {
    "number": 115,
    "name": "Kangaskhan",
    "types": [
      "Normal"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/3/39/Kangaskhan.png/revision/latest?cb=20141002084802&path-prefix=en"
  },
  {
    "number": 116,
    "name": "Horsea",
    "types": [
      "Water"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/6/6c/Horsea.png/revision/latest?cb=20141002084822&path-prefix=en"
  },
  {
    "number": 117,
    "name": "Seadra",
    "types": [
      "Water",
      "Poison"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/2/2d/Seadra.png/revision/latest?cb=20141002084848&path-prefix=en"
  },
  {
    "number": 118,
    "name": "Goldeen",
    "types": [
      "Water"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/9/99/Goldeen.png/revision/latest?cb=20141002084909&path-prefix=en"
  },
  {
    "number": 119,
    "name": "Seaking",
    "types": [
      "Water"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/8/8b/Seaking.png/revision/latest?cb=20141002084930&path-prefix=en"
  },
  {
    "number": 120,
    "name": "Staryu",
    "types": [
      "Water"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/e/e8/Staryu.png/revision/latest?cb=20151018131524&path-prefix=en"
  },
  {
    "number": 121,
    "name": "Starmie",
    "types": [
      "Water",
      "Psychic"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/5/56/Starmie.png/revision/latest?cb=20141002085024&path-prefix=en"
  },
  {
    "number": 122,
    "name": "Mr. Mime",
    "types": [
      "Psychic"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/9/93/Mr_Mime.png/revision/latest?cb=20141002085048&path-prefix=en"
  },
  {
    "number": 123,
    "name": "Scyther",
    "types": [
      "Bug",
      "Flying"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/c/c2/Scyther.png/revision/latest?cb=20141002085118&path-prefix=en"
  },
  {
    "number": 124,
    "name": "Jynx",
    "types": [
      "Ice",
      "Psychic"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/e/e2/Jynx.png/revision/latest?cb=20141002085139&path-prefix=en"
  },
  {
    "number": 125,
    "name": "Electabuzz",
    "types": [
      "Electric"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/3/3a/Electabuzz.png/revision/latest?cb=20141002085200&path-prefix=en"
  },
  {
    "number": 126,
    "name": "Magmar",
    "types": [
      "Fire"
    ],
    "imageUrl": "http://vignette4.wikia.nocookie.net/nintendo/images/4/46/Magmar.png/revision/latest?cb=20141002085225&path-prefix=en"
  },
  {
    "number": 127,
    "name": "Pinsir",
    "types": [
      "Bug"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/b/b4/Pinsir.png/revision/latest?cb=20141002085247&path-prefix=en"
  },
  {
    "number": 128,
    "name": "Tauros",
    "types": [
      "Normal"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/9/98/Tauros.png/revision/latest?cb=20141002085311&path-prefix=en"
  },
  {
    "number": 129,
    "name": "Magikarp",
    "types": [
      "Water"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/0/01/Magikarp.png/revision/latest?cb=20141002085333&path-prefix=en"
  },
  {
    "number": 130,
    "name": "Gyarados",
    "types": [
      "Water",
      "Flying"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/d/d7/Gyarados.png/revision/latest?cb=20141002085357&path-prefix=en"
  },
  {
    "number": 131,
    "name": "Lapras",
    "types": [
      "Water",
      "Ice"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/3/30/Lapras.png/revision/latest?cb=20141002085417&path-prefix=en"
  },
  {
    "number": 132,
    "name": "Ditto",
    "types": [
      "Normal"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/0/03/Ditto.png/revision/latest?cb=20141002085455&path-prefix=en"
  },
  {
    "number": 133,
    "name": "Eevee",
    "types": [
      "Normal"
    ],
    "imageUrl": "http://vignette4.wikia.nocookie.net/nintendo/images/f/f2/Eevee.png/revision/latest?cb=20141002085518&path-prefix=en"
  },
  {
    "number": 134,
    "name": "Vaporeon",
    "types": [
      "Water"
    ],
    "imageUrl": "http://vignette4.wikia.nocookie.net/nintendo/images/f/fc/Vaporeon.png/revision/latest?cb=20141002085541&path-prefix=en"
  },
  {
    "number": 135,
    "name": "Jolteon",
    "types": [
      "Electric"
    ],
    "imageUrl": "http://vignette4.wikia.nocookie.net/nintendo/images/1/1e/Jolteon.png/revision/latest?cb=20141002085611&path-prefix=en"
  },
  {
    "number": 136,
    "name": "Flareon",
    "types": [
      "Fire"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/1/17/Flareon.png/revision/latest?cb=20141002085639&path-prefix=en"
  },
  {
    "number": 137,
    "name": "Porygon",
    "types": [
      "Normal"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/2/2d/Porygon.png/revision/latest?cb=20160708135007&path-prefix=en"
  },
  {
    "number": 138,
    "name": "Omanyte",
    "types": [
      "Rock",
      "Water"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/a/a4/Omanyte.png/revision/latest?cb=20141002085825&path-prefix=en"
  },
  {
    "number": 139,
    "name": "Omastar",
    "types": [
      "Rock",
      "Water"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/9/97/Omastar.png/revision/latest?cb=20141002085852&path-prefix=en"
  },
  {
    "number": 140,
    "name": "Kabuto",
    "types": [
      "Rock",
      "Water"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/a/a1/Kabuto.png/revision/latest?cb=20141002085914&path-prefix=en"
  },
  {
    "number": 141,
    "name": "Kabutops",
    "types": [
      "Rock",
      "Water"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/7/72/Kabutops.png/revision/latest?cb=20141002085942&path-prefix=en"
  },
  {
    "number": 142,
    "name": "Aerodactyl",
    "types": [
      "Rock",
      "Flying"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/e/e6/Aerodactyl.png/revision/latest?cb=20141002090004&path-prefix=en"
  },
  {
    "number": 143,
    "name": "Snorlax",
    "types": [
      "Normal"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/0/0b/Snorlax.png/revision/latest?cb=20141002090028&path-prefix=en"
  },
  {
    "number": 144,
    "name": "Articuno",
    "types": [
      "Ice",
      "Flying"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/5/52/Articuno.png/revision/latest?cb=20141002090055&path-prefix=en"
  },
  {
    "number": 145,
    "name": "Zapdos",
    "types": [
      "Electric",
      "Flying"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/d/d8/Zapdos.png/revision/latest?cb=20141002090124&path-prefix=en"
  },
  {
    "number": 146,
    "name": "Moltres",
    "types": [
      "Fire",
      "Flying"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/0/01/Moltres.png/revision/latest?cb=20141002090414&path-prefix=en"
  },
  {
    "number": 147,
    "name": "Dratini",
    "types": [
      "Dragon"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/9/99/Dratini.png/revision/latest?cb=20160226131111&path-prefix=en"
  },
  {
    "number": 148,
    "name": "Dragonair",
    "types": [
      "Dragon"
    ],
    "imageUrl": "http://vignette1.wikia.nocookie.net/nintendo/images/5/5a/Dragonair.png/revision/latest?cb=20141002090319&path-prefix=en"
  },
  {
    "number": 149,
    "name": "Dragonite",
    "types": [
      "Dragon",
      "Flying"
    ],
    "imageUrl": "http://vignette2.wikia.nocookie.net/nintendo/images/a/a6/Dragonite.png/revision/latest?cb=20141002090341&path-prefix=en"
  },
  {
    "number": 150,
    "name": "Mewtwo",
    "types": [
      "Psychic"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/d/d3/Mewtwo.png/revision/latest?cb=20141002090451&path-prefix=en"
  },
  {
    "number": 151,
    "name": "Mew",
    "types": [
      "Psychic"
    ],
    "imageUrl": "http://vignette3.wikia.nocookie.net/nintendo/images/b/bf/Mew.png/revision/latest?cb=20141002090523&path-prefix=en"
  }
];

const addSortButtons = () => {
  const sortButton = new Image(12, 12);
  sortButton.classList.add('sort');
  sortButton.src = sortButtonUrl;
  const sortButton2 = sortButton.cloneNode();
  const sortButton3 = sortButton.cloneNode();
  sortButton.classList.add('name');
  sortButton2.classList.add('number');
  sortButton3.classList.add('type');

  const nameHeader = document.getElementById('name');
  const numberHeader = document.getElementById('number');
  const typeHeader = document.getElementById('type');
  nameHeader.appendChild(sortButton);

  numberHeader.appendChild(sortButton2);

  typeHeader.appendChild(sortButton3);
}

addSortButtons();

const addRows = (pokemonData, firstRowOfPage, lastRowOfPage) => {
  //for non-API data set
  for (var i = firstRowOfPage; i < lastRowOfPage; i++) {
    const newRow = document.createElement('tr');
    const nameCol = document.createElement('td');
    const numCol = document.createElement('td');
    const typeCol = document.createElement('td');
    const imgCol = document.createElement('td');
    const img = new Image(80, 80);
    img.src = pokemonData[i].imageUrl;
    imgCol.appendChild(img);
    newRow.appendChild(nameCol).innerHTML = pokemonData[i].name;
    newRow.appendChild(numCol).innerHTML = pokemonData[i].number;
    if (pokemonData[i].types.length > 1) {
      newRow.appendChild(typeCol).innerHTML = pokemonData[i].types[0] + '/' + pokemonData[i].types[1];
    } else {
      newRow.appendChild(typeCol).innerHTML = pokemonData[i].types;
    }
    newRow.appendChild(imgCol);
    tableBody.appendChild(newRow);
  }
  console.log(tableBody);
}

const choosePage = (page) => {
  const pageToRows = {
    1: 1,
    2: 11,
    3: 21,
    4: 31,
    5: 41,
    6: 51,
    7: 61,
    8: 71,
    9: 81,
    10: 91,
    11: 101,
    12: 111,
    13: 121,
    14: 131,
    15: 141
  };
  const firstRowOfPage = pageToRows[page];
  const lastRowOfPage = firstRowOfPage + 9;
  addRows(firstRowOfPage, lastRowOfPage);
};

const clearTable = () => {
  while (tableBody.hasChildNodes()) {
    tableBody.removeChild(tableBody.firstChild);
  }
}

addRows(pokemonData, 1, 10);

//sort the pokemon dataset based off column name
const sortTable = (column) => {
  const sortedPokemonData = pokemonData.sort((a, b) => {
    return a[column] < b[column] ? -1 : a[column] > b[column] ? 1 : 0;
  });

  return sortedPokemonData;
};

const sortIcons = document.getElementsByClassName('sort');

const elements = [...sortIcons];

elements.forEach(el => {
  el.addEventListener('click', e => {
    const columnToSort = el.classList[1];
    let sortedPokemonData = sortTable(columnToSort);
    clearTable();
    console.log('clicked', el.classList)

    if (el.classList.contains('sorted')) {
      sortedPokemonData = sortedPokemonData.reverse();
      el.classList.remove('sorted');
      console.log('after sorted', el.classList)
    } else {
      el.classList.add('sorted');
    }
    addRows(sortedPokemonData, 1, 10);
  });
});


// getAllPokemon();