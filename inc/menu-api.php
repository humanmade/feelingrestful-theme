<?php

add_filter( 'rest_menus_format_menu_item', 'feelingrestful_menu_item' );

function feelingrestful_menu_item( $menu_item ) {

	if ( ! is_array( $menu_item ) ) {
		return $menu_item;
	}

	// regex remove domain from
	$domain = get_home_url();
	$menu_item['url'] = str_replace( $domain, '', $menu_item['url'] );

	// add in Event and pastEvent settings
	$menu_item['event'] = false;
	$menu_item['pastEvent'] = false;

	if ( preg_match( '/\bevent\b/', $menu_item['attr'] ) ) {
		$menu_item['event'] = true;
	}

	if ( preg_match( '/\bpastEvent\b/', $menu_item['classes'] ) ) {
		$menu_item['pastEvent'] = true;
	}

	$menu_item['text'] = $menu_item['title'];
	
	return $menu_item;
}
