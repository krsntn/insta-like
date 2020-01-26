async function autoLogin(page, username, password) {
	// username
	const usernameElement =
		'#react-root > section > main > div > article > div > div:nth-child(1) > div > form > div:nth-child(2) > div > label > input';
	await page.waitFor(usernameElement);
	await page.type(usernameElement, username);

	// password
	const passwordElement =
		'#react-root > section > main > div > article > div > div:nth-child(1) > div > form > div:nth-child(3) > div > label > input';
	await page.waitFor(passwordElement);
	await page.type(passwordElement, password);

	// login button
	const submitButton = await page.waitFor(
		'#react-root > section > main > div > article > div > div:nth-child(1) > div > form > div:nth-child(4) > button'
	);
	await submitButton.evaluate(btn => btn.click());

	// close notification pop up (enable only when headless = false)
	// const closeButton = await page.waitFor(
	// 	'body > div.RnEpo.Yx5HN > div > div > div.mt3GC > button.aOOlW.HoLwm'
	// );
	// await closeButton.evaluate(btn => btn.click());
}

module.exports.autoLogin = autoLogin;
