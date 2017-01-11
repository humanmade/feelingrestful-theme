<?php

if ( ! function_exists( 'HM\\Autoloader\\register_class_path' ) ) {
	require_once 'inc/autoloader.php';
}

HM\Autoloader\register_class_path( 'FeelingRESTful', __DIR__ . '/inc' );

include __DIR__ . '/inc/menu-api.php';
include __DIR__ . '/inc/class-opengraph.php';

// Dynamic versioning
define( 'HM_VERSION', defined( 'HM_DEPLOYMENT_REVISION' ) ?
	HM_DEPLOYMENT_REVISION :
	wp_get_theme()->version );

add_action( 'wp_enqueue_scripts', function () {

	$post_type_object = get_post_type_object( get_post_type() ?: 'post' );

	wp_enqueue_script( 'app', get_template_directory_uri() . '/dist/main.js', array(), HM_VERSION, true );
	wp_localize_script( 'app', 'app_data', array(
		'api_url' => untrailingslashit( rest_url() ),
		'nonce'   => wp_create_nonce( 'wp_rest' ),
		'post_id' => is_singular() ? get_the_ID() : 0,
		'type'    => ! empty( $post_type_object->rest_base ) ? $post_type_object->rest_base : $post_type_object->name,
		'base'    => parse_url( home_url(), PHP_URL_PATH ),
	) );
	wp_enqueue_style( 'app', get_template_directory_uri() . '/dist/main.css', array(), HM_VERSION );
} );

/**
 * Add login Styling
 */
add_action( 'login_enqueue_scripts', function () {
	wp_enqueue_style( 'ador-boston-login', get_template_directory_uri() . '/dist/login.css', array(), HM_VERSION );
} );

add_post_type_support( 'page', 'modular-page-builder' );
add_post_type_support( 'revision', 'modular-page-builder' );
add_post_type_support( 'workshop', 'modular-page-builder' );

add_theme_support( 'post-thumbnails' );
add_theme_support( 'menus' );

add_action( 'after_setup_theme', function () {
	register_nav_menus(
		array(
			'primary_navigation' => 'Primary Navigation',
			'events_navigation'  => 'Events Navigation',
			'social_navigation'  => 'Social Navigation',
			'buy_navigation'     => 'Buy Navigation'
		)
	);
} );

add_action( 'admin_init', function () {

	foreach ( array( 'page', 'workshop' ) as $post_type ) {
		remove_post_type_support( $post_type, 'editor' );
		remove_post_type_support( $post_type, 'comments' );
		remove_post_type_support( $post_type, 'page-attributes' );
		remove_post_type_support( $post_type, 'custom-fields' );
		remove_post_type_support( $post_type, 'thumbnail' );
		remove_post_type_support( $post_type, 'author' );
	}
} );

add_action( 'init', function () {

	if ( class_exists( 'FeelingRESTful\\OpenGraph' ) ) {
		$opengraph = new FeelingRESTful\OpenGraph();
	}

	if ( ! class_exists( 'ModularPageBuilder\\Plugin' ) ) {
		return;
	}

	$plugin = ModularPageBuilder\Plugin::get_instance();
	$plugin->register_module( 'map', 'FeelingRESTful\\Page_Builder_Modules\\Map' );
	$plugin->register_module( 'twitter_timeline', 'FeelingRESTful\\Page_Builder_Modules\\Twitter_Timeline' );
	$plugin->register_module( 'intro', 'FeelingRESTful\\Page_Builder_Modules\\Intro' );
	$plugin->register_module( 'speakers_overview', 'FeelingRESTful\\Page_Builder_Modules\\Speakers_Overview' );
	$plugin->register_module( 'workshops', 'FeelingRESTful\\Page_Builder_Modules\\Workshops' );
	$plugin->register_module( 'testimonial_slider', 'FeelingRESTful\\Page_Builder_Modules\\Testimonial_Slider' );
	$plugin->register_module( 'sponsors_block', 'FeelingRESTful\\Page_Builder_Modules\\Sponsors_Block' );
	$plugin->register_module( 'sponsors_detail', 'FeelingRESTful\\Page_Builder_Modules\\Sponsors_Detail' );
	$plugin->register_module( 'cta_block', 'FeelingRESTful\\Page_Builder_Modules\\Cta_Block' );
	$plugin->register_module( 'organised_by', 'FeelingRESTful\\Page_Builder_Modules\\Organised_By' );
	$plugin->register_module( 'tickets', 'FeelingRESTful\\Page_Builder_Modules\\Tickets' );
} );

