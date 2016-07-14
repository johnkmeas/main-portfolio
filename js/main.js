(function(){
	var bio = {
	name : 'John Meas',
	role : 'Front End Web Developer',
	splashImg : 'img/ninja-desktop.jpg',
	mobileSplashImg : 'img/mobile-splash-min.jpg',
	skillsImg : 'img/nes-name.svg',
	shirtImg : 'img/shirt.svg',
	logo : 'img/name-logo.svg',
	footerMobile : 'img/footer-img-min.jpg',
	footerDesktop : 'img/footer-desktop-min.jpg',
	contacts : {
		mobile : '604.831.5646',
		email : 'johnkmeas@gmail.com',
		linkedin : 'https://ca.linkedin.com/in/john-meas-878740106',
		github : 'https://github.com/johnkmeas',
		location : 'Surrey BC, Canada'
		},
	portfolio : [
		[	'img/digital-stencil-thumbnail-min.jpg',
			'https://digitalstencilca.ipage.com/wordpress.haiku',
			'This is a wordpress website that I\'ve create from scratch. It\'s still under construction and is filled with mostly dummy text at the moment. I hope to use it to find freelance design and development work in the future. All icon illustrations are original.',
			'HTML | CSS/SASS | PHP | Javascript',
			'Materialize | jQuery | Wordpress',
			'Photoshop | Illustrator | Gulp',
			'https://github.com/johnkmeas/wp-haiku',
			'Wordpress Theme Development | Responsive Design | Illustration',
			'wordpress site'
			],
		[	'img/portf-min.jpg',
			'https://johnkmeas.github.io',
			'This is a single page scrolling site I created to display some of the student projects I completed while studying with Udacity. The fun part was creating a parallax effect with an image of myself attempting to pull a tree out from the earth... fortunately I failed.',
			'HTML | CSS | Javascript',
			'Bootstrap | jQuery',
			'Photoshop | Grunt',
			'https://github.com/johnkmeas/johnkmeas.github.io',
			'Single Page Portfolio Site | Responsive Design | Parallax',
			'portfolio site'
			],
		[	'img/map-min.jpg',
			'https://johnkmeas.github.io/neighborhoodmap',
			'I built this simple application to help me decide on places to walk my dog. It has animated drop-down marks on a Google Map with popup windows that display location information, along with the name of the nearest coffee shop retrieved from the Foursquare API. I used KnockoutJS to instantly update the front-end whenever the data model changes.',
			'HTML | CSS | Javascript',
			'Bootstrap | jQuery | Knockout',
			'Grunt',
			'https://github.com/johnkmeas/neighborhoodmap/tree/gh-pages',
			'Web Application | Data-Binding | RESTful API',
			'map application site'
			],
		[	'img/desktop-potf-min.jpg',
			'https://johnkmeas.github.io/shopify-impress',
			'I built this single page site with no CSS frameworks. The majority of the content is dynamically added to the DOM using jQuery. It incorporates some original illustrations to represent my personality. I thought it would be fun to use part of a nintendo controller for the menu icon because it resembles the familiar hamburger icon.',
			'HTML | CSS/SASS | Javascript',
			'jQuery',
			'Photoshop | Illustrator | Gulp',
			'https://github.com/johnkmeas/shopify-impress/tree/gh-pages',
			'Single Page Scrolling Site | Responsive Design | Illustration',
			'single page scrolling site'
		]
	],
	skills : [
		'Proficient with HTML, CSS/SASS, Javascript and jQuery',
		'Knowledge of CSS Frameworks like Bootstrap and Materialize',
		'Understanding of PHP - capable of modifying Wordpress themes or building from scratch',
		'Familiar with TDD using jasmine.js',
		'Comfortable in the terminal using Git',
		'Familiar with automated workflow using Gulp',
		'Dabbled in Python, Chuck(music programming) and p5js',
		'Experienced with FTP and Website migration',
		'Knowledge of SEO and Website Optimization',
		'Experience with Responsive Design',
		'Experience with Facebook ad campaigns',
		'Possess fine art skills such as drawing, printmaking and colour theory',
		'Familiar with traditional animation techniques',
		'Long time guitar player and enthusiast',
		'Experience with Adobe Photoshop, Illustrator and Ableton',
		'Experience with video production'
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
	contactContainer = '<div class="contact-container"><ul class="contact-list"></ul></div>',
	contactFormatted = '<li><a href="%data%">%data2%</a></li>',
	contactEmail = '<li><a href="MAILTO:%data%">%data2%</a></li>',
	listItem = '<li>%data%</li>',
	link = '<li><a class="page-scroll" href="#%data%">%data2%</a></li>',
	skillsContainer = '<div id="skills-container">%data%</div>',
	skillsList  = '<ul class="skills-list"></ul>',
	portfolioContainer = '<div class="portfolio-container"></div>',
	portfolioBundle = '<div id="icon-bundle"><div class="img-linked"><a href="%data%"><img src="%data2%" class="portfolio-icon" alt="thumbnail image of %data9%"/></a></div><div class="portfolio-description"><h3>%data7%</h3><p>%data3%</p><a href="%data7%" class="demo-link">DEMO</a>  |  <a href="%data8%" class="github-link">GITHUB</a><div class="portfolio-meta"><p>Languages:  %data4%</p><p>Frameworks/Libraries:  %data5%</p><p>Tools:  %data6%</p></div></div></div>',
	logo = '<img class="logo-image animate-logo" src="%data%" alt="logo image" />',
	shirtImage = '<img src="%data%"" alt="shirt with shopify logo" class="shirt-image"/>',
	splashImage = '<img class="animate-splash" src="" data-mobile="%data%" data-desktop="%data2%" alt="main background image"/>',
	skillsImage = '<img src="%data%" class="skills-image" alt="nintendo controller with shopify logo"/>',
	responsiveImg = '<img class="footer-background" src="" data-mobile="%data%" data-desktop="%data2%" alt="footer background image"/>';

	nav.list = function() {
		var navItem, insertNav;
		//$('.navbar').append(unorderList);
		for(var i = 0; i < nav.length; i++){
			navItem = nav[i];
			insertNav = link.replace('%data%', navItem).replace('%data2%', navItem);
			$('.nav-list').append(insertNav);
		}
	};

	nav.list();

	bio.display = function() {
		$('h1').append(bio.name);
		$('footer p').prepend(bio.name);
	};

	bio.display();

	var ImageDisplay = function(){
		var logoInit = logo.replace('%data%', bio.logo);
		$('.logo').append(logoInit);
		var splashInit = splashImage.replace('%data%', bio.mobileSplashImg).replace('%data2%', bio.splashImg);
		$('.splash-img').append(splashInit);
		var shirtInit = shirtImage.replace('%data%', bio.shirtImg);
		$('.about-container').append(shirtInit);
		var footerInit = responsiveImg.replace('%data%', bio.footerMobile).replace('%data2%', bio.footerDesktop);
		$('.footer-image').append(footerInit);
	};

	ImageDisplay();

	bio.portfolio.Init = function() {
		$('#portfolio').append(portfolioContainer);
		var portfolioTitle, portfolioPiece, portfolioLink, portfolioText,
		metaLang, metaFrame, metaTool, portfolioGit, portfolioAlt, iconPort;
		for(var i = 0; i < bio.portfolio.length; i++){
			portfolioPiece = bio.portfolio[i][0];
			portfolioLink = bio.portfolio[i][1];
			portfolioText = bio.portfolio[i][2];
			metaLang = bio.portfolio[i][3];
			metaFrame = bio.portfolio[i][4];
			metaTool = bio.portfolio[i][5];
			portfolioGit = bio.portfolio[i][6];
			portfolioTitle = bio.portfolio[i][7];
			portfolioAlt = bio.portfolio[i][8];
			iconPort = portfolioBundle.replace('%data7%', portfolioTitle).replace('%data%', portfolioLink).replace('%data2%', portfolioPiece)
			.replace('%data3%', portfolioText).replace('%data4%', metaLang).replace('%data5%', metaFrame)
			.replace('%data6%', metaTool).replace('%data7%', portfolioLink).replace('%data8%', portfolioGit).replace('%data9%', portfolioAlt);
			$('.portfolio-container').append(iconPort);
		}
	};

	bio.portfolio.Init();

	bio.skills.display = function() {
		var skillsDone = skillsContainer.replace('%data%', skillsList),
		skillsImageInit = skillsImage.replace('%data%', bio.skillsImg ),
		skill, skillInit;
		$('#skills').append(skillsDone);
		for(var i = 0; i < bio.skills.length; i++){
			skill = bio.skills[i];
			skillInit = listItem.replace('%data%', skill);
			$('.skills-list').append(skillInit);
		}
		$('#skills-container').prepend(skillsImageInit);
		console.log(bio.skills[0]);
	};

	bio.skills.display();

 	bio.contacts.display = function() {
 		var contactImgInit = contactContainer.replace('%data%', bio.contactImg);
 		$('#contact').append(contactImgInit);
		//var contactNum = contactFormatted.replace('%data%', bio.contacts.mobile).replace('%data2%', bio.contacts.mobile);
		var contactEmailInit = contactEmail.replace('%data%', bio.contacts.email).replace('%data2%', 'Email');
		var contactLinkedin = contactFormatted.replace('%data%', bio.contacts.linkedin).replace('%data2%', 'Linkedin');
		var contactgit = contactFormatted.replace('%data%', bio.contacts.github).replace('%data2%', 'Github');
		$('.contact-list').append(contactEmailInit)
		.append(contactLinkedin).append(contactgit);
	};

	bio.contacts.display();

  	$('a.page-scroll').bind('click', function(event) {
     	var $anchor = $(this);
      	$('html, body').stop().animate({
        	scrollTop: $($anchor.attr('href')).offset().top
      	}, 1000, 'easeInOutExpo');
      	event.preventDefault();
  		$( '#toggle' ).trigger( 'click' );
  	});

    $('img.menu-close').toggle('show');
    $('#toggle').click(function() {
  		$('.menu-open').toggle('scale');
  		$('img.menu-close').toggle('show').toggleClass('rotated');
  		$('.nav-list').toggleClass('nav-colored');
	});

    var device = $(window).innerWidth() > 480 ? 'desktop' : 'mobile';
    $('img').each(function() {
        $(this).attr('src', $(this).data(device));
    });

 	var dWidth = $(window).width() * 0.8;
    $( "#dialog" ).dialog({
	    autoOpen: false,
	    modal: true,
	    width: dWidth,
	    show: {
	    	effect: "fold",
	        duration: 1000
	    	},
	     hide: {
	        effect: "blind",
	        duration: 1000
	     }
    });

    $( "#opener" ).click(function() {
      $( "#dialog" ).dialog( "open" );
    });


})();