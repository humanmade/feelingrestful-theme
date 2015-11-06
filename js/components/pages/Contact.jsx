import React from 'react'

module.exports = React.createClass({
	render: function() {
		return (
			<div className="Page">
				<h1>Contact Us</h1>

				<form>
					<p>
						<label>Name</label>
						<input type="text" />
					</p>
					<p>
						<labe>Email</labe>
						<input type="text" />
					</p>
					<p>
						<textarea></textarea>
					</p>
					<p className="submit">
						<input type="submit" value="Send!" />
					</p>
				</form>
			</div>
		)
	}
})
