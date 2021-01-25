//import { marketingPageLinks, adminPanelPageLinks } from '../../../support/arrays.js'

context('Current State', () => {
  before(() => {
    cy.viewport(1920, 1024)
      .visit('http://localhost:4200/pages')
  })

  it('Page current state screenshots', () => {
    cy.currentScreenshot(marketingPageLinks)
  })

  it('Run image comparator', () => {
    cy.exec('npm run image_comparator')
  })
})