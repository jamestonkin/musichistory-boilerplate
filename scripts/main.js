var songs = [];
var addNewMusic = '';
var addNewArtist = '';
var addNewAlbum = '';


songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift('My Shot > by Lin-Manuel Miranda on the album Hamilton: An American Musical');
songs.push('Wait For It > by Usher on the album The Hamilton Mixtape');

for (var i = 0; i < songs.length; i++) {
  songs[i] = songs[i].replace('>', '-');
  songs[i] = songs[i].replace('*', '');
  songs[i] = songs[i].replace('(', '');
  songs[i] = songs[i].replace('@', '');
  songs[i] = songs[i].replace('!', '');
  insertSongs = document.getElementById('main-songs');
  insertSongs.innerHTML += '<h4>' + songs[i] + '</h4>';
}

var addMusic = document.getElementById('addmusic');
var viewMusic = document.getElementById('viewmusic');
var sectionOne = document.getElementById('section-one');
var addNew = document.getElementById('add-new');
var addMusicButton = document.getElementById('addMusicButton');

addMusic.addEventListener('click', function(event){
  addNew.classList.remove('hidden');
  sectionOne.classList.add('hidden');
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
