<?php

/**
 * Class Sponsors Block
 * @package FeelingRESTful\Page_Builder_Modules
 *
 * List all events sponsors by tier
 *
 */
namespace FeelingRESTful\Page_Builder_Modules;

use ModularPageBuilder\Modules\Module;

class Sponsors_Block extends Module {

	public $name = 'sponsors_block';
	public $label = 'Sponsors';
	public $attr = array(
		array( 'name' => 'heading',  'label' => 'Heading (optional)', 'type' => 'text', 'value' => '' ),
		array( 'name' => 'become_a_sponsor_button',  'label' => 'Become a sponsor button(optional)', 'type' => 'link', 'value' => '' ),
	);

	public function render() {}
}
