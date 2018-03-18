//constructor
var Ingest = function(name, image, website, address) {
  this.name = name;
  this.image = image;
  this.website = website;
  this.address = address;
}



//food
var foodArray = [
  new Ingest("Rudy's Pizza", "../main_images/ingest/rudys.jpg","www.rudysgourmetpizza.com", "2443 SE Powell Blvd, Portland, OR 97202"),
  new Ingest("Loving Hut", "../html_images/ingest/lovinghut.jpg", "https://lovinghut.us/portland", "1239 SW Jefferson St, Portland, OR 97201"),
  new Ingest("Jackknife", "../html_images/ingest/jackknife.jpg", "http://jackknifepdx.com", "614 SW 11th Ave, Portland, OR 97205"),
  new Ingest("NextLevel Burger", "../html_images/ingest/nextlevel.jpg", "http://www.nextlevelburger.com", "4121 SE Hawthorne Blvd, Portland, OR 97214"),
  new Ingest("Departure", "../html_images/ingest/departure.jpg", "http://departureportland.com", "525 SW Morrison St, Portland, OR 97204"),
  new Ingest("Mi Mero Mole", "../html_images/ingest/mole.jpg", "http://mmmtacospdx.com", "32 NW 5th Ave, Portland, OR 97209"),
  new Ingest("Le Pigeon", "../html_images/ingest/pigeon.png", "http://lepigeon.com", "738 E Burnside St, Portland, OR 97214"),
  new Ingest("Bollywood Theater", "../html_images/ingest/bollywood.jpg", "http://www.bollywoodtheaterpdx.com", "3010 SE Division St, Portland, OR 97202"),
  new Ingest("No Bones Beach Club", "../html_images/ingest/bones.png", "https://www.nobonespdx.com", "3928 N Mississippi Ave, Portland, OR 97227"),
  new Ingest("Paradox Cafe", "../html_images/ingest/paradox.jpg", "http://paradoxorganiccafe.com", "3439 SE Belmont St, Portland, OR 97214"),
];

var pickedImages = [];


//function will choose random activity
function getfoodActivity() {
  if (pickedImages.length == foodArray.length) {
    pickedImages = [];
  }
  var sendImage = document.getElementById("activity");
  sendImage.innerHTML = "";
  var chosen = foodArray[Math.floor(Math.random()*foodArray.length)];
  //check if chosen image is already in pickedImages
  //if it is, make a new chosen images
  while (pickedImages.includes(chosen.image)) {
    var chosen = foodArray[Math.floor(Math.random()*foodArray.length)];
  }
  var image = chosen.image;
  var foodImage = document.createElement("img");
  foodImage.src = chosen.image;
  document.getElementById("activity").innerHTML = chosen.name+ "<br>";
  sendImage.appendChild(foodImage);
  document.getElementById("info").innerHTML= "<br>"+ chosen.website + "<br>" + chosen.address;
  pickedImages.push(chosen.image);
}


var drinkArray = [
  ("Pearl Tavern", "../main_images/ingest/pearl.jpg","http://pearltavernpdx.com", "231 NW 11th Ave, Portland, OR 97209"),
  ("The Old Portland", "../main_images/ingest/old.jpg", "http://pearltavernpdx.com", "1433 NW Quimby St, Portland, OR 97209"),
  ("Bar Casa Vale", "../main_images/ingest/vale.jpg", "www.barcasavale.com", "215 SE 9th Ave, Portland, OR 97214"),
  ("Century", "../main_images/ingest/century.jpg", "http://centurybarpdx.com/", "930 SE Sandy Blvd, Portland, OR 97214"),
  ("The Bye and Bye", "../main_images/ingest/bye.jpg", "http://thebyeandbye.com", "1011 NE Alberta St, Portland, OR 97211"),
  ("Capitol", "../main_images/ingest/capitol.jpg", "http://capitolpdx.com/", "1440 NE Broadway St, Portland, OR 97232"),
  ("Dig A Pony", "../main_images/ingest/pony.jpg", "http://digaponyportland.com", "736 SE Grand Ave, Portland, OR 97214"),
  ("Here After", "../main_images/ingest/here.jpg", "http://hereafterpdx.com/", "3326 SE Belmont St, Portland, OR 97214"),
  ("Victoria Bar", "../main_images/ingest/victoria.jpg", "http://victoriapdx.com", "4835 N Albina Ave, Portland, OR 97217"),
  ("Quality Bar", "../main_images/ingest/quality.png", "http://www.qualitybarpdx.com/", "931 SW Oak St, Portland, OR 97205"),
];
