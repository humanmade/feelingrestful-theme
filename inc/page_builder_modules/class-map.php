<?php

namespace FeelingRESTful\Page_Builder_Modules;

use ModularPageBuilder\Modules\Module;

class Map extends Module {

	public $name = 'map';
	public $label = 'Map';
	public $attr = array(
		array( 'name' => 'latitude', 'label' => 'Latitude', 'type' => 'text', 'value' => '' ),
		array( 'name' => 'longitude', 'label' => 'Longitude', 'type' => 'text', 'value' => '' ),
		array( 'name' => 'zoom', 'label' => 'Zoom Level', 'type' => 'number', 'value' => '' ),
		array( 'name' => 'place_id', 'label' => 'Google Place ID', 'type' => 'text', 'value' => '' ),
	);
}
