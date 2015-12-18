<?php

namespace FeelingRESTful;

class OpenGraph {

	public function __construct() {

		add_action( 'opengraph', array( $this, 'opengraph' ) );

		add_filter( 'opengraph_tags', array( $this, 'pagebuilder_tags' ) );

		add_filter( 'opengraph_tags', array( $this, 'js_page_tags' ) );

	}

	public function opengraph() {

		$tags = [ ];

		if ( is_singular() ) {
			$tags['og:title'] = get_the_title();
		} elseif ( is_archive() ) {
			$tags['og:title'] = get_the_archive_title();
		}

		if ( is_singular() ) {
			$tags['og:description'] = get_the_excerpt();
		}

		if ( is_singular() ) {
			$tags['og:url'] = get_permalink();
		} elseif ( is_tax() ) {
			$tags['og:url'] = get_term_link( get_queried_object(), get_queried_object()->taxonomy );
		}

		if ( is_singular() && has_post_thumbnail() ) {
			$tags['og:image'] = get_the_post_thumbnail_url( 'full' );
		}

		$tags = wp_parse_args( $tags, [
			'og:type'        => 'website',
			'og:title'       => get_bloginfo( 'name' ),
			'og:description' => get_bloginfo( 'description' ),
			'og:url'         => home_url( '/' ),
			'og:image'       => get_site_icon_url(),
		] );

		$tags = array_filter( $tags );

		$tags = apply_filters( 'opengraph_tags', $tags );

		foreach ( $tags as $property => $content ) {
			printf( '
			<meta property="%s" content="%s">',
				esc_attr( $property ),
				esc_attr( $content )
			);
		}

	}

	public function pagebuilder_tags( $tags ) {

		// Page Builder stuff
		if ( class_exists( 'ModularPageBuilder\\Plugin' ) && is_singular() ) {

			$mpb     = \ModularPageBuilder\Plugin::get_instance();
			$builder = $mpb->get_builder( 'modular-page-builder' );
			$html    = $builder->get_rendered_data( get_the_ID(), $builder->id . '-data' );

			if ( empty( $tags['og:description'] ) ) {
				$tags['og:description'] = wp_trim_excerpt( strip_tags( $html ) );
			}

			foreach ( $builder->get_raw_data( get_the_ID() ) as $module_args ) {
				if ( $module = $mpb->init_module( $module_args['name'], $module_args ) ) {
					if ( 'image' === $module_args['name'] && ! has_post_thumbnail() ) {
						$tags['og:image'] = $module->get_json()['image'][0][0];
						break;
					}
				}
			}

		}

		return $tags;
	}

	public function js_page_tags( $tags ) {

		if ( is_404() ) {

			$tags['og:title'] = trim( wp_title( '', false, 'right' ) );
			$tags['og:url']   = home_url( $_SERVER['REQUEST_URI'] );

		}

		return $tags;
	}
}