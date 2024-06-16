/// <reference types="cypress" />

class HomePage {

    get assignmentTab() {
        return cy.contains("DISCOVERY SESSION")
    }

    get confirmationLocator() {
        return cy.get("#menu-main-menu")
    }

    get educationdDropdown() {
        return cy.contains("Education")
    }

    get freeCourses() {
        return cy.contains("Free Courses")
    }

}

export default HomePage