import React from 'react'

module.exports = React.createClass({
	propTypes: {
		username: React.PropTypes.string,
		widget_id: React.PropTypes.string
	},
	componentDidMount: function() {
		window.twttr = (function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0],
		    t = window.twttr || {};
		  if (d.getElementById(id)) return t;
		  js = d.createElement(s);
		  js.id = id;
		  js.src = "https://platform.twitter.com/widgets.js";
		  fjs.parentNode.insertBefore(js, fjs);

		  t._e = [];
		  t.ready = function(f) {
		    t._e.push(f);
		  };

		  return t;
		}(document, "script", "twitter-wjs"));
	},
	componentDidUpdate: function() {
		twttr.widgets.load();
	},
	render: function() {
		return <div className="TwitterTimeline">
			<a className="twitter-timeline" href={ 'https://twitter.com/' + this.props.username} data-widget-id={this.props.widget_id}>Tweets by @{this.props.username}</a>
		</div>
	}
})
