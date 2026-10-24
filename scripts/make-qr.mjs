// Usage:  npm run qr -- https://your-site.onrender.com
// Creates parivartan-qr.png (and parivartan-qr.svg) in this folder.
import QRCode from "qrcode";

const url = process.argv[2];
if (!url || !/^https?:\/\//.test(url)) {
  console.error("Please give your site link, e.g.  npm run qr -- https://parivartan.onrender.com");
  process.exit(1);
}
const opts = { errorCorrectionLevel: "H", margin: 2, color: { dark: "#151833", light: "#FFFFFF" } };
await QRCode.toFile("parivartan-qr.png", url, { ...opts, width: 1200 });
await QRCode.toFile("parivartan-qr.svg", url, { ...opts, type: "svg" });
console.log(`QR code created for ${url}\n  -> parivartan-qr.png (for printing / sharing)\n  -> parivartan-qr.svg (sharp at any size)`);