add_filter( 'modular_page_builder_allowed_modules_for_page', function ( $allowed ) {
	$allowed[] = 'map';
	$allowed[] = 'twitter_timeline';
	$allowed[] = 'intro';
	$allowed[] = 'speakers_overview';
	$allowed[] = 'workshops';
	$allowed[] = 'testimonial_slider';
	$allowed[] = 'sponsors_block';
	$allowed[] = 'sponsors_detail';
	$allowed[] = 'cta_block';
	$allowed[] = 'organised_by';
	$allowed[] = 'tickets';

	return $allowed;
} );

add_action( 'after_setup_theme', function () {
	global $wp_rewrite;
	$wp_rewrite->permalink_structure = $wp_rewrite->root . 'news/%postname%';
	$wp_rewrite->page_structure      = $wp_rewrite->root . 'page/%pagename%';
	$wp_rewrite->front               = $wp_rewrite->root;
} );

add_action( 'after_setup_theme', function () {
	add_editor_style( 'dist/editor.css' );
} );

// Overwrite permastructs where we fetch by ID rather than name
add_action( 'init', function () {
	foreach ( array( 'speaker', 'workshop' ) as $post_type ) {
		$post_type = get_post_type_object( $post_type );

		if ( is_object( $post_type ) ) {

			add_rewrite_tag(
				"%{$post_type->name}_id%",
				'(\d+)',
				"post_type={$post_type->name}&p="
			);

			add_permastruct(
				$post_type->name,
				"{$post_type->rewrite['slug']}/%{$post_type->name}_id%",
				array(
					'with_front'  => false,
					'ep_mask'     => EP_PERMALINK,
					'paged'       => false,
					'feed'        => false,
					'forcomments' => false,
					'walk_dirs'   => false,
					'endpoints'   => true,
				)
			);

		}

	}
}, 11 );

add_filter( 'post_type_link', function ( $post_link, $post, $leavename, $sample ) {
	if ( $sample ) {
		return str_replace( "%{$post->post_type}_id%", 'NNN', $post_link );
	}

	return str_replace( "%{$post->post_type}_id%", $post->ID, $post_link );
}, 10, 4 );

add_action( 'rest_api_init', function () {

	if ( ! class_exists( 'HM\\REST\\Post_Autosave_Controller' ) ) {
		return;
	}

	if ( post_type_exists( 'speaker' ) ) {
		$speaker_autosave_controller = new HM\REST\Post_Autosave_Controller( 'speaker' );
		$speaker_autosave_controller->register_routes();
	}

	if ( post_type_exists( 'workshop' ) ) {
		$workshop_autosave_controller = new HM\REST\Post_Autosave_Controller( 'workshop' );
		$workshop_autosave_controller->register_routes();
	}
} );

add_filter( 'pre_option_permalink_structure', function () {
	return '/news/%postname%';
} );

add_filter( 'qm/dispatch/html', '__return_false' );

/**
 * Polyfill for wp_title()
 */
add_filter( 'wp_title', function ( $title, $sep, $seplocation ) {

	if ( false !== strpos( $title, __( 'Page not found' ) ) ) {
		$replacement = ucwords( str_replace( '/', ' ', $_SERVER['REQUEST_URI'] ) );
		$title       = str_replace( __( 'Page not found' ), $replacement, $title );
	}

	return $title;
}, 10, 3 );

/**
 * Add Woothemes Testimonial API endpoint
 */
add_filter( 'woothemes_testimonials_post_type_args', function ( $args ) {

	$args['show_in_rest']          = true;
	$args['rest_base']             = 'testimonials';
	$args['rest_controller_class'] = 'WP_REST_Posts_Controller';

	return $args;
} );

add_filter( 'rest_prepare_testimonial', function ( $data, $post ) {

	$_data = $data->data;

	if ( ! empty( get_post_meta( $post->ID, '_gravatar_email', true ) ) ) {
		$_data['avatar_image_url'] = get_avatar_url( get_post_meta( $post->ID, '_gravatar_email', true ) );
	} else if ( has_post_thumbnail( $post->ID ) ) {
		$_data['avatar_image_url'] = get_the_post_thumbnail_url( $post->ID, 'thumbnail' );
	}

	if ( ! empty( get_post_meta( $post->ID, '_byline', true ) ) ) {
		$_data['byline'] = esc_html( get_post_meta( $post->ID, '_byline', true ) );
	}

	if ( ! empty( get_post_meta( $post->ID, '_url', true ) ) ) {
		$_data['company_url'] = esc_url_raw( get_post_meta( $post->ID, '_url', true ) );
	}

	$data->data = $_data;

	return $data;

}, 10, 2 );

