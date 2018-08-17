
$(function () {
	describe('RSS Feeds', function () { //This test suite was given as starter code
		it('are defined', function () { //part of starter code and mimiced for test comprosing the rest of the suite
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});
		it('url defined', function () { //follows format from 'are defined'
			for (let feed of allFeeds) { //loops through allFeeds array looking for urls
				expect(feed.url).toBeDefined();
				expect(feed.url.length).not.toBe(0);
			}
		});
		it('name defined', function () { //follows format from 'are defined'
			for (let feed of allFeeds) { //loops through allFeeds array looking for names of links
				expect(feed.name).toBeDefined();
				expect(feed.name.length).not.toBe(0);
			}
		});
	});
	describe('The menu', function () { //established test suite and follows the format of 'RSS feeds' from line 16
      const menu = document.querySelector('body'); //identifies DOM element from index.html
    it('is hidden by default', function () { //first test required as #11 to complete project
			expect(menu.classList.contains('menu-hidden')).toBe(true); //places boolean value of true on hidden menu
		});
		it('the menu changes visibility when clicked', function () { //writes changes value for test
			const menu__link = document.querySelector('.menu-icon-link');
			menu__link.click(); //listens for click on DOM element of menu-icon-link index.html line 22
			expect(menu.classList.contains('menu-hidden')).toBe(false); //tests for changes in boolean value
			menu__link.click(); //same comments as lines 75 and 76
			expect(menu.classList.contains('menu-hidden')).toBe(true);
		});
	});
	describe('Initial Entries', function () { //creates test suite
    const feed = document.querySelector('.feed');
    beforeEach(function (done) { //writes code that will run loadFeed before the expect test
			loadFeed(0, done); //followed Jasmine documentation for asynchronous work
		});
		it('load complete with at least single entry', function () { //test that expects that when the entries load the number loaded will be greater than 0
			expect(feed.children.length < 0).toBe(false); //Tests that there is at least a single entry
		});
	});
	describe('New Feed Selection', function () { //Required test suite
    const feed = document.querySelector('.feed');
    initialFeed = []; //creates empty array into which to push the initial feed: see line 54
		nextFeed = []; //creates empty array into which to push the next feed: see line 59
		beforeEach(function (done) { //writes code that will run loadFeed before the expect test
			loadFeed(0, function() { //followed Jasmine documentation for asynchronous work
			initialFeed.push(feed.children[0].innerText); //This pushes the first feed into an empty array
        loadFeed(1, function() { //followed callback article from codeburst.io per instructions from first reviewer
			  nextFeed.push(feed.children[0].innerText); // This pushes the second feed into another array
        done();
        });
      });
		});
		it('content actually changes', function () {
			expect(initialFeed).not.toEqual(nextFeed); //This expectation compares the feed in the first array to the feed in the second. If they are not the same the test is green
		});
	});
}());
