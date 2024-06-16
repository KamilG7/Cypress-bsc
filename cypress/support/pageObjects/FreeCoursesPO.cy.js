/// <reference types="cypress" />

class FreeCourses {

get loginLocator() {
    cy.contains('#a', 'Free Courses')
}

get confirmationLocator() {
    cy.get("h2[class='collections__heading']")
}
}

export default FreeCourses