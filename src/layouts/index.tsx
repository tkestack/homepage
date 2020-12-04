import React, { useState } from "react";
import Footer from "./../components/footer";
import Header from "../components/header";

export default ({ content }) => {
	const [openMenuName, setOpenMenuName] = useState<string | null>(null);

	return (
		<div className="font-sans">
			<Header openMenuName={openMenuName} setOpenMenuName={setOpenMenuName} />
			<main
				className="min-w-full"
				onClick={(e) => {
					setOpenMenuName(null);
				}}>
				{content}
			</main>
			<Footer />
		</div>
	);
};
