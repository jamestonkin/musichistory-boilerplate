var songs = [];


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

// insertSongs = document.getElementById('main-songs');
// insertSongs.innerHTML = '<p>' + songs[0] + '</p>';
// insertSongs.innerHTML = '<p>' + songs[1] + '</p>';
// insertSongs.innerHTML = '<p>' + songs[2] + '</p>';
// insertSongs.innerHTML = '<p>' + songs[3] + '</p>';
// insertSongs.innerHTML = '<p>' + songs[4] + '</p>';
// insertSongs.innerHTML = '<p>' + songs[5] + '</p>';
// insertSongs.innerHTML = '<p>' + songs[6] + '</p>';
// console.log(songs);
