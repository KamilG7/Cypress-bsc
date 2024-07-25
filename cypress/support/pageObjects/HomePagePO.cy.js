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

    get formLink() {
        return "https://forms.clickup.com/2314027/p/f/26ktb-6387/56LKNUZ9BDYXSC73SY/unlock-your-automation-potentialwitha-free-framework-assessment"
    }
}

export default HomePage