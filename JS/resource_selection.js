// Simulates resource mapping
// Every resource is stored as an object with attributes ranking its difficulty
// sort through resources based on age
// push object to array if difficulty matches

// array of filtered resources
var result = [];
var filteredResult = [];
var companyList = [];
var interestList = [];
var categories = [];

// Role model object constructor
function roleModel(name, summary, area, Url, image) {
	this.name = name;
	this.summary = summary;
	this.area = area;
	this.Url = Url;
	this.image = image;
}

// full list of role models
var roleModels = [ new roleModel('Marissa Mayer', 'CEO, Yahoo & Former VP of Google Maps', 'Math', 'http://www.vogue.com/865211/hail-to-the-chief-yahoos-marissa-mayer/', ''),
new roleModel('Tracy Chou', 'Former Pinterest Engineer', 'Art', 'https://en.wikipedia.org/wiki/Tracy_Chou', '../photos/TracyChou.jpg'),
new roleModel('Sara Clemens', 'Chief Operating Officer, Pandora', 'Music', 'http://investor.pandora.com/phoenix.zhtml?c=227956&p=irol-govBio&ID=235396', ''),
new roleModel('Hilary Mason', 'Founder, Fast Forward Labs: Former Chief Data Scientist, Bitly', 'Science', 'https://en.wikipedia.org/wiki/Hilary_Mason_(data_scientist)', ''),
new roleModel('Payal Kadakia', 'CEO, Classpass', 'Sports', 'https://en.wikipedia.org/wiki/ClassPass#Payal_Kadakia'),
new roleModel('Marcela Sapone', 'Co-Founder & CEO, Hello Alfred', 'Food', 'http://www.businessinsider.com/alfred-founders-explain-why-they-created-a-startup-to-do-your-chores-2015-6', 'pic'),
new roleModel('Ayah Bedir', 'CEO, Founder, LittleBits', 'Games', 'https://en.wikipedia.org/wiki/Ayah_Bdeir', 'pic'),
new roleModel('Camille Fournier', 'CTO, Rent the Runway', 'Fashion', 'https://www.linkedin.com/in/camille-fournier-9011812', 'pic'),
new roleModel('Tasneem Minadakis', 'Head of Rider Growth, Uber', 'Travel', 'http://femgineer.com/2015/01/how-to-transition-from-engineering-to-engineering-management/', 'pic')];
// Resource object constructor
function Resource(name, summary, Url, difficulty, learningStyle) {
	this.name = name;
	this.summary = summary;
	this.Url = Url;
	this.level = difficulty;
	this.learningStyle = learningStyle;
}

