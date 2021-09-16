const { NODE_ENV } = process.env;

if (NODE_ENV === process.env.BABEL_ENV) {
	console.log("hello world");
}