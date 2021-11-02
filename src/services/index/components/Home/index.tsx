import { Container, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const MyComponent = styled("div")({
	color: "darkslategray",
	backgroundColor: "aliceblue",
	padding: 8,
	borderRadius: 4,
});

function HomeLayout() {
	return (
		<Container maxWidth="sm">
			<Box sx={{ my: 4 }}>
				<Typography variant="h4" component="h1" gutterBottom>
					Next.js v5-beta with TypeScript example
				</Typography>
				<MyComponent>Styled div</MyComponent>
			</Box>
		</Container>
	);
}

export default HomeLayout;
