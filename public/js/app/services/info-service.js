app.service('SiteInfo', ['$rootScope', function($rootScope) {
	var self = this;

	this.skills = [
		{ name: "Javascript", width: "100%" },
		{ name: "Angular.js", width: "100%" },
		{ name: "React.js", width: "90%" },
		{ name: "Redux", width: "90%" },
		{ name: "Node.js", width: "85%" },
		{ name: "Ruby on Rails", width: "80%" },
		{ name: "iOS", width: "80%"  },
		{ name: "Amazon Web Services/Google Cloud", width: "75%" },
		{ name: "Java", width: "70%" },
		{ name: "C++", width: "65%" },
		{ name: "C", width: "60%" }
	];

	this.projects = [
		{ 
			name: "Digital Artists Collective", 
			tags: "Amazon Web Services, Ruby on Rails, Angular.js", 
			imgPath: "img/dac-pic.png",
			urlExtension: "digital-artists-collective",
			description: "Three friends and I began tossing around ideas for this project last October. " +
			"Due to a busy senior year, however, I had to delay the start of development until June. Since " +
			"I began, I have been spending the majority of my free time designing and coding this application.<br/><br/> " +
			"This has been a hefty project, and has allowed me to learn some cool thing in the process of " + 
			"tackling some interesting challenges. I've learned how to use a few of the core Amazon Web " +
			"Services, including EC2, S3, RDS, and Route53, and how to set up a development environment in " +
			"cloud using these tools. I've also learned how to serve single page Javascript applications" +
			"properly, including how to correctly handle user authentication and authorizations when using a " +
			"Rails back-end. <br/><br/> This project has also gotten me plenty more practice building RESTful API's using " +
			"Rails, and building modular front-end code with my favorite front-end framework Angular.js."
		},
		{ 
			name: "Spinsetter", 
			tags: "Javascript (Angular.js, Node.js), HTML5, CSS3", 
			imgPath: "img/spin-pic.png",
			urlExtension: "spinsetter",
			description: "I was attending a football game in the fall when I ran into an alumni friend of " +
			"mine. We started talking music, and next thing I know he was pitching me the idea for his " +
			"startup, and we ended up missing the whole first half of the game talking about the idea! " +
			"A couple months later I came on as lead front-end developer, working closely with one back-end " +
			"developer who was also the technical lead on the project. <br/><br/> Seeing as this project was about " +
			"my other love, music, I was excited to face some of the challenges ahead of me. As one of the main " +
			"features we hoped to implement in the website was continuously playing music across pages (à la " +
			"<a href=\"https://soundcloud.com\" target=\"_blank\">Soundcloud</a>), the application needed to be " +
			"AJAX based. We chose to use Angular.js as our front-end Javascript framework for a few reasons: its " +
			"extensibility, data-binding capabilities, and more object-oriented way of dealing with DOM manipulation. " +
			"<br/><br/> This project was the first time I really got my hands dirty with Angular, and quickly fell " +
			"in love. While quite a big change from the traditional coding style of jQuery, it made organizing the " +
			"front-end of a web application a breeze, and the resulting code much more readable and maintainable. " +
			"I knew I was going using this exceptional framework in future projects."
		},
		{ 
			name: "NutriGroup", 
			tags: "Javascript (Angular.js, Node.js), SQL, HTML5, CSS3", 
			imgPath: "img/nutrigroup-pic.png",
			urlExtension: "nutrigroup",
			description: "NutriGroup is the application that myself and four of my classmates and myself chose " +
			"to work on for our Capstone project in order to earn our degrees. When I initially met the group, " +
			"the team had a database designer/administrator, an iOS developer, an Android developer, and an " +
			"analytics engineer. With my extensive front-end experience I was a perfect fit for the team, and " +
			"since I was fresh of working on a couple of small Node.js projects, I offered to set up the Node " +
			"server, routing, and any modules we needed, and to maintain a pristine development environment over " +
			"the course of the project.<br/><br> This project was the first time I really worked closely with a " +
			"database expert, and was amazed as to how much I learned about proper relational database design. " +
			"Setting up the Node backend for this project forced me to tackle some new challeneges in Node, " +
			"such as how to properly implement user authentication and authorization, and how to properly serve " +
			"a RESTful API using a Node back-end. Additionally, with a solid amount of Angular.js experience " +
			"under my belt, I was able to delve deeper into Angular's feature set; one feature in particular I mastered in this project was " +
			"Angular's resource service, which is basically a wrapper for easy communication with a RESTful " +
			"API.<br/><br/> All around this project was a great experience. My teammates were awesome; I learned " +
			"more from them than I ever could have imagined (hopefully I taught them something too). The project scope " +
			"was one of the largest I had faced up to that point, and after only ten weeks we successfully finished  " +
			"a smart, secure application integrated across three platforms."
		},
		{ 
			name: "Instrumental", 
			tags: "Javascript (jQuery, Node.js), Socket.io, HTML5, CSS3", 
			imgPath: "img/instrumental-pic.png",
			urlExtension: "instrumental",
			description: "Instrumental was one of the earlier projects I did that involved Node.js. My team was made up of myself " +
			"and two designers, so I was anointed technical lead. The project was originally supposed to be an app that would " +
			"allow fans to participate in the on-screen visualizations at live music performances, and while it could still be used " +
			"for that purpose, it ended up (due to time constraints) mostly being a cool little app for a few people at a time " +
			"to play around with at an event with a bit more relaxed environment. Users can connect to a master visualizer, and " +
			"when they connect an object appears on screen that they are in charge of controlling.<br/><br/>We decided to use " +
			"Node.js as our backend, and since our application was based around real-time communication, we decided to implement " +
			"Socket.io in order to use websockets as our main method of communication between the server and the clients. It was " +
			"a relatively simple app, but provided me with solid experience setting up a Node.js webserver and how to structure " +
			"communication using Socket.io.<br/><br/>When we finally tested our application with a large group, we learned an " +
			"important lesson as to why distrubted computing is important--after about eight people connected to our application, " +
			"CPU usage on the host computer was exceeding 90%! I look back on this project fondly as it showed me first hand " +
			"why distributed computing is necessary to make fast, scalable web applications, inspired me to start learning how to design " +
			"and architect these systems."
		},
		{
			name: "Futuregift",
			tags: "Javascript (Angular, jQuery, Node.js (loopback.io), HTML5, CSS3",
			imgPath: "",
			urlExtension: "futuregift",
			description: ""
		}
	];

	//getters
	this.getProjectByUrlExtension = function(extension) {
		for (var i = 0; i < self.projects.length; i++) {
			if (self.projects[i].urlExtension === extension) return self.projects[i];
		}
		return null;
	};

}]);