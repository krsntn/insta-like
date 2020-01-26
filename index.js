const puppeteer = require('puppeteer');
const { autoLogin } = require('./scripts/login');
const { likePosts } = require('./scripts/likePost');
const { getCaptions } = require('./scripts/getCaption');

(async () => {
	try {
		// input ----------------------------------
		const website =
			'https://www.instagram.com/accounts/login/?source=auth_switcher';
		const username = process.argv[2];
		const password = process.argv[3];
		const totalToLikePosts = process.argv[4];
		// ----------------------------------------

		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.goto(website);

		await autoLogin(page, username, password);
		await likePosts(page, totalToLikePosts);
		// await getCaptions(page);

		await browser.close();
	} catch (e) {
		console.log('error', e);
	}
})();
