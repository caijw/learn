
function test(): { [index: string]: string } {
	const env: { [index: string]: string } = {};
	env['hello'] = 'world';
	return env;
}

var env = test();
env["test_key"] = 1;