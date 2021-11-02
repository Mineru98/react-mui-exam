import cookieParser from "cookie-parser";
import express from "express";
import asyncify from "express-asyncify";
import next from "next";
import path from "path";
import conf from "./next.config";

const dev = process.env.MODE_ENV === undefined;
const port = process.env.PORT;

async function main() {
	const nextApp = next({
		conf,
		dev,
		dir: path.resolve(__dirname, "./"),
	});

	await nextApp.prepare();

	const app = asyncify(express());

	app.use(cookieParser());
	app.use(express.static(path.join(__dirname, "../public")));
	app.use("/_next", express.static(path.join(__dirname, "../.next")));

	app.use((req: any, res: any) => {
		return nextApp.render(req, res, req._parsedUrl.pathname, req.query);
	});
	app.listen(port);
}

main();
