<?php

/**
 * Tickets
 * @package FeelingRESTful\Page_Builder_Modules
 *
 * Displays Tickets and Eventbrite static purchase iFrame
 */
namespace FeelingRESTful\Page_Builder_Modules;

use ModularPageBuilder\Modules\Module;

class Tickets extends Module {

	public $name = 'tickets';
	public $label = 'Tickets';
	public $attr = array(
		array( 'name' => 'heading', 'label' => 'Heading', 'type' => 'text', 'value' => '' ),
		array( 'name' => 'subheading', 'label' => 'Subheading', 'type' => 'text', 'value' => '' ),
	);

	public function render() {
	}
}

