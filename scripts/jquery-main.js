$( document ).ready(function() {
  // Variable declarations
  var songList;

  $.ajax({
     url: '../music.json',
     data: {
        format: 'json'
     },
     error: function() {
      console.log("data failed");
     },
     dataType: 'json',
     success: function(data) {
      console.log('data: ', data);
      songList = data.songs
      showData(songList);
     },
     type: 'GET'
  });

  function showData(songList) {
    console.log('song list: ', songList);
    $.each(songList, function (index, value) {
      console.log('looping?');
      $('#main-songs').append(`<div>
                           <h4>${songList[index].title}</h4>
                           <h6>${songList[index].artist}</h6>
                           <h6>${songList[index].album}</h6>
                           <button type="button" class="delete">
                           Delete</button>
                           </div>`);
    });
  }

  $(document).on("click", ".delete", function(){
   $(this).parent('div').remove();
  });

  $('#more-button').click( function(event) {
    $(this).addClass('hidden');
    moarSongs();
  });

  function moarSongs(get) {
    $.ajax({
       url: '../music2.json',
       data: {
          format: 'json'
       },
       error: function() {
        console.log("data failed");
       },
       dataType: 'json',
       success: function(data) {
        console.log('data: ', data);
        songList = data.songs
        showData(songList);
       },
       type: 'GET'
    });

    function showData(songList) {
      console.log('song list: ', songList);
      $.each(songList, function (index, value) {
        console.log('looping?');
        $('#main-songs').append(`<div>
                             <h4>${songList[index].title}</h4>
                             <h6>${songList[index].artist}</h6>
                             <h6>${songList[index].album}</h6>
                             <button type="button" class="delete">
                             Delete</button>
                             </div>`);
      });
    }
  }

  $('#addmusic').click(function(event) {
    $('#add-new').removeClass('hidden');
    $('#section-one').addClass('hidden');
    $('#add-new-song').focus();
  })

  $('#viewmusic').click(function(event) {
    $('#section-one').removeClass('hidden');
    $('#add-new').addClass('hidden');
  })

  $('#addMusicButton').click(function(event) {
    $('#main-songs').append(`<div>
                         <h4>${$('#add-new-song').val()}</h4>
                         <h6>${$('#add-new-artist').val()}</h6>
                         <h6>${$('#add-new-album').val()}</h6>
                         <button type="button" class="delete">
                         Delete</button>
                         </div>`);
  })
});
