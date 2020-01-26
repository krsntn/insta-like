async function likePosts(page, totalToLikePosts) {
	page.on('console', consoleObj => console.log(consoleObj.text()));

	let likedPost = 0;

	while (likedPost < totalToLikePosts) {
		await page.waitFor('.fr66n > button');
		await page.waitFor(5000);

		const btns = await page.$$('.fr66n > button');
		console.log('post length:', btns.length);

		// like post
		for (let i = 0; i < btns.length; i++) {
			const liked = await page.evaluate(i => {
				const likeButtons = document.querySelectorAll('.fr66n > button');
				const btn = likeButtons[i];
				if (btn.querySelector('svg[aria-label="Like"]')) {
					btn.click();
					console.log('liked');
					return true;
				}
				console.log('skipped');
				return false;
			}, i);

			if (liked) {
				likedPost++;
				console.log('likedPost', likedPost);

				if (likedPost >= totalToLikePosts) {
					break;
				}

				// if liked post is last element, then skip waiting time
				if (i !== btns.length - 1) await page.waitFor(8000);
			}
		}

		// scroll to bottom
		if (likedPost < totalToLikePosts) {
			await page.evaluate(() => {
				window.scrollTo(0, document.body.scrollHeight);
				console.log('scroll to bottom');
			});
		}
	}
}

module.exports.likePosts = likePosts;
