import React from 'react';
import Cover from '../components/cover';
import Cards from '../components/cards';
import Comments from '../components/comments';

function Main() {
	return (
		<main className="page_main">
			<Cover />
			<Cards />
			<Comments />
		</main>
	);
}

export default Main;