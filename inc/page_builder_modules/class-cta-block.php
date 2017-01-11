<?php

/**
 * Class Call To Action Block
 * @package FeelingRESTful\Page_Builder_Modules
 *
 * Displays a CTA section with button and background image options
 */
namespace FeelingRESTful\Page_Builder_Modules;

use ModularPageBuilder\Modules\Module;

class Cta_Block extends Module {

	public $name = 'cta_block';
	public $label = 'Call To Action Block';
	public $attr = array(
		array( 'name' => 'image', 'label' => 'Image', 'type' => 'attachment' ),
		array( 'name' => 'bg_image', 'label' => 'Background Image (optional)', 'type' => 'attachment' ),
		array( 'name' => 'heading', 'label' => 'Heading', 'type' => 'text', 'value' => '' ),
		array( 'name' => 'subheading', 'label' => 'Subheading (optional)', 'type' => 'text', 'value' => '' ),
		array( 'name' => 'button', 'label' => 'Button Text (optional)', 'type' => 'link', 'value' => '' ),
	);

	public function get_json() {
		$data = parent::get_json();
		$data['image'] = array_map( function( $val ) {
			return wp_get_attachment_image_src( $val, 'large' );
		}, $data['image'] );

		$data['bg_image'] = wp_get_attachment_image_src( $data['bg_image'][0], 'large' )[0];

		return $data;
	}

	public function render() {}
}