// full list of resources
var resources = [ new Resource('Codeacademy', 'Interactive tutorials in Python, JavaScript, HTML/CSS, and more', 'https://www.codecademy.com/', [3, 4], ['Reading']),
new Resource('Coursera', 'Universities upload lessons', 'https://www.coursera.com', [4], ['Video', 'Reading', 'Friends']),
new Resource('CodeHS: Karel The Dog', 'Teach a virtual dog how to move and pick up tennis balls while learning the basics of code', 'http://hoc.codehs.com/hoc_editor.html#course=16#module=17#item=1', [2, 3], ['Video', 'Games']),
new Resource('Mozilla Thimble', 'Remix a "Keep Calm and Carry On" poster', 'https://thimble.mozilla.org', [2, 3], ['Reading', 'Friends']),
new Resource('Code Combat', 'Defeat ogres to learn Python or JavaScript in this epic programming game', 'https://codecombat.com/play', [2, 3, 4], ['Games', 'Friends']),
new Resource('Made with Code', 'Mix your own music, style a light up dress, customize an emoji, and much more!', 'https://www.madewithcode.com/projects/music', [2], ['Games', 'Friends']),
new Resource('Make Academy', 'Create a Pokémon-inspired action game and write code in Swift, used for iOS apps', 'https://www.makeschool.com/build-an-iphone-game-in-your-browser', [3, 4], ['Games', 'Reading']),
new Resource('Code.org Studio', 'Learn to code with Angry Birds, Minecraft, and Disney-inspired games and more', 'https://studio.code.org', [2, 3], ['Games', 'Friends', 'Reading']),
new Resource('Make Magazine', 'Use Arduino and Raspberry Pi to create a photo booth, control your light switch from your phone or a website, and more!', 'http://makezine.com/category/technology/?post_type=projects', [3, 4], ['Reading']),
new Resource('Scratch', 'Create stories, games, and animations with programming blocks and share with others around the world', 'https://scratch.mit.edu', [2, 3], ['Games', 'Friends']),
new Resource('MakeQuest', 'Defeat the evil villain "404" by using JavaScript, remix, and share with your friends', 'http://code.globaloria.com', [2, 3], ['Games', 'Friends']),
new Resource('Technovation Challenge', 'Become a technology entrepreneur and develop a mobile app prototype', 'http://www.technovationchallenge.org/get-started/', [2, 3], ['Reading', 'Friends']),
new Resource('Khan Academy', 'Create drawings and animations with JavaScript', 'https://www.khanacademy.org/computing/computer-programming/programming', [2, 3, 4], ['Video', 'Games']),
new Resource('Twine', 'A literal choose-your-own-adventure story builder', 'http://www.auntiepixelante.com/twine/', [2, 3, 4], ['Reading']),
new Resource('Gamestar Mechanic', 'Learn game design and how to design your own video games', 'http://gamestarmechanic.com', [2, 3], ['Video', 'Games']),
new Resource('Girl Develop It', 'Slides on basic web design, programming concepts', 'https://www.girldevelopit.com/materials', [3, 4], ['Reading']),
new Resource('Girls Who Code', 'Provides a community and immersion programs for girls to learn Computer Science', 'https://girlswhocode.com/', [2, 3], ['Friends']),
new Resource('Blockly Games', 'Simple games using block programming', 'https://blockly-games.appspot.com/?lang=en', [2], ['Games'])
];

// Company object constructor
function Company(name, Url, category, summary) {
	this.name = name;
	this.Url = Url;
	this.category = category;
	this.summary = summary;
}

// full list of companies
var companies = [new Company('Fitbit', 'https://www.fitbit.com/', 'Sports', 'Develop fitness trackers to help improve health with attached apps!'),
new Company('Airbnb', 'https://www.airbnb.com/', 'Travel', 'Book homes from local hosts in 191+ countries.'),
new Company('Rent the Runway', 'https://www.renttherunway.com/', 'Fashion', 'An online marketplace with thousands of designer pieces available for rent.'),
new Company('Spotify', 'https://www.spotify.com/us/', 'Music', 'A digital streaming music service with over a million songs.'),
new Company('Doordash', 'https://www.doordash.com/', 'Food', 'Get food delivered from your local restaurants.'),
new Company('Pinterest', 'http://pinterest.com/', 'Art', 'Catalog your ideas in an artistic way.'),
new Company('Etsy', 'https://www.etsy.com/', 'Art', 'A marketplace of vintage and handmade goods.'),
new Company('GoogleX', 'https://www.solveforx.com/', 'Science', 'A research company dedicated to finding radical solutions with breakthrough technology.'),
new Company('SpaceX', 'http://www.spacex.com/', 'Science', 'Designs, manufactures, and launches advanced rockets and spacecraft.'),
new Company('Pandora', 'http://www.pandora.com/', 'Music', 'A digital streaming music service with personalized radio.'),
new Company('Bit.ly', 'https://bitly.com/', 'Math', 'Shortens, brands, and optimizes links to see clear over the Internet.'),
new Company('Wolfram Alpha', 'https://www.wolframalpha.com/', 'Math', 'A computational knowledge search engine.'),
new Company('ESPN', 'http://www.espn.com/', 'Sports', 'The leading multinational, multimedia sports entertainment company.'),
new Company('Nintendo', 'http://www.nintendo.com/', 'Games', 'A developer of new and classic games for all ages.'),
new Company('Electronic Arts', 'http://www.ea.com/', 'Games', 'A leading publisher of games on Console, PC and Mobile.'),
new Company('Lyft', 'https://www.lyft.com/', 'Travel', 'A US-only ridesharing app'),
new Company('Yelp', 'https://www.yelp.com/nyc', 'Food', 'A user review and recommendation portal of local businesses.')];

