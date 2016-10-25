var name = "Samantha Blasbalg";
var formattedName = HTMLheaderName.replace("%data%",name);
var role = "Software Quality Engineer";
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var work = {
	"jobs" : [
		{
			"position" : "Graphics Quality Engineer",
			"employer" : "MathWorks",
			"years" : "2014-present",
			"city" : "Natick, MA, US"
		},
		{
			"position" : "Graphics Quality Engineer Intern",
			"employer" : "MathWorks",
			"years" : "2014",
			"city" : "Natick, MA, US"
		}		
	]
};

var projects = {
	"projects" : [
		{

		}
	]
};

var bio = {
	"name" : name,
	"role" : role,
	"contacts" : 
	{
		"mobile" : "401.743.6996",
		"email" : "blasbalgs@gmail.com",
		"github" : "samanthablasbalg"
	}
	"pictureURL" : "images/me.jpg",
	"welcomeMessage" : "ALLOOO",
	"skills" : ["being awesome","testing things","finding bugs"]
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
	]
};

// $("#main").append(bio.name);
// $("#main").append(bio.role);
// $("#main").append(bio.contactInfo);
// $("#main").append(bio.pictureURL);
// $("#main").append(bio.welcomeMessage);
// $("#main").append(bio.skills);
// $("#main").append(work["position"]);
// $("#main").append(education.schools[1].name);
