<?php get_header(); ?>
	<!-- Menu -->
	<nav class="Menu menu-wrap">
		<div class="inner">
			<div class="menu-toggle"><span class="fa fa-bars"></span></div>
			<ul class="menu expanded">
				<li class="menu--other-events">
					<ul>
						<li class="current"><a href="/boston-2016"><span class="location">Boston</span><span class="date">3rd November 2016</span></a></li>
						<li><a href="/Tokyo-2017"><span class="location">Tokyo</span><span class="date">00th September 2017</span></a></li>
						<li>
							<ul class="past-events">
								<li><span class="past-events--label">Past Events</span></li>
								<li><a href="/boston-2016"><span class="location">Boston</span><span class="date">3rd September 2016</span></a></li>
							</ul>
						</li>
					</ul>
				</li>
				<li class="current"><a class="" href="/boston-2016/">Home</a></li>
				<li class=""><a class="" href="/boston-2016/page/about/">About</a></li>
				<li class=""><a class="" href="/boston-2016/speakers/">Speakers</a></li>
				<li class=""><a class="" href="/boston-2016/news/schedule/">Schedule</a></li>
				<li class=""><a class="" href="/boston-2016/news/">News</a></li>
				<li class=""><a class="" href="/boston-2016/sponsors/">Sponsors</a></li>
				<li class=""><a class="" href="/boston-2016/page/hack-day/">Hack Day</a></li>
				<li class=""><a class="" href="/boston-2016/page/press/">Press</a></li>
				<li class=""><a class="" href="/boston-2016/page/contact/">Contact</a></li>
				<li>
					<ul class="menu-social">
						<li ><a class="facebook" href="#twitter"></a></li>
						<li ><a class="twitter" href="#facebook"></a></li>
					</ul>
				</li>
				<li class="buy-ticket"><a href="#">Buy Ticket</a></li>
			</ul>
		</div>
	</nav>

	<div class="Page">
		<section class="Intro">
			<div class="inner">
				<img src="<?php echo get_stylesheet_directory_uri() ?>/assets/images/ador-boston-logo.png" title="A Day of Rest Boston"/>
				<h2 >Learn about the <strong>WordPress REST API </strong>from the team building it and the people using it. 3rd November 2016, CIT Building, Boston.</h2>
				<a href="#" class="Button buynow">Get your ticket</a>

				<video autoplay loop muted poster="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/poster.png" id="video">
					<source src="<?php echo get_stylesheet_directory_uri() ?>/assets/images/dayofrest.mp4" type="video/mp4">
				</video>
			</div>
		</section>

		<section class="Speakers">
			<div class="inner">
				<h2 class="headline">Learn from the experts</h2>
				<p>Some intro copy will go here with value propositions and to introduce the execellent speakers, this intro is specifically for the main event day.</p>
			</div>
		</section>

		<section class="Speakers">
			<ul class="SpeakerList">
				<li class="speaker"><a href="#">Ryan McCue<span>Human Made</span></a></li>
				<li class="speaker"><a href="#">Joe Hoyle<span>Human Made</span></a></li>
				<li class="speaker"><a href="#">Daniel Bachhuber<span>Hand Built</span></a></li>
				<li class="speaker"><a href="#">Kathleen Vignos<span>WIRED</span></a></li>
				<li class="speaker"><a href="#">Jack Lenox<span>Automattic</span></a></li>
				<li class="speaker"><a href="#">Nicolay Bachiyski<span>Automattic</span></a></li>
				<li class="speaker"><a href="#">K. Adam White<span>Boccoup</span></a></li>
				<li class="speaker"><a href="#">Scott Taylor<span>New York Times</span></a></li>
			</ul>
		</section>

		<section class="Workshop">
			<div class="inner">
				<h2 class="headline">Learn and Contribute</h2>
				<p>Some intro copy should go here to lead into what's happening beyond the main event day.</p>
				<div class="workshop-details">
					<section class="workshop-detail">
						<h3>Beginner's Workshop Day</h3>
						<span class="date">2nd November 2016</span>
						<p>Here goes a short teaser about the workshop day and how awesome it will be to partake</p>
						<a href="#" class="Button ghost-button">What will I Learn</a>
					</section>

					<section class="workshop-detail">
						<h3>Beginner's Workshop Day</h3>
						<span class="date">2nd November 2016</span>
						<p>Here goes a short teaser about the workshop day and how awesome it will be to partake</p>
						<a href="#" class="Button ghost-button">What will I Learn</a>
					</section>
				</div>
			</div>
		</section>

		<section class="Testimonials">
			<div class="inner">
				<ul class="testimonial-slider">
					<li class="testimonial"><img src="https://randomuser.me/api/portraits/men/80.jpg" alt="" class="avatar">
						<blockquote>It was a great conference - really engaging speakers from a range of organisations around the world, and a good chance to network with other developers. I was impressed by how many core WordPress / REST API contributors came along, too</blockquote>
						<cite>Elliot Elliot Davis, The Times</cite>
					</li>
