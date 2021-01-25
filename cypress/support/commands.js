Cypress.Commands.add('openHomePage', () => {
    cy.visit('http://localhost:4200')
})

const lastWord = (words) => {
    return words.split("/").pop()
}
  
Cypress.Commands.add('correctScreenshot', (array) => {
    let i = 0
    for (const value of array) {
      cy.visit(value, { failOnStatusCode: false })
        .window()
        .wait(3000)
        .screenshot('website_pages/' + lastWord(array[i]) + '_correct')
      i++
    }
})
  
Cypress.Commands.add('currentScreenshot', (array) => {
    let i = 0
    for (const value of array) {
      cy.visit(value, { failOnStatusCode: false })
        .window()
        .wait(3000)
        .screenshot('website_pages/' + lastWord(array[i]) + '_current')
      i++
    }
})