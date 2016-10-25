var bio = {
	"name": "Samantha Blasbalg",
	"role": "Software Quality Engineer",
	"contacts": 
	{
		"mobile": "401.743.6996",
		"email": "blasbalgs@gmail.com",
		"github": "samanthablasbalg",
		"location": "Cambridge, MA"
	},
	"pictureURL": "images/me.jpg",
	"welcomeMessage": "ALLOOO",
	"skills": ["being awesome","testing things","finding bugs"]
};

var education = {
	"schools": [
		{
			"name": "University of Rhode Island",
			"location": "Kingston, RI, US",
			"degree": "BS",
			"major": "Communicative Disorders",
			"minor": "Stage and Production Management",
			"years": "2004-2008"
		},
		{
			"name": "Boston University",
			"location": "Boston, MA, US",
			"degree": "MEng",
			"major": "Biomedical Engineering",
			"years": "2008-2014"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": "2016",
			"url": ""
		}
	] 
};

var work = {
	"jobs" : [
		{
			"position": "Graphics Quality Engineer",
			"employer": "MathWorks",
			"years": "2014-present",
			"location": "Natick, MA, US",
			"description": "Putting some text in here that will be replaced later lalalala"
		},
		{
			"position": "Graphics Quality Engineer Intern",
			"employer": "MathWorks",
			"years": "2014",
			"location": "Natick, MA, US",
			"description": "Putting some text in here that will be replaced later lalalala"
		}		
	]
};

var projects = {
	"projects" : [
		{
			"title": "foo",
			"dates": "2014",
			"description": "alalalala",
			"images": "images/fry.jpg"
		},
		{
			"title": "bar",
			"dates": "2015",
			"description": "alalalala",
			"images": "images/fry.jpg"
		},
		{
			"title": "baz",
			"dates": "2016",
			"description": "alalalala",
			"images": "images/fry.jpg"
		}
	]
};

projects.display = function()
{
	for (var i = 0, len = projects.projects.length; i < len; i++) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
		$(".project-entry:last").append(formattedDescription);
		var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[i].images);
		$(".project-entry:last").append(formattedImage);

	};
};

projects.display();

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
$("#topContacts").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
$("#topContacts").append(formattedLocation);

var formattedImage = HTMLbioPic.replace("%data%",bio.pictureURL);
$("#header").append(formattedImage);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (var i = 0, len = bio.skills.length; i < len; i++)
	{
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
		$("#skills").append(formattedSkill);
	};
};

function displayWork() {
	for (var i = 0, len = work.jobs.length; i < len; i++) {
		$("#workExperience").append(HTMLworkStart);
		var formattedJob = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].position);
		$(".work-entry:last").append(formattedJob+formattedTitle);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].years);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[i].city);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
		$(".work-entry:last").append(formattedDescription);
	};
};

displayWork();

$("#main").append(internationalizeButton);
function inName(originalName)
{
	var names = originalName.split(" ");
	var firstName = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
	var lastName = names[1].toUpperCase();
	var fullName = firstName + " " + lastName;
	return fullName;
};

$("#mapDiv").append(googleMap);