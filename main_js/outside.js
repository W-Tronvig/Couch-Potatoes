'use strict';

var outsideLocations = function (name, image, website, address) {
    this.name = name;
    this.image = image; 
    this.website = website;
    this.address = address;
}

var outsideActiveArray = [];
outsideActiveArray.push(
new.outsideLocations("Forest Park", "../main_images/ForestPark.jpg", "https://www.travelportland.com/article/forest-park/", "Portland, OR 97231"),
new.outsideLocations("Aspen Lakes Golf Course", "../main_images/GolfCourse.jpg", "https://www.aspenlakes.com/", "Aspen Lakes Golf 16900 Aspen Lakes Dr. Sisters, Oregon 97759"),
new.outsideLocations("Cannon Beach", "../main_images/CannonBeach.jpg", "http://www.cannonbeach.org/", "Cannon Beach, OR 97110"),
new.outsideLocations("Mt. Hood Meadows", "../main_images/MountHoodMeadows.jpg", "https://www.skihood.com/", "14040 Hwy 35PO Box 470Mt. Hood, OR 97041"),
new.outsideLocations("Brew Group PDX", "../main_images/BrewGroup.jpg", "https://www.brewgrouppdx.com", "1425 NW Flanders St. Portland, OR 97209"),
new.outsideLocations("Jogging in Portland!", "../main_images/JogginginPortland.jpg", "https://fitt.co/portland/best-run-portland/", "Portland, OR"),
new.outsideLocations("Wildwood Adventures", "../main_images/WildWoodTours", "https://www.wildwoodtours.com/tours/columbia-gorge-tours/", "Portland, OR"),
new.outsideLocations("Trackers Portland", "../main_images.Archery.jpg", "https://trackerspdx.com/archery.php", "Trackers Earth Portland 4617 SE Milwaukie Avenue Portland, OR 97202"),
new.outsideLocations("Fly Style Paragliding", "../main_images/Paragliding.jpg", "http://www.flystyleparagliding.com", "Hood River, OR"),
new.outsideLocations("iFly!", "../main_images/IFly.jpeg", "https://www.iflyworld.com/?keyword=Ifly%20portland&MatchType=e&creative=220959825278&Placement=&gclid=EAIaIQobChMIq9DU7tTv2QIV1uDICh1nawdQEAAYASAAEgJS6_D_BwE", "10645 SW Greenburg Rd Tigard, OR 97223"),
);

var outsideCalmArray = [];
outsideCalmArray.push(
new.outsideLocations("Lewis and Clark National Historical Park", "../main_images/LewisPark.jpg", "https://www.nps.gov/lewi/index.htm", "Lewis and Clark National Historical Park 92343 Fort Clatsop Road Astoria, OR 97103"),
new.outsideLocations("Oregon Zoo", "../main_images/OregonZoo.jpg", "https://www.oregonzoo.org/", "Oregon Zoo 4001 Southwest Canyon Road Portland, OR 97221"),
new.outsideLocations("Tom McCall Waterfront Park", "../main_images/WaterfrontPark.jpg", "https://www.portlandoregon.gov/parks/finder/index.cfm?action=viewpark&propertyid=156", "Tom McCall Waterfront Park 98 SW Naito Pkwy Portland, OR 97204"),
new.outsideLocations("Washington Park", "../main_images/WashingtonPark.jpg", "https://www.travelportland.com/article/washington-park/", "Washington Park 4033 Southwest Canyon Road Portland, OR 97221"),
new.outsideLocations("Portland Japanese Garden", "../main_images/JapaneseGarden.jpg", "https://japanesegarden.org/", "Portland Japanese Garden 611 SW Kingston Avenue Portland, OR 97205"),
new.outsideLocations("Out n' About", "../main_images/OutandAbout.jpg", "http://treehouses.com/joomla/index.php/treesort/accommodations", "300 Page Crek Road Cave Junction, OR 97523"),
new.outsideLocations("Drive in Movie Theater", "../main_images/DriveIn.jpg", "https://www.99w.com/", "3110 Portland Rd Newborn, OR 97132"),
new.outsideLocations("Have a Picnic!", "../main_images/Picnic.jpg", "https://www.portlandoregon.gov/parks/38301", "1120 SW 5th Ave Portland, OR 97204"),
new.outsideLocations("Fishing/Boating", "../main_images/Fishing.jpeg", "http://northoregonfishing.com/", "Portland, OR"),
new.outsideLocations("Willamette Valley Wine Tasting", "../main_images/WillametteValleyWine.jpeg", "https://www.wvv.com/", "8800 Enchanted Way SE Turner, OR 97392"),
);

//Nancy's randomizer function modified for outside activities. 

var randomLocationChosenActive = [];

function getOutsideLocationActivity() {
    if (randomLocationChosenActive.length == outsideActiveArray.length) {
        randomLocationChosenActive = [];
    }
    var sendImage = document.getElementById("activity");
    sendImage.innerHTML = "";
    var chosen = outsideActiveArray[Math.floor(Math.random()*outsideActiveArray.length)];

    while (randomLocationChosenActive.includes(chosen.image)) {
        var chosen = outsideActiveArray[Math.floor(Math.random()*outsideActiveArray.length)];
    }
    var image = chosen.image;
    var outsideActivity = document.createElement("img");
    outsideActivity.src = chosen.image;
    document.getElementById("activity").innerHTML = chosen.name+ "<br>";
    sendImage.appendChild(outsideActivity);
    document.getElementById("info").innerHTML= "<br>"+  chosen.website + "<br>" + chosen.address;
    randomLocationChosenActive.push(chosen.image);
}

var randomLocationChosenCalm = [];

function getInsideLocationActivity() {
    if (randomLocationChosenCalm.length == outsideCalmArray.length) {
        randomLocationChosenCalm = [];
    }
    var sendImage = document.getElementById("activity");
    sendImage.innerHTML = "";
    var chosen = outsideCalmArray[Math.floor(Math.random()*outsideCalmArray.length)];

    while (randomLocationChosenCalm.includes(chosen.image)) {
        var chosen = outsideCalmArray[Math.floor(Math.random()*outsideCalmArray.length)];
    }
    var image = chosen.image;
    var outsideActivity = document.createElement("img");
    outsideActivity.src = chosen.image;
    document.getElementById("activity").innerHTML = chosen.name+ "<br>";
    sendImage.appendChild(outsideActivity);
    document.getElementById("info").innerHTML= "<br>"+  chosen.website + "<br>" + chosen.address;
    randomLocationChosenCalm.push(chosen.image);
}