/**
 * TinyMce needs more options
 */
add_filter( 'mpb_wysiwyg_args', function ( $args ) {
	$args['teeny'] = false;

	return $args;
} );


/**
 * Add page slug to body_class
 */
add_filter( 'body_class', function ( $classes ) {
	if ( is_page() ) {
		$classes[] = sanitize_title_with_dashes( get_the_title() );
	}

	return $classes;
} );

/**
 * Add Google Analytics
 */
add_action( 'wp_footer', function () {
	echo "
		<script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
		
		  ga( 'create', 'UA-77339423-1', 'auto');
		  ga( 'send', 'pageview');
		
		</script>
	";
} );

/**
 * Add Twitter js
 */
add_action( 'wp_footer', function () {
	?>
	<script>window.twttr = (
			function ( d, s, id ) {
				var js, fjs = d.getElementsByTagName( s )[0],
					t = window.twttr || {};
				if ( d.getElementById( id ) ) {
					return t;
				}
				js = d.createElement( s );
				js.id = id;
				js.src = "https://platform.twitter.com/widgets.js";
				fjs.parentNode.insertBefore( js, fjs );

				t._e = [];
				t.ready = function ( f ) {
					t._e.push( f );
				};

				return t;
			}( document, "script", "twitter-wjs" )
		);</script>
	<?php
} );


/**
 * Add Facebook tracking pixel
 */
add_action( 'wp_footer', function () {
	?>
	<!-- Facebook Pixel Code -->
	<script>
		! function ( f, b, e, v, n, t, s ) {
			if ( f.fbq ) {
				return;
			}
			n = f.fbq = function () {
				n.callMethod ?
					n.callMethod.apply( n, arguments ) : n.queue.push( arguments )
			};
			if ( ! f._fbq ) {
				f._fbq = n;
			}
			n.push = n;
			n.loaded = ! 0;
			n.version = '2.0';
			n.queue = [];
			t = b.createElement( e );
			t.async = ! 0;
			t.src = v;
			s = b.getElementsByTagName( e )[0];
			s.parentNode.insertBefore( t, s )
		}( window,
			document, 'script', 'https://connect.facebook.net/en_US/fbevents.js' );
		fbq( 'init', '789818907754412' );
		fbq( 'track', 'PageView' );
	</script>
	<noscript><img height="1" width="1" style="display:none"
	               src="https://www.facebook.com/tr?id=789818907754412&ev=PageView&noscript=1"
		/></noscript>
	<!-- DO NOT MODIFY -->
	<!-- End Facebook Pixel Code -->
	<?php
} );

/**
 * Use site description on OG tag
 * Defaults can be found at /inc/class-opengraph.php
 */
add_filter( 'opengraph_tags', function ( $tags ) {
	if ( empty( $tags['og:description'] ) ) {
		$tags['og:description'] = get_bloginfo( 'description' );
	}

	// Facebook page ID
	$tags['fb:pages']  = '1665148160392820';
	$tags['fb:app_id'] = '1091317897580509';

	// Fallback images
	$tags['images'][] = array(
		'og:image'        => get_template_directory_uri() . '/assets/images/ador-og.png',
		'og:image:width'  => '512',
		'og:image:height' => '512'
	);
	$tags['images'][] = array(
		'og:image'        => get_template_directory_uri() . '/assets/images/ador-og.png',
		'og:image:width'  => '500',
		'og:image:height' => '215'
	);

	return $tags;
} );

/**
 * FB SDK
 */
add_action( 'wp_body', function () {
	?>
	<script>
		window.fbAsyncInit = function () {
			FB.init( {
				appId: '1091317897580509',
				xfbml: true,
				version: 'v2.6'
			} );
		};

		(
			function ( d, s, id ) {
				var js, fjs = d.getElementsByTagName( s )[0];
				if ( d.getElementById( id ) ) {
					return;
				}
				js = d.createElement( s );
				js.id = id;
				js.src = "//connect.facebook.net/en_US/sdk.js";
				fjs.parentNode.insertBefore( js, fjs );
			}( document, 'script', 'facebook-jssdk' )
		);
	</script>
	<div class="fb-quote"></div>
	<?php
} );
