(function(){

	var bio = {
	name : 'John Meas',
	role : 'Front End Web Developer',
	contacts : {
		mobile : '604.831.5646',
		email : 'johnkmeas@gmail.com',
		linkedin : 'https://ca.linkedin.com/in/john-meas-878740106',
		github : 'https://github.com/johnkmeas',
		location : 'Surrey BC, Canada'
		},
	portfolio : [
		'udacity1',
		'udacity2',
		'udacity3',
		'udacity4',
		'Digital Stencil'
	],
	skills : [
		'HTML',
		'CSS',
		'Bootstrap',
		'Javascript',
		'jQuery',
		'KnockoutJS',
		'NodeJS',
		'Grunt',	
		'Object Oriented Programming',
		'web optimization',
		'MVC pattern',
		'testing',
		'Photoshop',
		'Illustrator'
	],
	summary : 'Junior Web Developer specializing in front end development. Experience with responsive design, website optimization, object oriented programming, MVC/MV* design pattern, client-side scripting and test-driven developement.'+
	'Well versed in HTML5, CSS3, Javascript, jQuery, Photoshop and Illustrator.',
	interest : ['Musical instruments',
		'Music software and technology',
		'Martial Arts',
		'Handlettering',
		'Design'
		]	
	}

	var contactFormatted = '<p>%data%</p>';
	var unorderList = '<ul class="nav-list"></ul>';
	var listItem = '<li>%data%</li>';
	var link = '<li><a href="#%data%">%data2%</a></li>';
	var skillsList  = '<ul class="skills-list"></ul>';
	var portfolioIcon = '<div><a href="%data%"><img src="img/%data2%" alt=""></a></div>';

	var nav = [ 'home', 'portfolio', 'skills', 'about', 'contact'];
	var section = '<section id="%data%"></section>';


	nav.list = function() {
		$('.navbar').append(unorderList); 
		for(var i = 0; i < nav.length; i++){
			var navItem = nav[i];
			var insertNav = link.replace('%data%', navItem).replace('%data2%', navItem);
			$('.nav-list').append(insertNav);
		}
	}
	nav.list();

	function sections() {
		for(var i = 0; i < nav.length; i++) {
			var sectionID = nav[i];
			var sectionMake = section.replace('%data%', sectionID);
			$('.container').append(sectionMake);
		}
	}
	sections();

 	bio.contacts.display = function() {
			var contactNum = contactFormatted.replace('%data%', bio.contacts.mobile);
			$('#contact').append(contactNum);
			var contactEmail = contactFormatted.replace('%data%', bio.contacts.email);
			$('#contact').append(contactEmail);
			var contactLinkedin = contactFormatted.replace('%data%', bio.contacts.Linkedin);
			$('#contact').append(contactLinkedin);
			var contactgit = contactFormatted.replace('%data%', bio.contacts.github);
			$('#contact').append(contactgit);
			var contactloc = contactFormatted.replace('%data%', bio.contacts.location);
			$('#contact').append(contactloc);
		
	}
	bio.contacts.display();

	bio.display = function() {
		console.log(bio.name)
		$("#about").append(bio.name).append(bio.role);
	}
	bio.display();

	bio.skills.display = function() {
		$('#skills').append(skillsList);
		for(var i = 0; i < bio.skills.length; i++){
			var skill = bio.skills[i];
			var skillInit = listItem.replace("%data%",skill);
			
			$(".skills-list").append(skillInit)
		}
		console.log(bio.skills[0]);
	}
	bio.skills.display();

	bio.portfolio.Init = function() {
		for(var i = 0; i < bio.portfolio.length; i++){
			var portfolioPiece = bio.portfolio[i];
			var Icon = portfolioIcon.replace("%data%", portfolioPiece).replace("%data2%", portfolioPiece);
			$("#portfolio").append(Icon);
			console.log(bio.portfolio[i]);
		}
		
	}

	bio.portfolio.Init();
})();