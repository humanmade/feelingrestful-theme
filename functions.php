<?php

add_action( 'wp_enqueue_scripts', function() {

	wp_enqueue_script( 'app', get_template_directory_uri() . '/dist/main.js', array(), false, true );
	wp_enqueue_style( 'app', get_template_directory_uri() . '/dist/main.css' );
});
