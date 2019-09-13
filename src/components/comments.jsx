import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/comments.scss';

function Comments() {
	const [comments, setComments] = useState([]);
	
	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/comments')
			.then(response => {
				setComments(response.data);
			}).catch(function (error) {
				console.log(error);
			})
	}, []);

	function renderComments() {
		if (comments.length === 0 ) {
			return <p className="comments_empty">There are no comments.</p>
		}
		
		return (
			<ol className="comments">
				{ comments.map(comment => 
					<li className="comment_item" key={ comment.id }>
						<div className="comment">
							<div className="comment_author">
								<span className="comment_author_label">Posted by </span><a className="comment_author_link" href={"mailto:" + comment.email }>{ comment.name }</a>
							</div>
							<div className="comment_body">{ comment.body }</div>
						</div>
					</li>
				) }
			</ol>
		);
	}

	return (
		<div className="comments_block">
			<div className="grid comments_block_inner">
				<div className="comments_header">
					<h2 className="comments_title">Community Comments</h2>
				</div>
				{ renderComments() }
			</div>
		</div>
	);
}

export default Comments;