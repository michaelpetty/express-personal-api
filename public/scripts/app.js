$(document).ready(function(){
  console.log('document is ready');

  const $playList = $('#indexPlays');
  let allPlays = [];

  $.ajax({
    method: 'GET',
    url: '/api/plays',
    success: handleSuccess,
    error: handleError
  })

  $playList.on('click', '.deleteBtn', (e) => {
    const playId = e.target.dataset.id
    console.log(`clicked delete button to /api/plays/${playId}`);
    $.ajax({
      method: 'DELETE',
      url: `/api/plays/${playId}`,
      success: deletePlaySuccess,
      error: deletePlayError
    });
  });

  function getPlayHtml(play) {
    return `<div class="col">
            <h3>${play.title}</h3>
              at ${play.theatre}<br/>
              <div class="img" style="background-image: url(${play.image})"></div>              
              <div class="btn-group">
                <button type="button" name="update" class="updateBtn btn btn-info btn-sm " data-id=${play._id}>Update</button>
                <button type="button" name="delete" class="deleteBtn btn btn-danger btn-sm " data-id=${play._id}>Delete</button>
              </div>
            </div>`;
  }

  function getAllPlaysHtml(plays) {
    let playsHtml = '';
    let cols = 1;
    plays.forEach((play, i) => {
      if (cols === 1) playsHtml += '<div class="row">';
      playsHtml += getPlayHtml(play);
      if (cols === 3 || i === plays.length - 1) playsHtml += '</div>';
      (cols === 3)? cols=1: cols++;
    })
    return playsHtml;
  }

  function render () {
    // empty existing posts from view
    $playList.empty();
    $playList.append(getAllPlaysHtml(allPlays));
  };

  function handleSuccess(json) {
    allPlays = json.data;
    render();
  }

  function handleError(e) {
    console.log('uh oh');
    $playList.text('Failed to load plays. Is the server working?');
  }

  function deletePlaySuccess(json) {
    console.log(json);
    console.log(`delete play ${json.removed._id}`);
    // find the book with the correct ID and remove it from our allBooks array
    for(i = 0; i < allPlays.length; i++) {
      if(allPlays[i]._id == json.removed._id) {
        allPlays.splice(i, 1);
        break;  // we found our book - no reason to keep searching (this is why we didn't use forEach)
      }
    }
    render();
  }

  function deletePlayError() {
    console.log('delete play error!');
  }


});
