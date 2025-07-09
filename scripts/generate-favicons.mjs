import { favicons } from 'favicons'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

// Compatibility: resolve __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const source = path.join(__dirname, '..', 'data', 'tide-logo.svg') // logo file that the favicons will be generated from
const outputPath = path.join(__dirname, '..', 'public', 'static', 'favicons') // destination folder

const configuration = {
  path: '/', // prefix for absolute paths
  appName: 'TIDE (TUM Initiative for Data Engineering)',
  appShortName: 'TIDE',
  appDescription: '',
  developerName: '',
  background: '#ffffff',
  theme_color: '#ffffff',
  display: 'standalone',
  orientation: 'portrait',
  scope: '/',
  start_url: '/',
  version: '1.0',
  logging: false,
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: false,
    favicons: true,
    windows: true,
    yandex: false,
    coast: false,
    firefox: false,
  },
}

try {
  const response = await favicons(source, configuration)

  await fs.mkdir(outputPath, { recursive: true })

  for (const image of response.images) {
    await fs.writeFile(path.join(outputPath, image.name), image.contents)
  }
  for (const file of response.files) {
    await fs.writeFile(path.join(outputPath, file.name), file.contents)
  }

  console.log('✅ Favicons generated successfully.')
} catch (error) {
  console.error('❌ Error generating favicons:', error)
}
