const mkdirp = require('mkdirp')
const { marketingPageLinks } = require('./arrays.js')
const fs = require('fs')
const PNG = require('pngjs').PNG
const pixelmatch = require('pixelmatch')

const makeDirectory = (directoryName) => {
    const dir_exists = `cypress/support/screenshot_tests/difference/${directoryName}`

    if (!fs.existsSync(dir_exists)) {
        mkdirp(`cypress/support/screenshot_tests/difference/${directoryName}`)
    }
}

makeDirectory('website_pages')

const runComparator = (platform, array) => {
    const comparator = (correct_state, current_state, difference) => {
        correct_state = PNG.sync.read(fs.readFileSync(`cypress/screenshots/screenshot_tests/correct_state.spec.js/${platform}/${correct_state}.png`))
        current_state = PNG.sync.read(fs.readFileSync(`cypress/screenshots/screenshot_tests/current_state.spec.js/${platform}/${current_state}.png`))
        const { width, height } = correct_state
        const diff = new PNG({ width, height })

        pixelmatch(correct_state.data, current_state.data, diff.data, width, height, { alpha: 1 })

        fs.writeFileSync(`cypress/support/screenshot_tests/difference/${platform}/${difference}.png`, PNG.sync.write(diff))
    }

    for (const value of array) {
        let splited = value.split("/").pop()
        comparator(splited + '_correct', splited + '_current', splited + '_difference')
    }
}

runComparator('website_pages', marketingPageLinks)