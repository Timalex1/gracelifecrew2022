//	Testimonial Section Carousel
$(document).ready(function(){
	$("#testimonial-slider").owlCarousel({
		items:1,
		itemsDesktop:[1000,1],
		itemsDesktopSmall:[979,1],
		itemsTablet:[768,1],
		pagination:false,
		navigation:true,
		navigationText:["",""],
		autoPlay:true,
		autoplayHoverPause:true,
		autoplayTimeout:5000

	});
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

(function() {
	let fix = $('#p-name').innerText;
	console.log(fix);
	if (fix > 0){
			console.log(true);
		// $('#success-name').innerHTML += fix;
	}

	setTimeout(function () {
		$('#success').fadeOut();
	}, 5000)

    /* -------------------------------------
	 PRELOADER
	 -------------------------------------- */
	$("#status").delay(2000).fadeOut();
	$("#preloader").delay(2000).fadeOut("slow");
	/* ---------------------------------------
			STICKY HEADER
	--------------------------------------- */
	if($('#tg-header').length > 0){
		$(window).on('scroll', function(){
			if($(this).scrollTop() > 59){
				$('body').addClass('tg-fixedme');
			} else {
				$('body').removeClass('tg-fixedme');
			}
		});
	}

	$("#t-2").click(function () {
		console.log("hey there");
		$("#slick-nav-1").attr('hidden', 'hidden')
	})

	$("#t-1").click(function () {
		console.log("hey there");
		$("#slick-nav-1").removeAttr('hidden')
	})

	/* -------------------------------------
			SCROLL NAV
	-------------------------------------- */
	var body = $('body');
	if(body.hasClass('tg-home')){
		body.addClass("home");
		$(window).on('scroll', function() {
			var scroll = $(window).scrollTop();
			if (scroll >= 10) {
				$("#tg-header").addClass("single-page-nav");
			}else {
				$("#tg-header").removeClass("single-page-nav");
			}
		});
	}
	var _tg_navigation = $('.tg-navigation');
	_tg_navigation.singlePageNav({
		updateHash: false,
		offset: 90,
		filter: ':not(.external)',
	});
	var _tg_btnscrolltop = $("#tg-btnscrolltop");
	_tg_btnscrolltop.on('click', function(){
		var _scrollUp = $('html, body');
		_scrollUp.animate({ scrollTop: 0 }, 'slow');
    })

    
  $('#meal_preference').parent().append('<ul class="list-item" id="newmeal_preference" name="meal_preference"></ul>');
  $('#meal_preference option').each(function(){
      $('#newmeal_preference').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
  });
  $('#meal_preference').remove();
  $('#newmeal_preference').attr('id', 'meal_preference');
  $('#meal_preference li').first().addClass('init');
  $("#meal_preference").on("click", ".init", function() {
      $(this).closest("#meal_preference").children('li:not(.init)').toggle();
  });
  
  var allOptions = $("#meal_preference").children('li:not(.init)');
  $("#meal_preference").on("click", "li:not(.init)", function() {
      allOptions.removeClass('selected');
      $(this).addClass('selected');
      $("#meal_preference").children('.init').html($(this).html());
      allOptions.toggle();
  });

  var marginSlider = document.getElementById('slider-margin');
  if (marginSlider != undefined) {
      noUiSlider.create(marginSlider, {
            start: [500],
            step: 10,
            connect: [true, false],
            tooltips: [true],
            range: {
                'min': 0,
                'max': 1000
            },
            format: wNumb({
                decimals: 0,
                thousand: ',',
                prefix: '$ ',
            })
    });
  }
  $('#reset').on('click', function(){
      $('#register-form').reset();
  });

  // Products Slick
	$('.products-slick').each(function() {
		var $this = $(this),
				$nav = $this.attr('data-nav');

		$this.slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			infinite: true,
			speed: 300,
			dots: false,
			arrows: true,
			appendArrows: $nav ? $nav : false,
			responsive: [{
	        breakpoint: 991,
	        settings: {
	          slidesToShow: 2,
	          slidesToScroll: 1,
	        }
	      },
	      {
	        breakpoint: 480,
	        settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1,
	        }
	      },
	    ]
		});
	});

	// Products Widget Slick
	$('.products-widget-slick').each(function() {
		var $this = $(this),
				$nav = $this.attr('data-nav');

		$this.slick({
			infinite: true,
			autoplay: true,
			speed: 300,
			dots: false,
			arrows: true,
			appendArrows: $nav ? $nav : false,
		});
	});

})(jQuery);
