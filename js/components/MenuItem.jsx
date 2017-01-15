import React from 'react'
import {Link} from 'react-router'
import {extend} from 'lodash/object'

module.exports = React.createClass( {

	render: function () {

		var ListItem = React.createClass( {
			render: function () {
				var item = extend( {
					url: false,
					text: false,
					date: false,
					children: false,
					key: false
				}, this.props.item );

				var classNames = [];
				if ( item.currentPath === item.url ) {
					classNames.push( 'current' );
				}
				if ( item.children && item.children.length ) {
					classNames.push( 'has-submenu' );
				}

				return item.url && (
						<li key={item.text} className={ classNames.join( ' ' ) }>
							{ item.url.match( /^http/ ) ?
								<a href={item.url}><span className="location">{item.text}</span>
									{ item.date && <span className="date">{item.date}</span> }
								</a> :
								<Link to={item.url}><span className="location">{item.text}</span>
									{ item.date && <span className="date">{item.date}</span> }
								</Link> }
							{ item.children &&
							  <ul className="submenu">
								  { item.children.map( item => {
									  return <ListItem item={item} key={item.text}/>
								  } ) }
							  </ul> }
						</li>
					)
			}
		} )

		return (
			<ListItem item={this.props} key={this.props.text}/>
		);
	}
} )
