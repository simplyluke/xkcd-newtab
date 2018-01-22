function getRandomPosInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

function updatePage(xkcd) {
  fetch('https://xkcd.com/' + xkcd + '/info.0.json').then(function(response) {
    response.json().then(function(data) {
      var num = data.num;
      var img = data.img;
      var title = data.safe_title;
      var alt = data.alt;
      var targetTitle = document.getElementById('title');
      var targetImg = document.getElementById('xkcd');
      var targetAlt = document.getElementById('alt');
      targetImg.src = img;
      targetTitle.href = "https://xkcd.com/" + num;
      targetTitle.innerText = title;
      targetAlt.textContent = alt;
    });
  });
}

fetch('https://xkcd.com/info.0.json').then(function(response) {
  response.json().then(function(data) {
    var num = data.num;
    var x = getRandomPosInt(num);
    updatePage(x);
  });
});
