var bio = {
  "name" : "The Narrator",
  "role" :"Web Developer",
  "contacts": {
    "mobile": "+966-xxxx-xxxx",
    "email": "___@gmail.com",
    "github": "nrator",
    "location": "Saudi Arabia"
  },
  "biopic" : "images/fry.jpg",
  "welcomeMessage" : "Welcome!",
  "skills" : [
    "html", "css", "js", "php"
  ]
};

var work = {
  "jobs": [
    {
      "employer": "XXX Company",
      "title": "Assistant Engineer",
      "location": "Saudi Arabia",
      "dates": "2015-2016",
      "description": "Analyzes and coordinates project in accordance with client’s specification and contract requirement."
    },{
      "employer": "YYY Company",
      "title": "Intern",
      "location": "UK",
      "dates": "2014",
      "description": "Be an intern."
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "Percolation",
      "dates": "2016",
      "description": "A program to study the probability that a system percolates if its sites are independently set to be open with probability p.",
      "image": "images/percolation.png"
    },
    {
      "title": "Pattern Recognition",
      "dates": "2016",
      "description": "An program to find every line segment that connects a subset of 4 or more points within a given set of n distinct points in the plane.",
      "image": "images/pattern.png"
    }
  ]
};

var education = {
  "schools": [
    {
      "name": "The Youtube University",
      "location": "USA",
      "degree": "BBA",
      "dates": "2011-2015",
      "url": "https://www.youtube.com/",
      "majors" : [
        "Computer Science", "Marketing"
      ]
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "dates": "2016-",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "title": "CS50",
      "school": "edX",
      "dates": "2016",
      "url": "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x"
    }
  ]
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").prepend(formattedbioPic);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedlocation= HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedmobile);
  $("#topContacts").append(formattedemail);
  $("#topContacts").append(formattedgithub);
  $("#topContacts").append(formattedlocation);
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (i = 0; i < bio.skills.length; i++) {
      var formattedskills = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedskills);
    }
  }
}
bio.display();

work.display = function() {
  for (var i = 0; i < work.jobs.length; i++) {
    $("#workExperience").append(HTMLworkStart);
    var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    var formattedworkEmployerTitle = formattedworkEmployer.concat(formattedworkTitle);
    var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
    var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    $(".work-entry:last").append(formattedworkEmployerTitle);
    $(".work-entry:last").append(formattedworkDates);
    $(".work-entry:last").append(formattedworkLocation);
    $(".work-entry:last").append(formattedworkDescription);
  }
}
work.display();

projects.display= function() {
    for (var i = 0; i < projects.projects.length; i++) {
      $("#projects").append(HTMLprojectStart);
      var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
      var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
      var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
      var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[i].image);
      $(".project-entry:last").append(formattedprojectTitle);
      $(".project-entry:last").append(formattedprojectDates);
      $(".project-entry:last").append(formattedprojectDescription);
      $(".project-entry:last").append(formattedprojectImage);
    }
}
projects.display();

education.display= function() {
    for (var i = 0; i < education.schools.length; i++) {
      $("#education").append(HTMLschoolStart);
      var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
      formattedschoolName = formattedschoolName.replace("#", education.schools[i].url);
      var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      $(".education-entry:last").append(formattedschoolName);
      $(".education-entry:last").append(formattedschoolDegree);
      $(".education-entry:last").append(formattedschoolDates);
      $(".education-entry:last").append(formattedschoolLocation);
      for (var j = 0; j < education.schools[i].majors.length; j++) {
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
        $(".education-entry:last").append(formattedschoolMajor);
      }
    }
    $("#education").append(HTMLonlineClasses);
    for (var i = 0; i < education.onlineCourses.length; i++) {
      $("#education").append(HTMLschoolStart);
      var formattedonlineTitle = HTMLonlineTitle.replace("#", education.onlineCourses[i].url);
      formattedonlineTitle = formattedonlineTitle.replace("%data%", education.onlineCourses[i].title);
      var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
      var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
      var formattedonlineURL = HTMLonlineURL.replace("#", education.onlineCourses[i].url);
      formattedonlineURL = formattedonlineURL.replace("%data%", education.onlineCourses[i].url);
      $(".education-entry:last").append(formattedonlineTitle);
      $(".education-entry:last").append(formattedonlineSchool);
      $(".education-entry:last").append(formattedonlineDates);
      $(".education-entry:last").append(formattedonlineURL);
    }
}
education.display();


$("#main").append(internationalizeButton);

function inName(name) {
  var splitedName = name.trim().split(" ");
  splitedName[0] = splitedName[0][0].toUpperCase()+splitedName[0].slice(1).toLowerCase();
  splitedName[1] = splitedName[1].toUpperCase();
  return splitedName.join(" ");
}
$("#mapDiv").append(googleMap);
