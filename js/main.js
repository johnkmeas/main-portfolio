(function(){
	var bio = {
	name : 'John Meas',
	role : 'Front End Web Developer',
	splashImg : 'img/ninja-desktop2.jpg',
	mobileSplashImg : 'img/mobile-splash-min.jpg',
	skillsImg : 'img/Untitled-1.png',
	aboutImg : 'img/about.png',
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
		[	'img/images/images/portfolio-thumbnail_01.jpg',
			'https://digitalstencilca.ipage.com/wordpress.haiku',
			'This is a wordpress website that I\'ve create from scratch. It\'s still under construction and is filled with mostly dummy text at the moment. I hope to use it to find freelance design and development work in the future. All icon illustrations are original.',
			'HTML | CSS/SASS | PHP | Javascript',
			'Materialize | jQuery | Wordpress',
			'Photoshop | Illustrator | Gulp',
			'https://github.com/johnkmeas/wp-haiku/tree/master/wp-content/themes/learning',
			'Wordpress Theme Development | Responsive Design | Illustration',
			'wordpress site'
			],
		[	'img/images/images/portfolio-thumbnail_02.jpg',
			'https://johnkmeas.github.io',
			'This is a single page scrolling site I created to display some of the student projects I completed while studying with Udacity. The fun part was creating a parallax effect with an image of myself attempting to pull a tree out from the earth... fortunately I failed.',
			'HTML | CSS | Javascript',
			'Bootstrap | jQuery',
			'Photoshop | Grunt',
			'https://github.com/johnkmeas/johnkmeas.github.io',
			'Single Page Portfolio Site | Responsive Design | Parallax',
			'portfolio site'
			],
		[	'img/images/images/portfolio-thumbnail_03.jpg',
			'https://johnkmeas.github.io/neighborhoodmap',
			'I built this simple application to help me decide on places to walk my dog. It has animated drop-down marks on a Google Map with popup windows that display location information, along with the name of the nearest coffee shop retrieved from the Foursquare API. I used KnockoutJS to instantly update the front-end whenever the data model changes.',
			'HTML | CSS | Javascript',
			'Bootstrap | jQuery | Knockout',
			'Grunt',
			'https://github.com/johnkmeas/neighborhoodmap/tree/gh-pages',
			'Web Application | Data-Binding | RESTful API',
			'map application site'
			],
		[	'img/images/images/portfolio-thumbnail_04.jpg',
			'https://johnkmeas.github.io/main-portfolio/',
			'I built this single page site with no CSS frameworks. The majority of the content is dynamically added to the DOM using jQuery. It incorporates some original illustrations to represent my personality. I thought it would be fun to use part of a nintendo controller for the menu icon because it resembles the familiar hamburger icon.',
			'HTML | CSS/SASS | Javascript',
			'jQuery',
			'Photoshop | Illustrator | Gulp',
			'https://github.com/johnkmeas/main-portfolio/tree/gh-pages',
			'Single Page Scrolling Site | Responsive Design | Illustration',
			'single page scrolling site'
		]
	],
	skills : [
		'HTML, CSS/SASS, Javascript, PHP',
		'Liquid, Bootstrap, jQuery',
		'Wordpress | Shopify', 
		'Photoshop | Illustrator',
		'Responsive Design'
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
	nav = ['portfolio', 'skills', 'about', 'contact'],
	contactContainer = '<div class="contact-container"><ul class="contact-list"></ul></div>',
	contactFormatted = '<li><a href="%data%">%data2%</a></li>',
	contactEmail = '<li><a href="MAILTO:%data%">%data2%</a></li>',
	listItem = '<li>%data%</li>',
	link = '<li><a class="page-scroll" href="#%data%">%data2%</a></li>',
	skillsContainer = '<div id="skills-container">%data%</div>',
	skillsList  = '<ul class="skills-list"></ul>',
	portfolioContainer = '<div class="portfolio-container"></div>',
	portfolioBundle = '<div id="icon-bundle" class="dropdown"><div class="dropdown-content"><div class="portfolio-description"><h3>%data7%</h3><div class="portfolio-meta"><p>%data4%</p><p>%data5%</p><p>%data6%</p></div><div class="portfolio-btn"><a href="%data%">Demo</a><a href="%data8%" class="github-link">Github</a></div></div></div><div class="dropbtn img-linked"><img src="%data2%" class="portfolio-icon" alt="thumbnail image of %data9%"/></div></div>',
	logo = '<img class="logo-image animate-logo" src="%data%" alt="logo image" />',
	shirtImage = '<img src="%data%"" alt="shirt with shopify logo" class="shirt-image"/>',
	splashImage = '<img class="animate-splash" src="" data-mobile="%data%" data-desktop="%data2%" alt="main background image"/>',
	aboutImage = '<img src="%data%" class="about-image" alt="nintendo controller with shopify logo"/>',
	responsiveImg = '<img class="footer-background" src="" data-mobile="%data%" data-desktop="%data2%" alt="footer background image"/>',
	insertPortfolio = {};

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

	// place my name in the header and footer
	bio.display = function() {
		$('.brand > h1').append(bio.role);
		$('footer p').prepend(bio.name);
	};

	bio.display();

	// Loads all main images
	var ImageDisplay = function(){
		var logoInit = logo.replace('%data%', bio.logo);
		$('.logo').append(logoInit);
		var splashInit = splashImage.replace('%data%', bio.mobileSplashImg).replace('%data2%', bio.splashImg);
		$('.splash-img').append(splashInit);
		var aboutInit = aboutImage.replace('%data%', bio.aboutImg);
		$('.about-container').append(aboutInit);
		var footerInit = responsiveImg.replace('%data%', bio.footerMobile).replace('%data2%', bio.footerDesktop);
		$('.footer-image').append(footerInit);
	};

	ImageDisplay();

	// constructor function I use to create portfolio content
	function Portfolio(title, img, alt, info, lang, frame, tools, weblink, git ) {
		this.title = title;
		this.img = img;
		this.alt = alt;
		this.info = info;
		this.lang = lang;
		this.frameworks = frame;
		this.tools = tools;
		this.weblink = weblink;
		this.git = git;
		insertPortfolio = portfolioBundle.replace('%data7%', title).replace('%data%', git)
			.replace('%data2%', img).replace('%data3%', info).replace('%data4%', lang)
			.replace('%data5%', frame).replace('%data6%', tools).replace('%data7%', git)
			.replace('%data8%', weblink).replace('%data9%', alt);
			return $('.portfolio-container').append(insertPortfolio);
		console.log(insertPortfolio)
	}

	// method loops through the portfolio array that's attached to the bio object
	// and creates a new instance of the Portfolio Object  
	bio.portfolio.init = function() {
		$('#portfolio').append(portfolioContainer);
		var portfolioSection;
		for(var i = 0; i < bio.portfolio.length; i++){
			portfolioSection = new Portfolio(bio.portfolio[i][7], bio.portfolio[i][0], bio.portfolio[i][8], bio.portfolio[i][2],
			bio.portfolio[i][3], bio.portfolio[i][4], bio.portfolio[i][5], bio.portfolio[i][6], bio.portfolio[i][1]);
		}
	};

	bio.portfolio.init();

	// Constructor function takes a single argument that's is used to replace the %data% string
	// inside of a formatted <li> string and appends it to the skills list
	function Skills(skill){
		this.skill = skill;
		skillInit = listItem.replace('%data%', skill);
		return $('.skills-list').append(skillInit).append('<br>');
		//console.log(skillInit);
	}

	bio.skills.display = function() {
		var skillsDone = skillsContainer.replace('%data%', skillsList),
	
		skilledIt, skillInit;
		$('#skills').append(skillsDone);
		for(var i = 0; i < bio.skills.length; i++){
			skilledIt = new Skills(bio.skills[i]);
		}

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

	//bind nav link to a click event to scroll to section
  	$('a.page-scroll').bind('click', function(event) {
     	var $anchor = $(this);
      	$('html, body').stop().animate({
        	scrollTop: $($anchor.attr('href')).offset().top
      	}, 1000, 'easeInOutExpo');
      	event.preventDefault();

  	});

  	//close nav list when linkn is clicked
  	$('ul.nav-list li a.page-scroll').bind('click', function(event) {
  		$( '#toggle' ).trigger( 'click' );
  	});  	

  	// hides the menu close button on initialize
    //$('i.menu-close').toggle('show');

    // swaps menu icons between open and close version when clicked
    $('#toggle').click(function() {
  		$('i.menu-open').toggle('show');
  		$('i.menu-close').toggle('show').toggleClass('rotate');
  		$('.nav-list').toggleClass('nav-colored');
	});

    //If side nav is open, the call to action button will trigger it to close when clicked
	$('a.page-scroll button').bind('click', function(event) {
		if( $("i.menu-close").hasClass('rotate')) {
			$( '#toggle' ).trigger( 'click' );
		}
  	});

    //determines the img src for mobile and desktop
    var device = $(window).innerWidth() > 480 ? 'desktop' : 'mobile';
    $('img').each(function() {
        $(this).attr('src', $(this).data(device));
    });

    // 2/5th of window width to be used in dialog method
 	var dWidth = $(window).width() * 0.8;

 	// jqeury modal window 
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

    // opens dialog when id is clicked
    $( "#opener" ).click(function() {
      $( "#dialog" ).dialog( "open" );
    });

console.log(bio);
})();