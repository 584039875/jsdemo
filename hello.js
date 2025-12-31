function greet(name = 'World') {
	const msg = `Hello, ${name}!`;
	console.log(msg);
	return msg;
}

module.exports = { greet };
