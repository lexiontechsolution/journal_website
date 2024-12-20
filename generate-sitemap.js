const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

(async () => {
    const links = [
        { url: '/', changefreq: 'daily', priority: 1.0 },
        { url: '/about', changefreq: 'weekly', priority: 0.8 },
        { url: '/contact', changefreq: 'monthly', priority: 0.7 },
        { url: '/research', changefreq: 'weekly', priority: 0.9 },
        // Add more URLs as per your site structure
    ];

    const sitemap = new SitemapStream({ hostname: 'https://www.ijeae.com' });
    const writeStream = createWriteStream('./public/sitemap.xml');

    streamToPromise(sitemap.pipe(writeStream)).catch(console.error);

    links.forEach(link => sitemap.write(link));
    sitemap.end();

    console.log('Sitemap successfully generated at ./public/sitemap.xml');
})();
