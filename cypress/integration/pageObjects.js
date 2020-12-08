import { onDatePickerPage } from "../support/page_objects/datepickerPage"
import { onFormLayoutsPage } from "../support/page_objects/formLayoutPage"
import { navigateTo } from "../support/page_objects/NavigationPage"
import { onSmartTablePage } from "../support/page_objects/smartTablePage"

context('Test with Page Ocjects', () => {

    beforeEach('Open application', () => {
        cy.openHomePage()
    })

    it('verify navigations across the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()
        navigateTo.tosterPage()
    })

    it('should sumbit Inline and Basic form and select tomorrow date in the calendar', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInLineFormWithNameAndEmail('Mateusz', 'test@test.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@test.com', 'password')
        navigateTo.datepickerPage()
        onDatePickerPage.selectCommonDatePickerDateFromToday(1)
        onDatePickerPage.selectDatepickerWithRangeFromToday(7, 14)
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Mateusz', 'Kowal')
        onSmartTablePage.updateAgeByFirstName('Mateusz','24')
        onSmartTablePage.deleteRowByIndex(1)
    })
})