<!--					<li class="testimonial"><img src="https://randomuser.me/api/portraits/men/79.jpg" alt="" class="avatar">-->
<!--						<blockquote>It was a great conference - really engaging speakers from a range of organisations around the world, and a good chance to network with other developers. I was impressed by how many core WordPress / REST API contributors came along, too</blockquote>-->
<!--						<cite>Elliot Elliot Davis, The Times</cite>-->
<!--					</li>-->
<!--					<li class="testimonial"><img src="https://randomuser.me/api/portraits/men/60.jpg" alt="" class="avatar">-->
<!--						<blockquote>It was a great conference - really engaging speakers from a range of organisations around the world, and a good chance to network with other developers. I was impressed by how many core WordPress / REST API contributors came along, too</blockquote>-->
<!--						<cite>Elliot Elliot Davis, The Times</cite>-->
<!--					</li>-->
<!--					<li class="testimonial"><img src="https://randomuser.me/api/portraits/men/62.jpg" alt="" class="avatar">-->
<!--						<blockquote>It was a great conference - really engaging speakers from a range of organisations around the world, and a good chance to network with other developers. I was impressed by how many core WordPress / REST API contributors came along, too</blockquote>-->
<!--						<cite>Elliot Elliot Davis, The Times</cite>-->
<!--					</li>-->
				</ul>
			</div>
		</section>

		<div class="Sponsors">
			<div class="inner">
				<h2 class="headline">A day of rest is proud to be sponsored by</h2>

				<section class="sponsor-level platinum">
					<h3><span>Platinum Sponsors</span></h3>
					<ul>
						<li><a href="#"><img src="<?php echo esc_url( get_stylesheet_directory_uri() ); ?>/assets/images/hm-logo.png" alt="#"></a></li>
						<li><a href="#"><img src="<?php echo esc_url( get_stylesheet_directory_uri() ); ?>/assets/images/ps-logo.png" alt="#"></a></li>
					</ul>
				</section>

				<section class="sponsor-level gold">
					<h3><span>Gold Sponsors</span></h3>
					<ul>
						<li><a href="#"><img src="<?php echo esc_url( get_stylesheet_directory_uri() ); ?>/assets/images/hm-logo.png" alt="#"></a></li>
						<li><a href="#"><img src="<?php echo esc_url( get_stylesheet_directory_uri() ); ?>/assets/images/hm-logo.png" alt="#"></a></li>
						<li><a href="#"><img src="<?php echo esc_url( get_stylesheet_directory_uri() ); ?>/assets/images/hm-logo.png" alt="#"></a></li>
						<li><a href="#"><img src="<?php echo esc_url( get_stylesheet_directory_uri() ); ?>/assets/images/hm-logo.png" alt="#"></a></li>
						<li><a href="#"><img src="<?php echo esc_url( get_stylesheet_directory_uri() ); ?>/assets/images/hm-logo.png" alt="#"></a></li>
					</ul>
				</section>

				<a href="#becomeASponsor" class="Button">Become a sponsor</a>
				<a href="#seeAllSponsors" class="Link Secondary-Link"><span>See all event sponsors</span></a>
			</div>
		</div>

		<section class="Community">
			<div class="inner">
				<img src="<?php echo esc_url( get_stylesheet_directory_uri() . '/assets/images/ador-icon.png' ); ?>" alt="">
				<h2 class="headline">Join our facebook community</h2>
				<p>Some intro copy could go here about joining the FB community</p>
				<a href="" class="Button ghost-button">Join us on Facebook</a>
			</div>
		</section>

		<section class="OrganisedBy">
			<div class="inner">
				<h2>A Day of Rest is organised by</h2>
				<ul class="inline-list">
					<li><a href="#"><img src="<?php echo esc_url( get_stylesheet_directory_uri() ); ?>/assets/images/hm-logo.png" alt="#"></a></li>
					<li><a href="#"><img src="<?php echo esc_url( get_stylesheet_directory_uri() ); ?>/assets/images/ps-logo.png" alt="#"></a></li>
				</ul>
			</div>
		</section>

		<section class="BuyYourTicket">
			<div class="inner">
				<h2 class="headline">Buy Your Ticket</h2>
				<p>Want to join us for some REST in November? Who wouldn't? General Tickets cover the event itself, including lunch, breaks, swag and a fun after-party.</p>
				<div class="EventBrite">
					EventBrite embed or ticketing information goes here
				</div>
			</div>
		</section>
	</div>
<?php get_footer();
