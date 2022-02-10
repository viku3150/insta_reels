import React, { useEffect, useState } from "react";
import "./App.css";
import VideoCard from "./VideoCard";
import db from "./firebase";

const App = () => {
	const [reels, setReels] = useState([]);
	useEffect(() => {
		db.collection("reels").onSnapshot((snapshot) =>
			setReels(snapshot.docs.map((doc) => doc.data()))
		);
	}, []);
	return (
		<div className="app">
			<div className="app__top">
				{/* Image */}
				<img
					className="app__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
					alt=""></img>
				{/* Reels */}
				<h1>Reels</h1>
			</div>
			<div className="app__videos">
				{/* Container of app__videos(scrollable)*/}
				{reels.map(({channel, avatarSrc, song, url, likes, shares}) => (
					<VideoCard
					channel={channel}
					avatarSrc={avatarSrc}
					song={song}
					url={url}
					likes={likes}
					shares={shares}
				/>))}
				
			</div>
		</div>
	);
};

export default App;
