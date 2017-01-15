<!DOCTYPE html>
<html>
<head>
	<title><?php wp_title( '&middot;', true, 'right' ); ?> A Day of REST</title>

	<meta name="viewport" content="width=device-width, user-scalable=no">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
	<script src="//use.typekit.net/yjd8lkq.js"></script>
	<script>try {
			Typekit.load();
		} catch ( e ) {
		}</script>
	<script src="https://maps.googleapis.com/maps/api/js&key=<?php if ( defined( 'HM_GOOGLE_API_KEY' ) ) echo HM_GOOGLE_API_KEY ?>"></script>
	<?php if ( defined( 'HM_DEV' ) && HM_DEV ) : ?>
		<script src="//localhost:35729/livereload.js"></script>
	<?php endif; ?>
	<?php do_action( 'opengraph' ); ?>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<noscript>
	<p style="color: black;">
		<?php
		printf(
			esc_html__( 'A Day of Rest Boston is built in JavaScript. If you are reading this message it means that JavaScript it disabled in your browser. Please <a href="%s">follow this link for browser-specific instructions on turning on JavaScript.</a>', 'feelingrestful-theme' ),
			'http://enable-javascript.com/'
		)
		?>
	</p>
	<p>
		<?php
		printf(
			esc_html__( 'If you are unable to turn on JavaScript in your browser, please feel free to <a href="%s">send us an email for more information</a>.', 'feelingrestful-theme' ),
			'mailto:events@humanmade.co.uk'
		)
		?>
	</p>
</noscript>
<?php do_action( 'wp_body' ); ?>

<div id="app"></div>

<?php wp_footer(); ?>
</body>

</html>
