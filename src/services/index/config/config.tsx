const API_PATH = process.env.API_PATH || "http://localhost:3000";
const BASE_URL = process.env.BASE_URL || "http://localhost";
const HTTP_ONLY = process.env.MODE_ENV === "production" ? true : false;
const DOMAIN = process.env.DOMAIN || "localhost";

export { API_PATH, BASE_URL, HTTP_ONLY, DOMAIN };
