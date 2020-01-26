async function getCaptions(page) {
	page.on('console', consoleObj => console.log(consoleObj.text()));

	let captions = [];

	for (let i = 0; i < 1; i++) {
		await page.waitFor('.sXUSN');
		await page.waitFor(3000);

		await page.evaluate(() => {
			const moreButton = document.querySelectorAll('.sXUSN');
			for (let btn of moreButton) {
				btn.click();
			}
		});

		captions = await page.evaluate(() => {
			return [
				...document.querySelectorAll(
					'article > div.eo2As > div.Igw0E.IwRSH.eGOV_._4EzTm.XfCBB > div.Igw0E.IwRSH.eGOV_._4EzTm.pjcA_ > div > span > span'
				),
			].map(el => el.innerText);
		});
		console.log(captions);
		// await page.reload({ waitUntil: ['networkidle0', 'domcontentloaded'] });
	}
}

module.exports.getCaptions = getCaptions;
