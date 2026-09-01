// Converte os PNGs de public/images para WebP otimizado (máx. 1600px de largura).
import sharp from 'sharp'
import { readdir, unlink, stat } from 'node:fs/promises'
import { join } from 'node:path'

const dir = new URL('../public/images/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')
const files = (await readdir(dir)).filter(f => f.endsWith('.png'))

for (const file of files) {
  const src = join(dir, file)
  const dest = src.replace(/\.png$/, '.webp')
  await sharp(src).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 80 }).toFile(dest)
  const { size } = await stat(dest)
  console.log(`${file} -> ${file.replace('.png', '.webp')} (${(size / 1024).toFixed(0)} KB)`)
  await unlink(src)
}
