import React, { Component } from 'react';
import Badge from 'react-bootstrap/Badge';

class Header extends Component {
	render() {
		return (
			<div>
				<h1>
					<Badge className='text-align-center mt-4' variant='light'>
						<u>Markdown Previewer</u>
					</Badge>
				</h1>
			</div>
		);
	}
}

export default Header;
