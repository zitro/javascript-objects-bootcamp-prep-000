

var playlist = {bryan: 'my song is called song'};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle

  return playlist;

}

function removeFromPlaylist(playlist, artistName){

delete playlist.artistName;

}
