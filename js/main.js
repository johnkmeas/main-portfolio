(function(){

	var bio = {
	name : 'John Meas',
	role : 'Front End Web Developer',
	splashImg : 'img/desktop2.jpg',
	logo : 'img/theme-specialist-logo-wht.png',
	contacts : {
		mobile : '604.831.5646',
		email : 'johnkmeas@gmail.com',
		linkedin : 'https://ca.linkedin.com/in/john-meas-878740106',
		github : 'https://github.com/johnkmeas',
		location : 'Surrey BC, Canada'
		},
	portfolio : [
		['wordpress-picture', 'https://www.sitepoint.com/community/t/what-is-a-gutter/8580', "I'm writing about porfolio1"],
		['portf', 'link1', "I'm writing about porfolio2"],
		['map', 'link', "I'm writing about porfolio3"],
		['desktop-icon', "link", "I'm writing about porfolio4"],
	],
	skills : [

		'Comfortable in HTML, CSS, Javascript',
		'Knowledge of jQuery, KnockoutJS', 
		'Comfortable using the terminal',
		'Some tools I like using is gulp and Sass',
		'Dabbled in Angular',
		'Currentely',
		'Object Oriented Programming',
		'web optimization',
		'MVC pattern',
		'SEO',
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

	var contactFormatted = '<a href="%data%"></a><p>%data2%</p>';
	var unorderList = '<ul class="nav-list"></ul>';
	var listItem = '<li>%data%</li>';
	var link = '<li><a class="page-scroll" href="#%data%">%data2%</a></li>';
	var skillsList  = '<ul class="skills-list"></ul>';
	var portfolioContainer = '<div class="portfolio-container"></div>'
	var portfolioBundle = '<div id="icon-bundle"><div class="img-linked"><a href="%data%"><img src="img/%data2%.jpg" class="portfolio-icon" alt=""/></a></div><div class="portfolio-description"><p>%data3%</p></div></div>';
	var logo = '<img src="%data%" alt="" />';
	var splashImage = '<img src="%data%" alt=""/>';
	var nav = ['about', 'portfolio', 'skills', 'contact'];
	


	nav.list = function() {
		$('.navbar').append(unorderList); 
		for(var i = 0; i < nav.length; i++){
			var navItem = nav[i];
			var insertNav = link.replace('%data%', navItem).replace('%data2%', navItem);
			$('.nav-list').append(insertNav);
		}
	}
	nav.list();



	bio.display = function() {
		console.log(bio.name)
		//$("#about").append(bio.name).append(bio.role);
	}
	bio.display();

	var ImageDisplay = function(){
		var logoInit = logo.replace('%data%', bio.logo);
		$('.logo').append(logoInit);
		console.log(logoInit);
		var splashInit = splashImage.replace('%data%', bio.splashImg);
		console.log(splashInit);
		$('.splash-img').append(splashInit);
		
	}
	ImageDisplay();

	bio.portfolio.Init = function() {
		$("#portfolio").append(portfolioContainer);
		for(var i = 0; i < bio.portfolio.length; i++){
			var portfolioPiece = bio.portfolio[i][0];
			var portfolioLink = bio.portfolio[i][1];
			var portfolioText = bio.portfolio[i][2];
			var Icon = portfolioBundle.replace("%data%", portfolioLink).replace("%data2%", portfolioPiece).replace("%data3%", portfolioText);

			$(".portfolio-container").append(Icon);
			console.log(bio.portfolio[i]);
		}
		
	}
	bio.portfolio.Init();

	bio.skills.display = function() {
		$('#skills').append(skillsList);
		for(var i = 0; i < bio.skills.length; i++){
			var skill = bio.skills[i];
			var skillInit = listItem.replace("%data%",skill);
			
			$(".skills-list").append(skillInit);
		}
		console.log(bio.skills[0]);
	}
	bio.skills.display();

 	bio.contacts.display = function() {
			var contactNum = contactFormatted.replace('%data%', bio.contacts.mobile).replace('%data2%', bio.contacts.mobile);
			$('#contact').append(contactNum);
			var contactEmail = contactFormatted.replace('%data%', bio.contacts.email).replace('%data2%', bio.contacts.email);
			$('#contact').append(contactEmail);
			var contactLinkedin = contactFormatted.replace('%data%', bio.contacts.linkedin).replace('%data2%', 'Linkedin');
			$('#contact').append(contactLinkedin);
			var contactgit = contactFormatted.replace('%data%', bio.contacts.github).replace('%data2%', 'Github');;
			$('#contact').append(contactgit);
			var contactloc = contactFormatted.replace('%data2%', bio.contacts.location);
			$('#contact').append(contactloc);
		
	}
	bio.contacts.display();


$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
  		$( "#toggle" ).trigger( "click" );        
    });
    $("#toggle").click(function() {
  		$(".menu-open").toggle( "blind" );
  		$("img.menu-close").toggleClass('rotated');
  		$(".nav-list").toggleClass('nav-colored');
	 
	});
  
});


})();