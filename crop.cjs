const { Jimp } = require('jimp');
const fs = require('fs');

async function processImage(file) {
  try {
    const img = await Jimp.read(`public/${file}`);
    img.autocrop();
    await img.write(`public/${file}`);
    console.log(`Cropped ${file}`);
  } catch (err) {
    console.error(`Error with ${file}:`, err);
  }
}

const files = fs.readdirSync('public').filter(f => f.endsWith('.png'));
for (const f of files) {
  processImage(f);
}
