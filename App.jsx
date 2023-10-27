import React from "react";
import Card from "./entry";
import contacts from "./contacts";
import CardF from "./entryF";

function App() {
	return (
		<div className="bada">
			<h1 className="heading">
				<span> Clubs Of BIT Mesra</span>
			</h1>

			<h2>The Ultimate Plateform for Enterprenures</h2>

			<div className="card2">
				<Card
					name={contacts[0].name}
					img={contacts[0].imgURL}
					description={contacts[0].description}
					link={contacts[0].link}
				/>
			</div>
			<h2>Here comes The Coding Clubs</h2>
			<div className="hard">
				<div className="card">
					<Card
						name={contacts[1].name}
						img={contacts[1].imgURL}
						description={contacts[1].description}
						link={contacts[1].link}
					/>
				</div>
				<div className="card">
					<Card
						name={contacts[2].name}
						img={contacts[2].imgURL}
						description={contacts[2].description}
						link={contacts[2].link}
					/>
				</div>
				<br />
			</div>
			<h2>The Engine Guys </h2>
			<div className="card2">
				<div className="card">
					<Card
						name={contacts[7].name}
						img={contacts[7].imgURL}
						description={contacts[7].description}
						link={contacts[7].link}
					/>
				</div>
				<div className="card">
					<Card
						name={contacts[5].name}
						img={contacts[5].imgURL}
						description={contacts[5].description}
						link={contacts[5].link}
					/>
				</div>
				<div className="card">
					<Card
						name={contacts[6].name}
						img={contacts[6].imgURL}
						description={contacts[6].description}
						link={contacts[6].link}
					/>
				</div>
			</div>
			<h2>The Event Managers</h2>
			<div className="card2">
				<div className="card">
					<Card
						name={contacts[3].name}
						img={contacts[3].imgURL}
						description={contacts[3].description}
						link={contacts[3].link}
					/>
				</div>
				<div className="card">
					<Card
						name={contacts[4].name}
						img={contacts[4].imgURL}
						description={contacts[4].description}
						link={contacts[4].link}
					/>
				</div>
			</div>
			<h2>Not ME But YOU</h2>
			<div className="card2">
				<Card
					name={contacts[8].name}
					img={contacts[8].imgURL}
					description={contacts[8].description}
					link={contacts[8].link}
				/>
			</div>
			<h2>The Cultural Clubs</h2>
			<div className="card2">
				<div className="card">
					<Card
						name={contacts[9].name}
						img={contacts[9].imgURL}
						description={contacts[9].description}
						link={contacts[9].link}
					/>
				</div>
				<div className="card">
					<Card
						name={contacts[10].name}
						img={contacts[10].imgURL}
						description={contacts[10].description}
						link={contacts[10].link}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
