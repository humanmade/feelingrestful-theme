<?php

/**
 * Class Speakers Overview
 * @package FeelingRESTful\Page_Builder_Modules
 *
 * Displays a block of 8 speakers
 */
namespace FeelingRESTful\Page_Builder_Modules;

use ModularPageBuilder\Modules\Module;

class Speakers_Overview extends Module {

	public $name = 'speakers_overview';
	public $label = 'Speakers Overview';
	public $attr = array(
		array( 'name' => 'heading', 'label' => 'Heading', 'type' => 'text', 'value' => '' ),
		array( 'name' => 'subheading', 'label' => 'Subheading', 'type' => 'text', 'value' => '' ),
	);

	public function render() {
	}
}
