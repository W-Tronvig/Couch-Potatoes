'use strict';

var insideLocations = function(name, image, website, address) {
    this.name = name;
    this.image = image;
    this.website = website;
    this.address = address;
}

var insideActiveArray = [];
insideActiveArray.push(
    new.insideLocations("DIY Bar", "../main_images/indoor/active/DIYbar.jpg", "https://www.diybar.co/", "3522 N Vancouver Ave, Portland, OR 97227"),
    new.insideLocations("G6 Air Park", "../main_images/indoor/active/G6airpark.jpg", "https://www.g6airpark.com/portland-oregon/", "10414 SE Washington St, Portland, OR 97216"),
    new.insideLocations("Escape Room Adventure","../main_images/indoor/active/escaperoom.jpeg", "http://labyrinthescapegames.com/", "816 NW Hoyt St, Portland, OR 97209"),
    new.insideLocations("Murder-Mystery CO","../main_images/indoor/active/murderMysteryCo.jpg", "https://murdermysterydinnerportland.com/", "715 SW Bancroft St, Portland, OR 97239"),
    new.insideLocations("Planet Granite","../main_images/indoor/active/planetGranite.png", "https://planetgranite.com/pdx/", "1405 NW 14th Ave Portland, OR 97229"),
    new.insideLocations("Glowing Green","../main_images/indoor/active/glowingGreen.jpeg", "https://glowinggreens.com/", "509 SW Taylor St, Portland, OR 97204"),
    new.insideLocations("Pips and Bounce","../main_images/indoor/active/pipsAndBounce.jpeg", "http://www.pipsandbounce.com/", "833 Se Belmont St, Portland, OR 97214"),
    new.insideLocations("Playdate PDX","../main_images/indoor/active/PlaydatePDX.jpg", "http://www.playdatepdx.com/", "1434 NW 17th Ave, Portland, OR 97209"),
    new.insideLocations("Rose City Rollers","../main_images/indoor/active/RoseCityRollers.jpg", "https://www.rosecityrollers.com/", "7805 SE Oaks Park Way, Portland, OR 97202"),
    new.insideLocations("Sykart Indoor Racing","../main_images/indoor/active/SykartIndoorRacing.jpeg", "http://www.sykart.com/tigard/", "8205 SW Hunziker St, Portland, OR 97223"),
);

var insideCalmArray = [];
insideCalmArray.push(
    new.insideLocations("Grand Central Bowling", "../main_images/indoor/calm/GrandCentralBowling.png", "http://www.thegrandcentralbowl.com/#home-section", "Buckman 808 SE Morrison St, Portland, OR 97214"),
    new.insideLocations("Harvey’s Comedy Club", "../main_images/indoor/calm/HarveyComedyClub", "https://www.harveyscomedyclub.com/", "436 NW 6th Ave, Portland, OR 97209"),
    new.insideLocations("Oregon museum of science and industry (OMSI)", "../main_images/indoor/calm/omsi", "https://omsi.edu/", "1945 SE Water Ave, Portland, OR 97214 "),
    new.insideLocations("Seahorse Aquarium Supply", "../main_images/indoor/calm/Seahorse.jpeg", "https://seahorse-nw.com/", "106 NE Russet St, Portland, OR 97211"),
    new.insideLocations("PDX Night Market", "../main_images/indoor/calm/PDXNightMarket.jpeg", "PDXNM.com", "100 SE Alder St, Portland OR, 97214"),
    new.insideLocations("Ilani Casino", "../main_images/indoor/calm/illani.jpeg", "https://ilaniresort.com/", "1 Cowlitz Way, Ridgefield, WA 98642"),
    new.insideLocations("Big als", "../main_images/indoor/calm/bigAls.jpeg", "https://www.ilovebigals.com/beaverton/", "14950 SW Barrows Rd, Beaverton, OR 97007"),
    new.insideLocations("Costco", "../main_images/indoor/calm/costco.jpeg", "https://m.costco.com/warehouse-locations", "15901 SE Jenkins Rd, Aloha, OR 97007"),
    new.insideLocations("Punch Bowl Social", "../main_images/indoor/calm/PunchBowlSocial.jpeg", "http://www.punchbowlsocial.com/location/portland", "340 SW Morrison St Portland, OR 97204"),
    new.insideLocations("Ground Kontrol","../main_images/indoor/calm/", "https://groundkontrol.com/groundKontrol.jpg", "115 NW 5th Ave Portland, OR 97209"),
);

var pickedImages = [];


//function will choose random activity
function getActiveActivity() {
  if (pickedImages.length == foodArray.length) {
    pickedImages = [];
  }
  var sendImage = document.getElementById("indoorActivity");
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
  document.getElementById("indoorActivity").innerHTML = chosen.name+ "<br>";
  sendImage.appendChild(foodImage);
  document.getElementById("info").innerHTML= "<br>"+ chosen.website + "<br>" + chosen.address;
  pickedImages.push(chosen.image);
}

function getCalmActivity() {
  if (pickedImages.length == foodArray.length) {
    pickedImages = [];
  }
  var sendImage = document.getElementById("indoorActivity");
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
  document.getElementById("indoorActivity").innerHTML = chosen.name+ "<br>";
  sendImage.appendChild(foodImage);
  document.getElementById("info").innerHTML= "<br>"+ chosen.website + "<br>" + chosen.address;
  pickedImages.push(chosen.image);
}