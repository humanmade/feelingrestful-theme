<?php

namespace FeelingRESTful;

// post meta for previews
class Preview_Postmeta {

	private $doing_preview = false;

	public function __construct() {
		add_filter( 'add_post_metadata', array( $this, 'add' ), 10, 5 );
		add_filter( 'update_post_metadata', array( $this, 'update' ), 10, 5 );
		add_filter( 'delete_post_metadata', array( $this, 'delete' ), 10, 5 );
		add_filter( 'get_post_metadata', array( $this, 'get' ), 10, 4 );
	}

	public function is_preview( $post_id = 0 ) {

		if ( ! is_user_logged_in() ) {
			return false;
		}

		$post_type = get_post_type_object( get_post_type( $post_id ) );

		if ( ! current_user_can( $post_type->cap->edit_post, $post_id ) ) {
			return false;
		}

		if ( is_admin() ) {
			return ! $this->doing_preview && isset( $_POST['wp-preview'] ) && 'dopreview' === $_POST['wp-preview'];
		}

		// And on the front end: (props @yrosen)
		return ! $this->doing_preview && isset( $_GET['preview'] ) && $_GET['preview'] == 'true';
	}

	private function mod_key( $key ) {
		if ( strlen( $key ) > 50 ) {
			$key = md5( $key );
		}
		return "_preview__{$key}";
	}

	public function __call( $method, $args ) {
		if ( ! $this->is_preview( $args[1] ) || ! function_exists( "{$method}_metadata" ) ) {
			return $args[0];
		}

		// replace $check with $meta_type
		$args[0] = 'post';

		// modify key
		$args[2] = $this->mod_key( $args[2] );

		// call original function but make sure we don't get stuck in a loop
		$this->doing_preview = true;
		$result              = call_user_func_array( "{$method}_metadata", $args );
		$this->doing_preview = false;

		// handle if $single && is_array( $check ) returning index 0 when filtered
		if ( 'get' === $method && $args[3] && is_array( $result ) ) {
			$result = array( $result );
		}

		return $result;
	}

}