function checkEqual (category, array) {
	for (var k = 0; k < array.length; k++) {
		if (category == array[k]) {
			return false;
		}
	}
	return true;
}

(function getInterest() {
	function sortArt() {
		if (checkEqual('Art', interestList)) {
			interestList.push('Art');
		}
	}
	function sortSports() {
		if (checkEqual('Sports', interestList)) {
			interestList.push('Sports');
		}
	}
	function sortTravel() {
		if (checkEqual('Travel', interestList)) {
			interestList.push('Travel');
		}
	}
	function sortScience() {
		if (checkEqual('Science', interestList)) {
			interestList.push('Science');
		}
	}
	function sortMusic() {
		if (checkEqual('Music', interestList)) {
			interestList.push('Music');
		}
	}
	function sortMath() {
		if (checkEqual('Math', interestList)) {
			interestList.push('Math');
		}
	}
	function sortGames() {
		if (checkEqual('Games', interestList)) {
			interestList.push('Games');
		}
	}
	function sortFashion() {
		if (checkEqual('Fashion', interestList)) {
			interestList.push('Fashion');
		}
	}
	function sortFood() {
		if (checkEqual('Food', interestList)) {
			interestList.push('Food');
		}
	}

	document.getElementById('chooseArt').addEventListener("click", sortArt);
	document.getElementById('chooseSports').addEventListener("click", sortSports);
	document.getElementById('chooseTravel').addEventListener("click", sortTravel);
	document.getElementById('chooseScience').addEventListener("click", sortScience);
	document.getElementById('chooseMusic').addEventListener("click", sortMusic);
	document.getElementById('chooseMath').addEventListener("click", sortMath);
	document.getElementById('chooseGames').addEventListener("click", sortGames);
	document.getElementById('chooseFashion').addEventListener("click", sortFashion);
	document.getElementById('chooseFood').addEventListener("click", sortFood);

	//array of user interests
	return interestList;
})();

// sorts user interest
// categories input is array of user selected interests eg. Art, Science etc.
// iterates through list of companies, pushing to companyList array if there's a match
// for companies with multiple categories, checks that company isn't already in companyList array
function sortInterest (categories) {
	for (var j = 0; j < categories.length; j++) {
		for (var i = 0; i < companies.length; i++) {
			if (categories[j] == companies[i].category) {
				companyList.push(companies[i]);
			}
		}
	}
	return companyList;
};

(function showInterest() {
	document.getElementById("grandResults2").innerHTML = "";
	  function sortInterests() {
	  	document.getElementById("grandResults2").innerHTML = "";

	  	(function() {
	  		return sortInterest(interestList);
	  	})();

	  	for (var i = 0; i < companyList.length; i++) {

	 	document.getElementById("grandResults2").innerHTML += "<a href=" + companyList[i].Url + ">" + companyList[i].name + "</a>: " + companyList[i].summary + "<br />";
	 }
	}
document.getElementById("finalPrompt").addEventListener("click", sortInterests);
//companyList = [];
//document.getElementById("grandResults2").innerHTML = "";
})();

// function takes in user selections
// pushes to arrays of links
function sortLevel (level) {
	//result = [];
	for (var i = 0; i < resources.length; i++) {
			for (var j = 0; j < resources[i].level.length; j++) {
			if (level == 'middleSchool' && resources[i].level[j] == 2) {
				//result = [];
				result.push(resources[i]);
			}
			if (level == 'highSchool' && resources[i].level[j] == 3) {
				result.push(resources[i]);
			}
			if (level == 'college' && resources[i].level[j] == 4) {
				//result = [];
				result.push(resources[i]);
			}
		}
	}
	return result;
}

(function getLevel() {
	result = [];
	function sortMS() {
		return sortLevel('middleSchool');
	}
	function sortHS() {
		//result = [];
		return sortLevel('highSchool');
	}
	function sortCollege() {
		//result = [];
		return sortLevel('college');
	}
	document.getElementById("chooseMS").addEventListener("click", sortMS);
	document.getElementById("chooseHS").addEventListener("click", sortHS);
	document.getElementById("chooseCollege").addEventListener("click", sortCollege);

	//result = [];

})();

