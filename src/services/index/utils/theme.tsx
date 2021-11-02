import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: "#66A091",
		},
		secondary: {
			main: "#776b61",
		},
		background: {
			default: "#fff",
		},
		success: {
			main: "#62c77c",
		},
		error: {
			main: red.A400,
		},
	},
});

export default theme;
