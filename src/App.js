import React, { Component } from 'react';
import Heading from './components/Heading';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
let marked = require('marked');

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			markdown:
				'# This is an H1 Heading.\n## This is an H2 Heading.\n### This is an H3 Heading.\n\n**This text is bold.**\n\n*This text is italic.*\n\n1. First item of an ordered list\n2. Second item of an ordered list\n3. Third item of an ordered list\n\n- First item of an unordered list\n- Second item of an unordered list\n- Third item of an unordered list\n\n`This is code text.`\n\n[This is a link.](https://www.markdownguide.org/cheat-sheet/)',
		};
	}

	handleChange = event => {
		this.setState({ markdown: event.target.value });
	};

	render() {
		let inputStyle = {
			width: '29vw',
			height: '55vh',
			marginLeft: 'auto',
			marginRight: 'auto',
			padding: '10px',
		};

		let outputStyle = {
			width: '29vw',
			height: '55vh',
			backgroundColor: '#DCDCDC',
			marginLeft: 'auto',
			marginRight: 'auto',
			padding: '10px',
		};

		return (
			<div
				className='App'
				style={{ backgroundColor: '#484848', height: '100vh' }}
			>
				{/* Container */}
				<Container>
					{/* Row 1 */}
					<Row>
						<Col className='text-center'>
							<Heading />
						</Col>
					</Row>
					{/* Row 2 */}
					<Row className='mt-4'>
						{/* Markdown Editor Column */}
						<Col className='text-center'>
							<h3>
								<Badge variant='warning'>Markdown Input</Badge>
							</h3>
							<textarea
								className='input'
								style={inputStyle}
								value={this.state.markdown}
								onChange={this.handleChange}
							>
								{/* {console.log(this.state.markdown)} */}
							</textarea>
						</Col>
						<Col className='text-center'>
							{/* Markdown Preview Column */}
							<h3>
								<Badge variant='success'>Preview</Badge>
							</h3>
							<div
								style={outputStyle}
								dangerouslySetInnerHTML={{
									__html: marked(this.state.markdown),
								}}
							></div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

// function App() {
// 	return (
// 		<div className='App'>
// 			<header className='App-header'>
// 				<MarkdownEditor />
// 			</header>
// 		</div>
// 	);
// }

export default App;
