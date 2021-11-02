import React from "react";
import { ServerStyleSheets } from "@mui/styles";
import Document, { Head, Main, NextScript, Html } from "next/document";
import theme from "../utils/theme";

class RootDocument extends Document {
	static async getInitialProps(ctx: any) {
		const sheets = new ServerStyleSheets();
		const originalRenderPage = ctx.renderPage;

		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App: any) => (props: any) => sheets.collect(<App {...props} />),
			});

		const initialProps = await Document.getInitialProps(ctx);
		return {
			...initialProps,
			styles: (
				<React.Fragment>
					{sheets.getStyleElement()}
					{initialProps.styles}
				</React.Fragment>
			),
		};
	}

	render() {
		return (
			<Html lang="ko">
				<Head>
					<meta charSet="utf-8" />
					<meta name="theme-color" content={theme.palette.primary.main} />
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
					<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default RootDocument;
