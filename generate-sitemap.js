const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");

// List of URLs to be included in the sitemap
const sitemapUrls = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/editorial", changefreq: "monthly", priority: 0.8 },
  { url: "/contactus", changefreq: "monthly", priority: 0.8 },
  // Add more routes here
];

// Create a new SitemapStream instance
const sitemapStream = new SitemapStream({
  hostname: "https://www.ijeae.com",
});

// Create a writable stream to save the sitemap to a file
const writeStream = fs.createWriteStream("./public/sitemap.xml");

// Pipe the data to the file
sitemapStream.pipe(writeStream);

// Add URLs to the sitemap
sitemapUrls.forEach((url) => {
  sitemapStream.write(url);
});

// End the stream and generate the sitemap.xml
sitemapStream.end();

// Optionally, output the sitemap XML to the console
streamToPromise(sitemapStream).then((sm) => {
  console.log(sm.toString());
});
