<?php

/**
 * Organised by
 * @package FeelingRESTful\Page_Builder_Modules
 *
 * Displays post status and human made organiser logos
 */
namespace FeelingRESTful\Page_Builder_Modules;

use ModularPageBuilder\Modules\Module;

class Organised_By extends Module {

	public $name = 'organised_by';
	public $label = 'Organised By';
	public $attr = array(
		array( 'name' => 'heading', 'label' => 'Heading', 'type' => 'text', 'value' => '' ),
	);

	public function render() {
	}
}

