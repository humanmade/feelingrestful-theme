import React from 'react'
import {fetchTestimonials} from '../../actions'
import Slider from 'react-slick'

module.exports = React.createClass( {

	componentDidMount: function () {
		this.props.dispatch( fetchTestimonials() )
	},

	render: function () {
		if ( ! this.props.posts.testimonials.length ) {
			return (
				<div className="loading-wrap">
					<div className="loading"><span className="fa fa-heart"></span> Retrieving Testimonials...</div>
				</div>
			)
		}

		var testimonials = this.props.posts.testimonials;

		var settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		}

		return (
			<section className="Testimonials">
				<div className="inner">
					<ul className="testimonial-slider">
						<Slider {...settings}>
							{testimonials.map( testimonial => {
									return (
										<li className="testimonial" key={testimonial.title.rendered}>
											<img src={testimonial.avatar_image_url} alt="" className="avatar"/>
											<blockquote dangerouslySetInnerHTML={{__html: testimonial.content.rendered}}/>
											<cite>
												{testimonial.title.rendered}
												{ testimonial.byline && ! testimonial.company_url &&
												  <span className="byline">, {testimonial.byline}</span>
												}
												{ testimonial.byline && testimonial.company_url &&
												  <span className="byline">, <a
													  href={encodeURI( testimonial.company_url )}>{testimonial.byline}</a></span>
												}
											</cite>
										</li>
									)
								}
							)}
						</Slider>
					</ul>
				</div>
			</section>
		)
	}
} )
