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
			"city": "Kingston, RI, US",
			"degree": "BS",
			"major": "Communicative Disorders",
			"minor": "Stage and Production Management",
			"years": "2004-2008"
		},
		{
			"name": "Boston University",
			"city": "Boston, MA, US",
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
			"city": "Natick, MA, US",
			"description": "Putting some text in here that will be replaced later lalalala"
		},
		{
			"position": "Graphics Quality Engineer Intern",
			"employer": "MathWorks",
			"years": "2014",
			"city": "Natick, MA, US",
			"description": "Putting some text in here that will be replaced later lalalala"
		}		
	]
};

var projects = {
	"projects" : [
		{
			"title": "",
			"dates": "",
			"description": "",
			"images": ""
		}
	]
};

var formattedName = HTMLheaderName.replace("%data%",bio.name);
$("#header").prepend(formattedName);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
};

for (job in work.jobs) {
	if (work.jobs.hasOwnProperty(job))
	{
		$("#workExperience").append(HTMLworkStart);
		var formattedJob = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].position);
		$(".work-entry:last").append(formattedJob+formattedTitle);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].years);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].city);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	};
};