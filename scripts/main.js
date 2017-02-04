// Variable declarations
var songs = [];
var addNewMusic = '';
var addNewArtist = '';
var addNewAlbum = '';
var insertSongs = document.getElementById('main-songs');
var deleteButton = document.getElementsByClassName('delete');
var getMoar = document.getElementById('more-button');

getMoar.addEventListener('click', function(event) {
  getMoar.classList.add('hidden');
    moarSongs();
});

function moarSongs(get) {
  var dataRequest = new XMLHttpRequest();
  dataRequest.addEventListener('load', dataRequestComplete);
  dataRequest.addEventListener('error', loadFailed);
  function loadFailed(load) {
    console.log("data failed",
    load.target.responseText);
  }
  function dataRequestComplete(event) {
    console.log('The transfer is complete and we have data');
    var data = JSON.parse(event.target.responseText);
    showData(data);
  }
  function showData (data) {
    console.log('data: ', data);
    for (var i = 0; i < data.length; i++) {
      console.log('Looping?');
      var songTitle = data[i].title;
      var songArtist = data[i].artist;
      var songAlbum = data[i].album;

      insertSongs.innerHTML += `<div>
                                <h4>${songTitle}</h4>
                                <h6>${songArtist}</h6>
                                <h6>${songAlbum}</h6>
                                <button type="button" class="delete">
                                Delete</button>
                                </div>`;
    }
  }
  dataRequest.open('GET', "../music2.json");
  dataRequest.send();
}


// Event Listener for delete button
document.addEventListener('click', function(event){
  if(event.target.className === 'delete') {
    event.target.parentNode.remove();
  }
});

// XHR request and listens for load or error runs appropriate funciton
var dataRequest = new XMLHttpRequest();
dataRequest.addEventListener('load', dataRequestComplete);
dataRequest.addEventListener('error', loadFailed);

// If load fails runs this funciton
function loadFailed(load) {
  console.log("data failed",
  load.target.responseText);
}

// Successful load from JSON parses file then runs function with loop
function dataRequestComplete(event) {
  console.log('The transfer is complete and we have data');
  var data = JSON.parse(event.target.responseText);
  showData(data);
}

// Loop function for JSON data and prints to DOM
function showData (data) {
  console.log('data: ', data);
  for (var i = 0; i < data.length; i++) {
    console.log('Looping?');
    var songTitle = data[i].title;
    var songArtist = data[i].artist;
    var songAlbum = data[i].album;

    insertSongs.innerHTML += `<div>
                              <h4>${songTitle}</h4>
                              <h6>${songArtist}</h6>
                              <h6>${songAlbum}</h6>
                              <button type="button" class="delete">
                              Delete</button>
                              </div>`;
  }
}

// Gets JSON file and sends
dataRequest.open('GET', "../music.json");
dataRequest.send();


//////////////////Code from Version 2 no longer needed////////////////////

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
//
// songs.unshift('My Shot > by Lin-Manuel Miranda on the album Hamilton: An American Musical');
// songs.push('Wait For It > by Usher on the album The Hamilton Mixtape');
//
// for (var i = 0; i < songs.length; i++) {
//   songs[i] = songs[i].replace('>', '-');
//   songs[i] = songs[i].replace('*', '');
//   songs[i] = songs[i].replace('(', '');
//   songs[i] = songs[i].replace('@', '');
//   songs[i] = songs[i].replace('!', '');
//   insertSongs = document.getElementById('main-songs');
//   insertSongs.innerHTML += '<h4>' + songs[i] + '</h4>';
// }

//////////////////Code from Version 3//////////////////////////

var addMusic = document.getElementById('addmusic');
var viewMusic = document.getElementById('viewmusic');
var sectionOne = document.getElementById('section-one');
var addNew = document.getElementById('add-new');
var addMusicButton = document.getElementById('addMusicButton');

addMusic.addEventListener('click', function(event){
  addNew.classList.remove('hidden');
  sectionOne.classList.add('hidden');
  document.getElementById('add-new-song').focus();
})

viewMusic.addEventListener('click', function(event){
  sectionOne.classList.remove('hidden');
  addNew.classList.add('hidden');
})

addMusicButton.addEventListener('click', addMyMusic);

function addMyMusic(event) {
  addNewSong = document.getElementById('add-new-song').value;
  console.log(addNewSong);
  addNewArtist = document.getElementById('add-new-artist').value;
  console.log(addNewArtist);
  addNewAlbum = document.getElementById('add-new-album').value;
  console.log(addNewAlbum);
  insertSongs.innerHTML += '<h4>' + addNewSong + " by " + addNewArtist + " on the album " + addNewAlbum + '</h4>';

}
