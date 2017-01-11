import React from 'react'

module.exports = React.createClass({
	render: function () {
		return (
			<section className="OrganisedBy">
				<div className="inner">
					<h2>A Day of Rest is organised by</h2>
					<ul className="inline-list">
						<li><a href="https://hmn.md/"><img src="/content/themes/ador-boston-2016/assets/images/hm-logo-2x.png" alt="Human Made"/></a></li>
						<li><a href="https://poststatus.com/"><img src="/content/themes/ador-boston-2016/assets/images/ps-logo-2x.png" alt="Post Status"/></a></li>
					</ul>
				</div>
			</section>
		)
	}
})
