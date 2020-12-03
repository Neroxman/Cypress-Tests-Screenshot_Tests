import { navigateTo } from "../support/page_objects/NavigationPage"

context('Test with Page Ocjects', () => {

    beforeEach('Open application', () => {
        cy.visit('http://localhost:4200')
    })

    it('verify navigations across the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()
        navigateTo.tosterPage()
    })
})