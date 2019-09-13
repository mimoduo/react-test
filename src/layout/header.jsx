import React from 'react';
import Logo from '../components/logo';
import Login from '../components/login';

function Header() {
	return (
		<header className="page_header">
			<div className="grid page_header_inner">
				<Logo />
				<Login />
			</div>
		</header>
	);
}

export default Header;