import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, "..");
const sourceDir = path.join(rootDir, "..", "Main", "anvogue-html");
const contentDir = path.join(rootDir, "content");

if (!fs.existsSync(sourceDir)) {
  console.log("Template source not found, skipping page preparation (using committed content/).");
  process.exit(0);
}

const ROUTE_MAP = {
  "index.html": "/",
  "shop-default.html": "/shop",
  "shop-breadcrumb1.html": "/shop",
  "shop-breadcrumb2.html": "/shop",
  "shop-breadcrumb-img.html": "/shop",
  "shop-default-grid.html": "/shop",
  "shop-default-list.html": "/shop",
  "shop-fullwidth.html": "/shop",
  "shop-square.html": "/shop",
  "shop-collection.html": "/shop",
  "shop-filter-canvas.html": "/shop",
  "shop-filter-dropdown.html": "/shop",
  "shop-filter-options.html": "/shop",
  "shop-sidebar-list.html": "/shop",
  "product-default.html": "/product",
  "product-variable.html": "/product",
  "product-sidebar.html": "/product",
  "product-sale.html": "/product",
  "product-discount.html": "/product",
  "product-on-sale.html": "/product",
  "product-out-of-stock.html": "/product",
  "product-countdown-timer.html": "/product",
  "product-thumbnail-left.html": "/product",
  "product-thumbnail-bottom.html": "/product",
  "product-one-scrolling.html": "/product",
  "product-two-scrolling.html": "/product",
  "product-fixed-price.html": "/product",
  "product-external.html": "/product",
  "product-grouped.html": "/product",
  "product-bought-together.html": "/product",
  "product-combined-one.html": "/product",
  "product-combined-two.html": "/product",
  "product-style1.html": "/product",
  "product-style2.html": "/product",
  "product-style3.html": "/product",
  "product-style4.html": "/product",
  "product-style5.html": "/product",
  "cart.html": "/cart",
  "checkout.html": "/checkout",
  "checkout2.html": "/checkout",
  "about.html": "/about",
  "contact.html": "/contact",
  "wishlist.html": "/wishlist",
  "compare.html": "/compare",
  "login.html": "/login",
  "register.html": "/register",
  "forgot-password.html": "/forgot-password",
  "my-account.html": "/account",
  "order-tracking.html": "/order-tracking",
  "faqs.html": "/faqs",
  "search-result.html": "/search",
  "blog-default.html": "/blog",
  "blog-grid.html": "/blog",
  "blog-list.html": "/blog",
  "blog-detail1.html": "/blog",
  "blog-detail2.html": "/blog",
  "page-not-found.html": "/404",
  "customer-feedbacks.html": "/reviews",
  "store-list.html": "/stores",
};

const PAGE_FILES = {
  index: "index.html",
  shop: "shop-default.html",
  product: "product-default.html",
  cart: "cart.html",
  checkout: "checkout.html",
  about: "about.html",
  contact: "contact.html",
  wishlist: "wishlist.html",
  login: "login.html",
  register: "register.html",
  faqs: "faqs.html",
  search: "search-result.html",
  blog: "blog-detail1.html",
  notFound: "page-not-found.html",
};

