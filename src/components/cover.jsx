import React, { useState } from 'react';
import { useSelector } from "react-redux";
import '../styles/cover.scss';

function Cover() {
	const title = useSelector(state => state.user.profileObj.name);
	const [caption] = useState('Color really isn\'t that difficult to get right, if you know where to start. Learn by doing and you\'ll be a master in no time.');

	return (
		<section className="cover">
			<div className="cover_inner grid">
				<h1 className="cover_title">{ "Hi " + title + "!"}</h1>
				<p className="cover_caption">{ caption }</p>
			</div>
		</section>
	);
}

export default Cover;