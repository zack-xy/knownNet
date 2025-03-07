import { SitemapStream, streamToPromise } from 'sitemap'
import { createWriteStream } from 'fs'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

// 获取当前文件的目录
const __dirname = fileURLToPath(new URL('.', import.meta.url));

// 定义生成 Sitemap 的函数
export default function generateSitemap() {
  // 定义站点URL
  const siteUrl = 'https://zack-xy.github.io/knownNet/'

  // 定义页面路径
  const pages = [
    { url: '/', changefreq: 'yearly', priority: 0.8 },
    { url: '/program/pieces', changefreq: 'weekly', lastmod: new Date().toISOString(), priority: 1 },
    { url: '/program/issues', changefreq: 'weekly', lastmod: new Date().toISOString(), priority: 1 },
    { url: '/program/specialColumn', changefreq: 'daily', lastmod: new Date().toISOString(), priority: 1 },
    { url: '/books/techAndCodes', changefreq: 'daily', lastmod: new Date().toISOString(), priority: 0.8 },
    { url: '/books/socialSciences', changefreq: 'daily', lastmod: new Date().toISOString(), priority: 0.8 },
    { url: '/others/interview', changefreq: 'daily', lastmod: new Date().toISOString(), priority: 0.8 },
    { url: '/others/feature', changefreq: 'daily', lastmod: new Date().toISOString(), priority: 1 },
    { url: '/others/dsa', changefreq: 'daily', lastmod: new Date().toISOString(), priority: 1 },
    { url: 'knownNet/blogs', changefreq: 'monthly', lastmod: new Date().toISOString(), priority: 0.8 },
  ];

  // 创建 Sitemap 流
  const stream = new SitemapStream({ hostname: siteUrl });

  // 将 Sitemap 写入文件
  const writeStream = createWriteStream(resolve(__dirname, 'dist', 'sitemap.xml'));
  stream.pipe(writeStream);

  // 添加页面到 Sitemap
  pages.forEach(page => stream.write(page));

  // 结束流
  stream.end();

  // 生成 Sitemap
  streamToPromise(stream).then(() => console.log('Sitemap generated successfully!'));
}
