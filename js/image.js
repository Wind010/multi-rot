const fetch = require('node-fetch');
const cheerio = require('cheerio');

async function getImageUrls(query) {
    const url = `https://www.bing.com/images/search?q=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    const imageUrls = [];
    $('img').each((i, el) => {
        const src = $(el).attr('src');
        if (src && src.startsWith('http')) imageUrls.push(src);
    });
    return imageUrls;
}