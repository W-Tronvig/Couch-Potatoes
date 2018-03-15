//constructor
var Ingest = function(name, image, website, address) {
  this.name = name;
  this.image = image;
  this.website = website;
  this.address = address;
}


//food
var foodArray = [
  ("Rudy's Pizza", "images/ingest/rudys.jpg","www.rudysgourmetpizza.com", "2443 SE Powell Blvd, Portland, OR 97202"),
  ("Loving Hut", "images/ingest/lovinghut.jpg", "https://lovinghut.us/portland", "1239 SW Jefferson St, Portland, OR 97201"),
  ("Jackknife", "images/ingest/jackkinfe.jpg", "http://jackknifepdx.com", "614 SW 11th Ave, Portland, OR 97205"),
  ("NextLevel Burger", "images/ingest/nextlevel.jpg", "http://www.nextlevelburger.com", "4121 SE Hawthorne Blvd, Portland, OR 97214"),
  ("Departure", "images/ingest/departure.jpg", "http://departureportland.com", "525 SW Morrison St, Portland, OR 97204"),
  ("Mi Mero Mole", "images/ingest/mole.jpg", "http://mmmtacospdx.com", "32 NW 5th Ave, Portland, OR 97209"),
  ("Le Pigeon", "images/ingest/pigeon.png", "http://lepigeon.com", "738 E Burnside St, Portland, OR 97214"),
  ("Bollywood Theater", "images/ingest/bollywood.jpg", "http://www.bollywoodtheaterpdx.com", "3010 SE Division St, Portland, OR 97202"),
  ("No Bones Beach Club", "images/ingest/bones.png", "https://www.nobonespdx.com", "3928 N Mississippi Ave, Portland, OR 97227"),
  ("Paradox Cafe", "images/ingest/paradox.jpg", "http://paradoxorganiccafe.com", "3439 SE Belmont St, Portland, OR 97214"),
];


var drinkArray = [
  ("Pearl Tavern", "images/ingest/pearl.jpg","http://pearltavernpdx.com", "231 NW 11th Ave, Portland, OR 97209"),
  ("The Old Portland", "images/ingest/old.jpg", "http://pearltavernpdx.com", "1433 NW Quimby St, Portland, OR 97209"),
  ("Bar Casa Vale", "images/ingest/vale.jpg", "www.barcasavale.com", "215 SE 9th Ave, Portland, OR 97214"),
  ("Century", "images/ingest/century.jpg", "http://centurybarpdx.com/", "930 SE Sandy Blvd, Portland, OR 97214"),
  ("The Bye and Bye", "images/ingest/bye.jpg", "http://thebyeandbye.com", "1011 NE Alberta St, Portland, OR 97211"),
  ("Capitol", "images/ingest/capitol.jpg", "http://capitolpdx.com/", "1440 NE Broadway St, Portland, OR 97232"),
  ("Dig A Pony", "images/ingest/pony.jpg", "http://digaponyportland.com", "736 SE Grand Ave, Portland, OR 97214"),
  ("Here After", "images/ingest/here.jpg", "http://hereafterpdx.com/", "3326 SE Belmont St, Portland, OR 97214"),
  ("Victoria Bar", "images/ingest/victoria.jpg", "http://victoriapdx.com", "4835 N Albina Ave, Portland, OR 97217"),
  ("Quality Bar", "images/ingest/quality.png", "http://www.qualitybarpdx.com/", "931 SW Oak St, Portland, OR 97205"),
];
