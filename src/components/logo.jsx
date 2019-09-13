import React from 'react';
import '../styles/logo.scss';

function Logo() {
	return (
		<a className="logo" href="https://www.bytelion.com/" target="_blank" rel="noopener noreferrer">
			<span className="logo_label">byte.lion</span>
			<img className="logo_icon" src="bytelion-logo.png" alt="" />
		</a>
	);
}

export default Logo;