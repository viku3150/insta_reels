import React from "react";
import "./VideoFooter.css";
import { Button, Avatar } from "@mui/material";
import {
	MusicNote,
	Favorite,
	ModeComment,
	Send,
	MoreHoriz,
} from "@mui/icons-material";
import Ticker from "react-ticker";

const VideoFooter = ({ channel, song, likes, shares, avatarSrc }) => {
	return (
		<div className="videoFooter">
			<div className="videoFooter_text">
				<Avatar src={avatarSrc} />
				<h3>
					{channel} <Button classname="follow">Follow</Button>
				</h3>
			</div>
			<div className="videoFooter_ticker">
				<MusicNote className="videoFooter__icon" />
				<Ticker mode="smooth">{({ index }) => <h1>{song}</h1>}</Ticker>
			</div>
			<div className="videoFooter__actions">
				<div className="videoFooter__actionsLeft">
					<Favorite fontSize="medium" />
					<ModeComment fontSize="medium" />
					<Send fontSize="medium" />
					<MoreHoriz fontSize="medium" />
				</div>
				<div className="videoFooter__actionsRight">
					<div className="videoFooter__stat">
					<Favorite/>
					<p>{likes}</p>
	
					</div>
					<div className="videoFooter__stat">
						<ModeComment/>
						<p>{shares}</p>
					</div>

				</div>
			</div>
		</div>
	);
};

export default VideoFooter;
