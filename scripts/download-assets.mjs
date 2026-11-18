#!/usr/bin/env node
/**
 * Download Skillshare join/home landing assets into public/
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join, basename } from "node:path";
import { createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { Readable } from "node:stream";

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const assets = [
  // Favicons / SEO
  ["https://static.skillshare.com/assets/images/favicons/favicon.ico", "seo/favicon.ico"],
  ["https://static.skillshare.com/assets/images/favicons/favicon.svg", "seo/favicon.svg"],
  ["https://static.skillshare.com/assets/images/favicons/favicon-32.png", "seo/favicon-32.png"],
  ["https://static.skillshare.com/assets/images/favicons/favicon-180.png", "seo/favicon-180.png"],
  ["https://static.skillshare.com/assets/images/favicons/favicon-192.png", "seo/favicon-192.png"],
  ["https://cdn.builder.io/api/v1/image/assets%2F8d23724fcd03491988e72adbef2f87fc%2F480158f2aff04ea59ce9808bb3737311", "seo/og-image.jpg"],

  // Hero collage (join page)
  ["https://cdn.builder.io/api/v1/image/assets%2F8d23724fcd03491988e72adbef2f87fc%2F86050e9b7ba14fb495b918bd427866ec?format=webp&width=800", "images/hero/tablet-drawing.webp"],
  ["https://cdn.builder.io/api/v1/image/assets%2F8d23724fcd03491988e72adbef2f87fc%2F2169995105cd452091c277417a6a0ec8?format=webp&width=800", "images/hero/purple-hair-illustration.webp"],
  ["https://cdn.builder.io/api/v1/image/assets%2F8d23724fcd03491988e72adbef2f87fc%2Fb351b14556f34db993fd1d2043244569?format=webp&width=800", "images/hero/woman-red-shirt.webp"],

  // Hero ribbon / decorative backgrounds
  ["https://cdn.builder.io/api/v1/image/assets%2F8d23724fcd03491988e72adbef2f87fc%2F62244496ebef40a19a5f187345736123", "images/hero/ribbon-stroke.png"],
  ["https://cdn.builder.io/api/v1/image/assets%2F8d23724fcd03491988e72adbef2f87fc%2F368e02b59dd04903be1a789fcbbc80ea", "images/hero/hero-bg-texture.png"],
  ["https://cdn.builder.io/api/v1/image/assets%2F8d23724fcd03491988e72adbef2f87fc%2Fe3ee5983c7d54291958e6e2b659923f3", "images/hero/hero-accent.png"],

  // Staff pick / logo bits
  ["https://cdn.builder.io/api/v1/image/assets%2F8d23724fcd03491988e72adbef2f87fc%2Fb30f2778a5414743bc28c8c9593381b8", "images/ui/skillshare-wordmark.png"],

  // Category carousel
  ...[
    "graphic_design",
    "illustration",
    "animation",
    "film_video",
    "freelance",
    "ui_ux_design",
    "productivity",
    "photography",
    "fine_art",
    "marketing",
  ].map((name) => [
    `https://static.skillshare.com/assets/images/loh/category_carousel/320x400/${name}.webp`,
    `images/categories/${name}.webp`,
  ]),

  // Class thumbnails (Featured)
  ["https://static.skillshare.com/uploads/video/thumbnails/c227aee2f172d06354b0913d8beb4eb9/original", "images/classes/procreate-kickstart.jpg"],
  ["https://static.skillshare.com/uploads/video/thumbnails/5c03d7d3748360229b36ccca4a91d9c4/original", "images/classes/canva-social.jpg"],
  ["https://static.skillshare.com/uploads/video/thumbnails/16adbf2bb764e627e50abfe55a9dae30/original", "images/classes/watercolour-landscapes.jpg"],
  ["https://static.skillshare.com/uploads/video/thumbnails/2fd01a75604e4f81e115b4baaf005786/original", "images/classes/figma-advanced.jpg"],
  ["https://static.skillshare.com/uploads/video/thumbnails/3cf2771682c79357834c2579a2a73116/original", "images/classes/chatgpt-creatives.jpg"],
  ["https://static.skillshare.com/uploads/video/thumbnails/c69b0a6739ac2a05a60637b593efa6f0/original", "images/classes/how-to-draw.jpg"],
  ["https://static.skillshare.com/uploads/video/thumbnails/6afe10afdc498ffda294211907d77be1/original", "images/classes/premiere-beginners.jpg"],
  ["https://static.skillshare.com/uploads/video/thumbnails/aa9959938f6150ad7ffbba87f6f3a0c7/original", "images/classes/iphone-photography.jpg"],

  // Teachers
  ["https://cdn.builder.io/api/v1/image/assets%2F8d23724fcd03491988e72adbef2f87fc%2F1898aaa048ad43abb0a8fc2c7fe30343?format=webp", "images/teachers/lisa-bardot.webp"],
  ["https://cdn.builder.io/api/v1/image/assets%2F8d23724fcd03491988e72adbef2f87fc%2Ff319a24e55374b248fe869f5a17e1e9c?format=webp", "images/teachers/daniel-scott.webp"],
  ["https://cdn.builder.io/api/v1/image/assets%2F8d23724fcd03491988e72adbef2f87fc%2F55ae3bd106724f82917e37d92d20e832?format=webp", "images/teachers/derek-elliot.webp"],
  ["https://cdn.builder.io/api/v1/image/assets%2F8d23724fcd03491988e72adbef2f87fc%2F9966984835d1489db2cf117c57524eab?format=webp", "images/teachers/aaron-draplin.webp"],
  ["https://cdn.builder.io/api/v1/image/assets%2F8d23724fcd03491988e72adbef2f87fc%2F75c0cf42037b4d9b8f808b3c0ea4c1c0", "images/teachers/zaneena-nabeel.webp"],
  ["https://cdn.builder.io/api/v1/image/assets%2F8d23724fcd03491988e72adbef2f87fc%2F5a03c01cc81344edaedef3b9d91c85b6", "images/teachers/emonee-larussa.webp"],
  ["https://cdn.builder.io/api/v1/image/assets%2F8d23724fcd03491988e72adbef2f87fc%2F6244f1265ebc4b9a96df5e83ffe516e9?format=webp", "images/teachers/brent-eviston.webp"],
  ["https://cdn.builder.io/api/v1/image/assets%2F8d23724fcd03491988e72adbef2f87fc%2F95e347f1e48c4e4fa3f75340607852ca?format=webp", "images/teachers/jordy-vandeput.webp"],

  // Creative feed / other builder assets
  ["https://cdn.builder.io/api/v1/image/assets%2F8d23724fcd03491988e72adbef2f87fc%2F192780c3834e4efcae1ebcf233e6d9f3", "images/feed/feed-1.png"],
  ["https://cdn.builder.io/api/v1/image/assets%2F8d23724fcd03491988e72adbef2f87fc%2F2c52ddcfa998478b902aa258b12ec1ce", "images/feed/feed-2.png"],
  ["https://cdn.builder.io/api/v1/image/assets%2F8d23724fcd03491988e72adbef2f87fc%2F60fa93265ea448578fbbc62ec3f01b36", "images/feed/feed-3.png"],
  ["https://cdn.builder.io/api/v1/image/assets%2F8d23724fcd03491988e72adbef2f87fc%2Fe6ed42d6f2a840b893261cd260a617a1", "images/feed/feed-4.png"],
  ["https://cdn.builder.io/api/v1/image/assets%2F8d23724fcd03491988e72adbef2f87fc%2Ffe6ca0488ef54cef93cfcd17efe4ab14", "images/ui/testimonial-1.png"],
  ["https://cdn.builder.io/api/v1/image/assets%2F8d23724fcd03491988e72adbef2f87fc%2F26f53e79820f444aa2207f7e416d8ed6", "images/ui/testimonial-2.png"],

  // Teams + press
  ["https://static-web-prod.skillshare.com/_next/static/images/skillshare_for_teams-c4a85c8c5a4eef0fee7c493669965f5b.webp", "images/teams/skillshare-for-teams.webp"],
  ["https://static-web-prod.skillshare.com/_next/static/images/featured_in_logos-300fb6165975ac4e4bcd58a9b6c374cd.webp", "images/press/featured-in-logos.webp"],

  // Social icons
  ...["instagram", "tiktok-logo", "pinterest", "twitter", "facebook", "linkedin", "youtube"].map(
    (name) => [
      `https://static.skillshare.com/assets/images/loh/social-icons/${name}.svg`,
      `images/social/${name}.svg`,
    ]
  ),
];

async function download(url, destRel) {
  const dest = join("/workspace/public", destRel);
  await mkdir(dirname(dest), { recursive: true });
  const res = await fetch(url, { headers: { "User-Agent": UA, Accept: "*/*" } });
  if (!res.ok) {
    return { ok: false, url, dest: destRel, status: res.status };
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  return { ok: true, url, dest: destRel, bytes: buf.length };
}

async function runPool(items, size, fn) {
  const results = [];
  let i = 0;
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await fn(items[idx], idx);
    }
  }
  await Promise.all(Array.from({ length: size }, () => worker()));
  return results;
}

const results = await runPool(assets, 4, ([url, dest]) => download(url, dest));
const ok = results.filter((r) => r.ok);
const fail = results.filter((r) => !r.ok);
console.log(`Downloaded ${ok.length}/${assets.length}`);
if (fail.length) {
  console.log("Failures:");
  for (const f of fail) console.log(`  ${f.status} ${f.dest}`);
}
await writeFile(
  "/workspace/docs/research/asset-download-report.json",
  JSON.stringify({ ok: ok.length, fail, results }, null, 2)
);
