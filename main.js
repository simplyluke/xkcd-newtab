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
      console.log("Hello! the image is: " + img);
      var targetTitle = document.getElementById('title');
      var targetImg = document.getElementById('xkcd');
      var targetAlt = document.getElementById('alt');
      targetImg.src = img;
      targetTitle.textContent = title;
      targetAlt.textContent = alt;
    });
  });
}

fetch('https://xkcd.com/info.0.json').then(function(response) {
  console.log("starting parse");
  response.json().then(function(data) {
    var num = data.num;
    console.log("the current num is: " + num);
    var x = getRandomPosInt(num);
    updatePage(x);
  });
});
