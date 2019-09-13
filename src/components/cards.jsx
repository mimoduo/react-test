import React, { useState } from 'react';
import '../styles/cards.scss';

function Cards() {
	const [cards] = useState([
		{
			img: 'pane-1-icon.png',
			title: 'Blue',
			caption: 'Blue is the color of the sky and the sea. It is often associated with depth and stability. It symbolizes trust, loyalty, wisom, confidence, intelligence, faith, truth, and heaven.'
		},
		{
			img: 'pane-2-icon.png',
			title: 'Green',
			caption: 'Green is the color of nature. It symbolizes growth, harmony, freshness, and fertility. Green has strong emotional corresponsdence with safety.'
		},
		{
			img: 'pane-3-icon.png',
			title: 'Red',
			caption: 'Red is the color of fire and blood, so it is associate with energy, war, danger, strength, power, determination as well as passion, desire, and love.'
		}
	]);

	function renderCards() {
		return (
			<ul className="cards">
				{ cards.map((card, index) => 
					<li className="card" key={ index }>
						<figure className="card_figure">
							<img className="card_img" src={ card.img } alt="" />
						</figure>
						<div className="card_body">
							<h2 className="card_title">{ card.title }</h2>
							<p className="card_caption">{ card.caption }</p>
						</div>
					</li>
				) }
			</ul>
		);
	}

	return (
		<section className="cards_block">
			<div className="grid cards_block_inner">
				{ renderCards() }
			</div>
		</section>
	);
}

export default Cards;