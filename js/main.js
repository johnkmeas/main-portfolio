(function(){

	var bio = {
	name : 'John Meas',
	role : 'Front End Web Developer',
	splashImg : 'img/desktop.jpg',
	mobileSplashImg : 'img/images/mobile-splash.jpg',
	skillsImg : 'img/nes-shopify.png',
	contactImg : 'img/images/tshirt.svg',
	logo : 'img/theme-specialist-logo-wht.png',
	contacts : {
		mobile : '604.831.5646',
		email : 'johnkmeas@gmail.com',
		linkedin : 'https://ca.linkedin.com/in/john-meas-878740106',
		github : 'https://github.com/johnkmeas',
		location : 'Surrey BC, Canada'
		},
	portfolio : [
		[	'wordpress-picture', 
			'https://www.sitepoint.com/community/t/what-is-a-gutter/8580', 
			"This is a wordpress website in development. Wordpress site from scratch. All original, content, design, illustration."
			],
		
		[	'portf', 
			'link1', 
			"Frontend single page portfolio website. "
			],
		[	'map', 
			'link', 
			"Simple application that filters locations of some favourite places to work. Integrates the Four Square API to show nearest coffee shop fo each location."
			]
	],
	skills : [

		"Proficient with HTML, CSS/SASS, Javascript and jQuery.",
		'Understanding of PHP, enough to build a Wordpress site from scratch.', 
		'Comfortable in the terminal and using Git',
		'Speeds things up with  Gulp',
		'Familiar with AngularJS, Ruby and the liquid template language',
		'Ftp and website migration',
		'Knowledge of SEO and Website Optimization',
		'Bonus: Adobe Photoshop and Illustrator'
	],
	summary : 'Junior Web Developer specializing in front end development. Experience with responsive design, website optimization, object oriented programming, MVC/MV* design pattern, client-side scripting and test-driven developement.'+
	'Well versed in HTML5, CSS3, Javascript, jQuery, Photoshop and Illustrator.',
	interest : ['Musical instruments',
		'Music software and technology',
		'Martial Arts',
		'Handlettering',
		'Design'
		]	
	},
	nav = ['about', 'portfolio', 'skills', 'contact'],
	contactContainer = '<div class="contact-container"><ul class="contact-list"></ul><img src="%data%" class="contact-image" alt=""/></div>',
	contactFormatted = '<li><a href="%data%">%data2%</a></li>',
	listItem = '<li>%data%</li>',
	link = '<li><a class="page-scroll" href="#%data%">%data2%</a></li>',
	skillsContainer = '<div id="skills-container">%data%</div>',
	skillsList  = '<ul class="skills-list"></ul>',
	portfolioContainer = '<div class="portfolio-container"></div>',
	portfolioBundle = '<div id="icon-bundle"><div class="img-linked"><a href="%data%"><img src="img/%data2%.jpg" class="portfolio-icon" alt=""/></a></div><div class="portfolio-description"><p>%data3%</p></div></div>',
	logo = '<img src="%data%" alt="" />',
	splashImage = '<img src="" data-mobile="%data%" data-desktop="%data2%"/>',
	skillsImage = "<img src='%data%' class='skills-image' alt='skills-image'/>";
	
	nav.list = function() {
		var navItem, insertNav;
		//$('.navbar').append(unorderList); 
		for(var i = 0; i < nav.length; i++){
			navItem = nav[i];
			insertNav = link.replace('%data%', navItem).replace('%data2%', navItem);
			$('.nav-list').append(insertNav);
		}
	}

	nav.list();

	bio.display = function() {
		console.log(bio.name);
		//$("#about").append(bio.name).append(bio.role);
	}

	bio.display();

	var ImageDisplay = function(){
		var logoInit = logo.replace('%data%', bio.logo);
		$('.logo').append(logoInit);
		var splashInit = splashImage.replace('%data%', bio.mobileSplashImg).replace("%data2%", bio.splashImg);
		$('.splash-img').append(splashInit);
	}

	ImageDisplay();

	bio.portfolio.Init = function() {
		$("#portfolio").append(portfolioContainer);
		var portfolioPiece, portfolioLink, portfolioText, Icon;
		for(var i = 0; i < bio.portfolio.length; i++){
			portfolioPiece = bio.portfolio[i][0];
			portfolioLink = bio.portfolio[i][1];
			portfolioText = bio.portfolio[i][2];
			Icon = portfolioBundle.replace("%data%", portfolioLink).replace("%data2%", portfolioPiece).replace("%data3%", portfolioText);
			$(".portfolio-container").append(Icon);
			console.log(bio.portfolio[i]);
		}
		
	}
	bio.portfolio.Init();

	bio.skills.display = function() {
		var skillsDone = skillsContainer.replace("%data%", skillsList),
		skillsImageInit = skillsImage.replace("%data%", bio.skillsImg ),
		skill, skillInit;
		$('#skills').append(skillsDone);
		for(var i = 0; i < bio.skills.length; i++){
			skill = bio.skills[i];
			skillInit = listItem.replace("%data%", skill);
			$(".skills-list").append(skillInit);
		}
		$('#skills-container').prepend(skillsImageInit);
		console.log(bio.skills[0]);
	}
	bio.skills.display();

 	bio.contacts.display = function() {
 		var contactImgInit = contactContainer.replace("%data%", bio.contactImg);
 		$('#contact').append(contactImgInit);
		//var contactNum = contactFormatted.replace('%data%', bio.contacts.mobile).replace('%data2%', bio.contacts.mobile);
		var contactEmail = contactFormatted.replace('%data%', bio.contacts.email).replace('%data2%', 'Email');
		var contactLinkedin = contactFormatted.replace('%data%', bio.contacts.linkedin).replace('%data2%', 'Linkedin');
		var contactgit = contactFormatted.replace('%data%', bio.contacts.github).replace('%data2%', 'Github');;			
		$('.contact-list').append(contactEmail)
		.append(contactLinkedin).append(contactgit);
	}

	bio.contacts.display();

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
  		$( "#toggle" ).trigger( "click" );        
    });
    $("img.menu-close").toggle( "show" );
    $("#toggle").click(function() {
  		$(".menu-open").toggle( "blind" );
  		$("img.menu-close").toggle( "show" ).toggleClass('rotated');
  		$(".nav-list").toggleClass('nav-colored');
	 
	});

    var device = $(window).innerWidth() > 480 ? "desktop" : "mobile";
    $("img").each(function() {
        $(this).attr("src", $(this).data(device));
    });
  



})();