import React from "react";
import AppBarLayout from "../components/AppBar";
import HomeLayout from "../components/Home";

function index() {
	return (
		<main>
			<AppBarLayout>
				<HomeLayout />
			</AppBarLayout>
		</main>
	);
}

export default index;
