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

    get errorNoName() {
        return cy.get("li").contains("First name can't be blank")
    }

    get errorNoLastName() {
        return cy.get("li").contains("Last name can't be blank")
    }

    get errorNoEmail() {
        return cy.get("li").contains("Email can't be blank")
    }

    get errorIncorrectEmail() {
        return cy.get("li").contains("Email is invalid")
    }

    get errorWeakPassword() {
        return cy.get("li").contains("Password must be at least 8 characters")
    }

    get errorEmptyForm() {
        return cy.get("li").contains("First name can't be blank")
    }

    get errorUsedEmail() {
        return cy.get("li").contains("The username and/or password entered are incorrect, please try again")
    }

}

export default RegistrationPage