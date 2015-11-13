<?php

namespace FeelingRESTful\Page_Builder_Modules;

use ModularPageBuilder\Modules\Module;

class Twitter_Timeline extends Module {

	public $name = 'twitter_timeline';
	public $label = 'Twitter Timeline';
	public $attr = array(
		array( 'name' => 'username', 'label' => 'Twitter Username', 'type' => 'text', 'value' => '' ),
		array( 'name' => 'widget_id', 'label' => 'Twitter Widget ID', 'type' => 'text', 'value' => '' ),
	);
}
