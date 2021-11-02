import React, { useEffect } from "react";
import document from "global/document";
import { NextComponentType } from "next";
import Head from "next/head";
import { CookiesProvider } from "react-cookie";
import { ThemeProvider } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "../utils/theme";

interface RootAppProps {
	Component: NextComponentType;
	pageProps: any;
	uuid: string;
}

function RootApp({ Component, pageProps }: RootAppProps) {
	useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentNode.removeChild(jssStyles);
		}
		const { initialState } = pageProps;
		if (initialState) {
		}
	}, []);

	return (
		<React.Fragment>
			<CookiesProvider>
				<Head>
					<title>Test</title>
					<meta name="viewport" content="initial-scale=1, width=device-width" />
				</Head>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</CookiesProvider>
		</React.Fragment>
	);
}

export default RootApp;
