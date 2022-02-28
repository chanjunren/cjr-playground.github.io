import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function SidebarIcon({ icon, text, path }) {
	const navigate = useNavigate();
	const clickHandler = () => navigate(path);
	return (
		<div className="sidebar-icon" onClick={clickHandler}>
			{icon}
			<span className="sidebar-tooltip">
				{text}
			</span>
		</div>
	);
}
