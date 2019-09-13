import React from 'react';

function Footer() {
	return (
		<footer className="page_footer">
			<div className="grid page_footer_inner">
				<div className="copyright">&copy; Bryan Stoner { (new Date().getFullYear()) }</div>
			</div>
		</footer>
	);
}

export default Footer;