(function getLearningStyle() {
	function sortVideo() {
		for (var i = 0; i < result.length; i++) {
			for (var j = 0; j < result[i].learningStyle.length; j++) {
				if (result[i].learningStyle[j] == 'Video') {
					if (checkEqual(result[i], filteredResult)) {
						filteredResult.push(result[i]);
					}
				}
			}
		}
		return filteredResult;
	}
	function sortReading() {
		for (var i = 0; i < result.length; i++) {
			for (var j = 0; j < result[i].learningStyle.length; j++) {
				if (result[i].learningStyle[j] == 'Reading') {
					if (checkEqual(result[i], filteredResult)) {
						filteredResult.push(result[i]);
					}
				}
			}
		}
		return filteredResult;
	}
	function sortFriends() {
		for (var i = 0; i < result.length; i++) {
			for (var j = 0; j < result[i].learningStyle.length; j++) {
				if (result[i].learningStyle[j] == 'Friends') {
					if (checkEqual(result[i], filteredResult)) {
						filteredResult.push(result[i]);
					}
				}
			}
		}
		return filteredResult;
	}
	function sortGames() {
		for (var i = 0; i < result.length; i++) {
			for (var j = 0; j < result[i].learningStyle.length; j++) {
				if (result[i].learningStyle[j] == 'Games') {
					if (checkEqual(result[i], filteredResult)) {
						filteredResult.push(result[i]);
					}
				}
			}
		}
		return filteredResult;
	}
	document.getElementById("videos").addEventListener("click", sortVideo);
	document.getElementById("reading").addEventListener("click", sortReading);
	document.getElementById("friends").addEventListener("click", sortFriends);
	document.getElementById("gaming").addEventListener("click", sortGames);
})();

(function showResults() {
	function sortResults() {
		document.getElementById("grandResults1").innerHTML = "";
		for (var i = 0; i < filteredResult.length; i++) {
			document.getElementById("grandResults1").innerHTML += "<a href=" + filteredResult[i].Url + ">" + filteredResult[i].name + "</a>: " + filteredResult[i].summary + " <br />";
		}
	}

	document.getElementById("finalPrompt").addEventListener("click", sortResults);
	filteredResult = [];
})();

(function showRoleModel() {
	function sortWomen() {
		document.getElementById("grandResults3").innerHTML = "";
		for (var j = 0; j < interestList.length; j++) {
			for (var i = 0; i < roleModels.length; i++) {
				if (interestList[j] == roleModels[i].area) {
					var photo;
					(function() {
						if (roleModels[i].name == "Hilary Mason") {
						photo = "photos/HilaryMason.jpg";
					}
					if (roleModels[i].name == "Tracy Chou") {
						photo = "photos/TracyChou.jpg";
					}
					if (roleModels[i].name == "Sara Clemens") {
						photo = "photos/SaraClemens.jpg";
					}
					if (roleModels[i].name == "Payal Kadakia") {
						photo = "photos/PayalKadakia.jpg";
					}
					if (roleModels[i].name == "Marcela Sapone") {
						photo = "photos/MarcelaSapone.jpg";
					}
					if (roleModels[i].name == "Ayah Bedir") {
						photo = "photos/AyahBdeir.jpg";
					}
					if (roleModels[i].name == "Camille Fournier") {
						photo = "photos/CamilleFournier.jpg";
					}
					if (roleModels[i].name == "Tasneem Minadakis") {
						photo = "photos/TasneemMinadakis.jpg";
					}
					if (roleModels[i].name == "Marissa Mayer") {
						photo = "photos/MarissaMayer.jpg";
					}
				})();
					document.getElementById("grandResults3").innerHTML = roleModels[i].name + "!" + "<br />" + "<img src=" + photo + " />" + "<br />" + roleModels[i].summary + "<br />" + "learn more about " + roleModels[i].name + "'s work <a href=" + roleModels[i].Url + ">" + "here" + "</a>";
					return;
				}
			}
		}
	}
	document.getElementById("finalPrompt").addEventListener("click", sortWomen);
})();

// function testfn() {
// 	return interestList.push('Travel');
// }

// document.getElementById("chooseTravel").addEventListener("click", testfn);

// function resourceList(age, subject, goal, style){

// }