const CONTENT_REPLACEMENTS = [
  [/Anvogue/g, "CaseVogue"],
  [/Summer Sale Collections/g, "Premium Phone Cases Sale"],
  [/Fashion for Every Occasion/g, "Protection for Every Phone"],
  [/Stylish Looks for Any Season/g, "Stylish Cases for Every Season"],
  [/Sale! Up To 50% Off!/g, "Up To 50% Off Phone Cases!"],
  [/What's new/g, "New Arrivals"],
  [/Dive into Savings <br \/>on Swimwear/g, "Save Big on <br />Phone Cases"],
  [/20% off <br \/>accessories/g, "20% off <br />Screen Protectors"],
  [/For Men/g, "iPhone Cases"],
  [/For Women/g, "Samsung Cases"],
  [/For Kid/g, "Google Pixel"],
  [/For Home/g, "Accessories"],
  [/Skincare/g, "Rugged Cases"],
  [/Health/g, "Clear Cases"],
  [/Massimo Dutti/g, "MagSafe Cases"],
  [/Starting From 50% Off/g, "Up To 50% Off"],
  [/Outerwear \| Coats/g, "iPhone 16 Series"],
  [/Sweaters \| Cardigans/g, "iPhone 15 Series"],
  [/Shirt \| Sweatshirts/g, "iPhone 14 Series"],
  [/Dress \| Jumpsuits/g, "Galaxy S25 Series"],
  [/T-shirts \| Sweatshirts/g, "Galaxy S24 Series"],
  [/Accessories \| Jewelry/g, "Galaxy A Series"],
  [/Kids Bed/g, "Pixel 9 Series"],
  [/Boy's Toy/g, "Pixel 8 Series"],
  [/Baby Blanket/g, "Pixel 7 Series"],
  [/Newborn Clothing/g, "Pixel 6 Series"],
  [/Furniture \| Decor/g, "Screen Protectors"],
  [/Table \| Living Room/g, "Chargers & Cables"],
  [/Chair \| Work Room/g, "Phone Grips"],
  [/Lighting \| Bed Room/g, "Card Holders"],
  [/Faces Skin/g, "Shockproof Cases"],
  [/Eyes Makeup/g, "Slim Cases"],
  [/Lip Polish/g, "Wallet Cases"],
  [/Hair Care/g, "Battery Cases"],
  [/Cented Candle/g, "Clear Cases"],
  [/Health Drinks/g, "Silicone Cases"],
  [/Yoga Clothes/g, "Leather Cases"],
  [/Yoga Equipment/g, "Flip Cases"],
  [/data-item="t-shirt"/g, 'data-item="iphone"'],
  [/data-item="dress"/g, 'data-item="samsung"'],
  [/data-item="sets"/g, 'data-item="google"'],
  [/data-item="shirt"/g, 'data-item="accessories"'],
  [/>t-shirt</g, ">iPhone<"],
  [/>dress</g, ">Samsung<"],
  [/>sets</g, ">Google<"],
  [/>shirt</g, ">Accessories<"],
  [/>top</g, ">All<"],
];

function extractScripts(html) {
  const scripts = [];
  const regex = /<script src="\.\/assets\/js\/([^"]+)"><\/script>/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    scripts.push(match[1]);
  }
  return scripts;
}

function transformHtml(html) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (!bodyMatch) {
    throw new Error("Missing body tag");
  }

  let content = bodyMatch[1].replace(/<script[\s\S]*?<\/script>/gi, "").trim();
  content = content.replace(/\.\/assets\//g, "/assets/");
  content = content.replace(/\.\/dist\//g, "/dist/");

  for (const [htmlFile, route] of Object.entries(ROUTE_MAP)) {
    const escaped = htmlFile.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    content = content.replace(new RegExp(`href="${escaped}([^"]*)"`, "g"), (_m, suffix) => {
      if (suffix.startsWith("?")) return `href="${route}${suffix}"`;
      return `href="${route}${suffix}"`;
    });
    content = content.replace(new RegExp(`href='${escaped}([^']*)'`, "g"), (_m, suffix) => {
      return `href='${route}${suffix}'`;
    });
  }

  for (const [pattern, replacement] of CONTENT_REPLACEMENTS) {
    content = content.replace(pattern, replacement);
  }

  return content;
}

function extractTitle(html) {
  const match = html.match(/<title>([^<]*)<\/title>/i);
  return match ? match[1].replace(/Anvogue/g, "CaseVogue") : "CaseVogue";
}

if (!fs.existsSync(contentDir)) {
  fs.mkdirSync(contentDir, { recursive: true });
}

const manifest = {};

for (const [key, fileName] of Object.entries(PAGE_FILES)) {
  const sourcePath = path.join(sourceDir, fileName);
  if (!fs.existsSync(sourcePath)) {
    console.warn(`Skipping missing file: ${fileName}`);
    continue;
  }

  const html = fs.readFileSync(sourcePath, "utf8");
  const body = transformHtml(html);
  const scripts = extractScripts(html);
  const title = extractTitle(html);

  fs.writeFileSync(path.join(contentDir, `${key}.html`), body, "utf8");
  manifest[key] = { title, scripts, source: fileName };
  console.log(`Prepared ${key} from ${fileName}`);
}

fs.writeFileSync(
  path.join(contentDir, "manifest.json"),
  JSON.stringify(manifest, null, 2),
  "utf8"
);

console.log("Done preparing pages.");
