<?php

/**
 * Class Intro
 * @package FeelingRESTful\Page_Builder_Modules
 *
 * Displays a centered logo, with header and button text
 */
namespace FeelingRESTful\Page_Builder_Modules;

use ModularPageBuilder\Modules\Module;

class Intro extends Module {

	public $name = 'intro';
	public $label = 'Intro';
	public $attr = array(
		array( 'name' => 'image',       'label' => 'Content', 'type' => 'attachment' ),
		array( 'name' => 'intro_text',  'label' => 'Introduction', 'type' => 'text', 'value' => '' ),
		array( 'name' => 'button_text', 'label' => 'Button Text (optional)', 'type' => 'text', 'value' => '' ),
		array( 'name' => 'button_url',  'label' => 'Button Link (optional)', 'type' => 'text', 'value' => '' ),
	);

	public function get_json() {
		$data = parent::get_json();
		$data['image'] = array_map( function( $val ) {
			return wp_get_attachment_image_src( $val, 'large' );
		}, $data['image'] );
		return $data;
	}

	public function render() {}
}
