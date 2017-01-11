import React from 'react'
import { fetchWorkshops } from '../../actions'
import { Link } from 'react-router'
import Loading from './Loading'
import Header from './Header'

module.exports = React.createClass({

	componentDidMount: function() {
		this.props.dispatch( fetchWorkshops() )
	},

	render: function () {

		if (!this.props.posts.workshops.length) {
			return (
				<div className="loading-wrap workshops">
					<div className="loading"><span className="fa fa-heart"></span> Gathering workshops... </div>
				</div>
			)
		}

		return (

			<div className="ws-wrap">

				<div className="inner">

					<h2 className="headline">{this.props.heading}</h2>
					{ this.props.subheading ?
					<p>{this.props.subheading}</p>
					: '' }

					<div className="ws-overview">

						<ul className="ws-row">

							<li><a href="https://adayofrest.hm/boston-2017/page/introduction-to-javascript/"  className="ws-detail ws-full-day ws-js">

								<span className="ws-title">Introduction to JavaScript</span>
								<span className="ws-line"></span>
								<span className="ws-instructor">Zac Gordon</span>
								<span className="ws-length">Full Day</span>
								<time datetime="2017-03-11" className="ws-date">8th March 2017</time>

							</a></li>

							<li>
								<a href="https://adayofrest.hm/boston-2017/page/workshop-intoduction-to-reactjs-wes-bos/" className="ws-detail ws-full-day ws-react">
									<span className="ws-title">Intro to ReactJS</span>
									<span className="ws-line"></span>
									<span className="ws-instructor">Wes Bos</span>
									<span className="ws-length">Full Day</span>
									<time datetime="2017-03-10" className="ws-date">10th March 2017</time>
								</a>
							</li>

							</ul>

						<ul className="ws-row">

							<li>
								<a href="https://adayofrest.hm/boston-2017/page/a-day-of-rest-workshop-woocommerce-and-the-rest-api/" className="ws-detail ws-half-day ws-woo">

									<span className="ws-title">WooCommerce and the REST API</span>
									<span className="ws-line"></span>
									<span className="ws-instructor">Brian Richards</span>
									<span className="ws-length">Half Day</span>
									<time datetime="2017-03-10" className="ws-date">8th March 2017</time>

								</a>
							</li>

							<li>
								<a href="https://adayofrest.hm/boston-2017/page/workshop-wordpress-rest-api-authentication/" className="ws-detail ws-half-day ws-restapi">

									<span className="ws-title">WordPress REST API Authentication</span>
									<span className="ws-line"></span>
									<span className="ws-instructor">Joe Hoyle</span>
									<span className="ws-length">Half Day</span>
									<time datetime="2017-03-12" className="ws-date">8th March 2017</time>

								</a>
							</li>

							<li>
								<a href="https://adayofrest.hm/boston-2017/page/workshop-packaging-modern-web-applications-with-webpack/" className="ws-detail ws-half-day ws-webpack">

									<span className="ws-title">Packaging Modern Web Applications with Webpack</span>
									<span className="ws-line"></span>
									<span className="ws-instructor">K. Adam White</span>
									<span className="ws-length">Half Day</span>
									<time datetime="2017-03-12" className="ws-date">10th March 2017</time>

								</a>
							</li>

							<li>
								<a href="https://adayofrest.hm/boston-2017/page/workshop-developing-with-backbone-and-the-rest-api/" className="ws-detail ws-half-day ws-backbone">

									<span className="ws-title">Developing with Backbone and the REST API</span>
									<span className="ws-line"></span>
									<span className="ws-instructor">Adam Silverstein</span>
									<span className="ws-length">Half Day</span>
									<time datetime="2017-03-10" className="ws-date">10th March 2017</time>

								</a>
							</li>

						</ul>

					</div>

				</div>

			</div>

		)
	}
})

