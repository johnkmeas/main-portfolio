(function(){
	var bio = {
	name : 'John Meas',
	role : 'Front End Web Developer',
	splashImg : 'img/desktop.jpg',
	mobileSplashImg : 'img/images/mobile-splash.jpg',
	skillsImg : 'img/nes-shopify.png',
	shirtImg : 'img/images/tshirt.svg',
	logo : 'img/images/shopify-guru.svg',
	footerMobile : 'img/images/footer-img.jpg',
	footerDesktop : 'img/footer-desktop.jpg',
	contacts : {
		mobile : '604.831.5646',
		email : 'johnkmeas@gmail.com',
		linkedin : 'https://ca.linkedin.com/in/john-meas-878740106',
		github : 'https://github.com/johnkmeas',
		location : 'Surrey BC, Canada'
		},
	portfolio : [
		[	'img/wordpress-picture.jpg',
			'https://digitalstencilca.ipage.com/wordpress.haiku',
			'This is a wordpress website that\'s still in development I coded from scratch. I intend use it to obtain freelance design and development work in the future. All icon illustrations are original.',
			'HTML | CSS/SASS | PHP | Javascript',
			'MaterializeCSS | jQuery',
			'Photoshop | Illustrator | Gulp',
			'https://github.com/johnkmeas/wp-haiku',
			'Wordpress Theme Development | Responsive Design | Illustration'
			],
		[	'img/portf.jpg',
			'https://johnkmeas.github.io',
			'This is a single page scrolling site I created to display some of the student projects I completed while studying with Udacity. The fun part was creating the parallax splash image of myself hanging from a tree.',
			'HTML | CSS | Javascript',
			'Bootstrap | jQuery',
			'Photoshop | Grunt',
			'https://github.com/johnkmeas/johnkmeas.github.io',
			'Single Page Portfolios Site | Responsive Design | Parallax'
			],
		[	'img/map.jpg',
			'https://johnkmeas.github.io/neighborhoodmap',
			'I Built this simple application to help me decide on places to walk my dog. It has animated drop down marks on a google map and popup windows to display location information along with the nearest coffee shop. I used KnockoutJS to instantly update the frontend when the data model changed based on the users search input.',
			'HTML | CSS | Javascript',
			'Bootstrap | jQuery',
			'Grunt',
			'https://github.com/johnkmeas/neighborhoodmap',
			'Web Application | Data-Binding | RESTful Api'
			],
		[	'img/desktop-potf.jpg',
			'https://johnkmeas.github.io/shopify-impress',
			'I built this single page site with no CSS frameworks. The majority of the content is dynamically added to the DOM using jQuery. It incorporates some original illustrations to represent my personality. I thought it would be fun to use part of a nintendo controller for the menu icon because it resembled the familiar hamburger icon.',
			'HTML | CSS/SASS | Javascript',
			'jQuery',
			'Photoshop | Illustrator | Gulp',
			'https://digitalstencilca.ipage.com/theme.specialist/',
			'Single Page Scrolling Site | Responsive Design | Illustration'
		]
	],
	skills : [

		'Proficient with HTML, CSS/SASS, Javascript and jQuery.',
		'Experience with CSS Frameworks like Bootstrap, Materialize and Timber',
		'Understanding of PHP and capable of modifying wordpress themes or building from scratch.',
		'Comfortable in the terminal using git',
		'Automated workflow with Gulp',
		'Familiar with AngularJS, Ruby and the liquid template language',
		'Dabbled in Python, Chuck(music programming) and p5js',
		'Experienced with FTP and website migration',
		'Knowledge of SEO and Website Optimization',
		'Responsive Design and illustration skills',
		'Experience with facebook ad campaigns',
		'Basic Counselling training',
		'Bonus: Adobe Photoshop, Illustrator and Ableton'
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
	portfolioBundle = '<div id="icon-bundle"><div class="img-linked"><a href="%data%"><img src="%data2%" class="portfolio-icon" alt=""/></a></div><div class="portfolio-description"><h3>%data7%</h3><p>%data3%</p><a href="%data7%" class="demo-link">DEMO</a>  |  <a href="%data8%" class="github-link">GITHUB</a><div class="portfolio-meta"><p>Languages:  %data4%</p><p>Frameworks/Libraries:  %data5%</p><p>Tools:  %data6%</p></div></div></div>',
	logo = '<img class="logo-image animate-logo" src="%data%" alt="" />',
	shirtImage = '<img src="%data%"" alt="" class="shirt-image"/>',
	splashImage = '<img src="" data-mobile="%data%" data-desktop="%data2%"/>',
	skillsImage = '<img src="%data%" class="skills-image" alt="skills-image"/>',
	responsiveImg = '<img class="footer-background" src="" data-mobile="%data%" data-desktop="%data2%"/>';

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
		var portfolioTitle, portfolioPiece, portfolioLink, portfolioText, metaLang, metaFrame, metaTool, portfolioGit, iconPort;
		for(var i = 0; i < bio.portfolio.length; i++){
			portfolioPiece = bio.portfolio[i][0];
			portfolioLink = bio.portfolio[i][1];
			portfolioText = bio.portfolio[i][2];
			metaLang = bio.portfolio[i][3];
			metaFrame = bio.portfolio[i][4];
			metaTool = bio.portfolio[i][5];
			portfolioGit = bio.portfolio[i][6];
			portfolioTitle = bio.portfolio[i][7];
			iconPort = portfolioBundle.replace('%data7%', portfolioTitle).replace('%data%', portfolioLink).replace('%data2%', portfolioPiece)
			.replace('%data3%', portfolioText).replace('%data4%', metaLang).replace('%data5%', metaFrame)
			.replace('%data6%', metaTool).replace('%data7%', portfolioLink).replace('%data8%', portfolioGit);
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
  		$('.menu-open').toggle('blind');
  		$('img.menu-close').toggle('show').toggleClass('rotated');
  		$('.nav-list').toggleClass('nav-colored');
	});

    var device = $(window).innerWidth() > 480 ? 'desktop' : 'mobile';
    $('img').each(function() {
        $(this).attr('src', $(this).data(device));
    });

})();
