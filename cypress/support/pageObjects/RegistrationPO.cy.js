/// <reference types="cypress" />

class RegistrationPage {

    get nameInput() {
        return cy.get("[id='user[first_name]']")
    }

    get lastNameInput() {
        return cy.get("[id='user[last_name]']")
    }

    get emailInput() {
        return cy.get("[id='user[email]']")
    }

    get passwordInput() {
        return cy.get("[id='user[password]']")
    }

    get termsCheckbox() {
        return cy.get("[id='user[terms]']")
    }

    get termsOfUse() {
        return cy.contains('Terms of Use')
    }

    get privacyPolicy() {
        return cy.contains('Customer Privacy Policy')
    }

    get submitButton() {
        return cy.contains('Sign up')
    }

    get formLink() {
        return "https://courses.ultimateqa.com/users/sign_up"
    }

    get registrationSuccessfulLocator() {
        return
    }
}

export default RegistrationPage