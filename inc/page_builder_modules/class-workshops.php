<?php

/**
 * Class Workshops
 * @package FeelingRESTful\Page_Builder_Modules
 *
 * Displays side by side list of Workshops (default 2 items, can support up to 3)
 */
namespace FeelingRESTful\Page_Builder_Modules;

use ModularPageBuilder\Modules\Module;

class Workshops extends Module {

	public $name = 'workshops';
	public $label = 'Workshops';
	public $attr = array(
		array( 'name' => 'heading', 'label' => 'Heading', 'type' => 'text', 'value' => '' ),
		array( 'name' => 'subheading', 'label' => 'Subheading', 'type' => 'text', 'value' => '' ),
	);

	public function render() {}
}
