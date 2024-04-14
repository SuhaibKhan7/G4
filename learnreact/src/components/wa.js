const puppeteer = require("puppeteer");

async function scrape(url) {
    const browser = await puppeteer.launch({ headless: false }); // Launch browser in headful mode for debugging
    const page = await browser.newPage();

    await page.goto(url);

    // Wait for the QR code to load
    await page.waitForSelector("canvas", { visible: true });

    // Wait for the chat list to load
    await page.waitForSelector("div._2UaNq", { visible: true });

    // Click on the chat with the specified title
    await page.waitForSelector('span[title="Party time"]');
    await page.click('span[title="Party time"]');

    // Wait for the input field to load
    await page.waitForSelector('div._3FRCZ', { visible: true });

    // Loop to send messages
    for (let i = 0; i < 10; i++) {
        // Type and send message
        await page.type('div._3FRCZ', "ok this is magic");
        await page.keyboard.press("Enter");

        // Wait for a short interval before sending the next message
        await page.waitForTimeout(1000);
    }
}

scrape("https://web.whatsapp.com");
