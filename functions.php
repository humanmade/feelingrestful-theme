<?php

HM\Autoloader\register_class_path( 'FeelingRESTful', dirname( __FILE__ ) . '/inc' );

add_action( 'wp_enqueue_scripts', function() {

	wp_enqueue_script( 'app', get_template_directory_uri() . '/dist/main.js', array(), false, true );
	wp_enqueue_style( 'app', get_template_directory_uri() . '/dist/main.css' );
});

add_filter( 'redirect_canonical', function( $redirect_url, $requested_url ) {
	return null;
}, 10, 2 );

add_post_type_support( 'page', 'modular-page-builder' );
add_action( 'admin_init', function() {
	remove_post_type_support( 'page', 'editor' );
	remove_post_type_support( 'page', 'comments' );
	remove_post_type_support( 'page', 'page-attributes' );
	remove_post_type_support( 'page', 'custom-fields' );
	remove_post_type_support( 'page', 'thumbnail' );
	remove_post_type_support( 'page', 'author' );
});

add_action( 'init', function() {

	if ( ! class_exists( 'ModularPageBuilder\\Plugin' ) ) {
		return;
	}

	$plugin = ModularPageBuilder\Plugin::get_instance();
	$plugin->register_module( 'map', 'FeelingRESTful\\Page_Builder_Modules\\Map' );
});

add_filter( 'modular_page_builder_allowed_modules_for_page', function( $allowed ) {
	$allowed[] = 'map';
	return $allowed;
});
