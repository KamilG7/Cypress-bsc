/// <reference types="cypress" />

class LoginPage {

    get emailInput() {
        return cy.get("[id='user[email]']")
    }

    get passwordInput() {
        return cy.get("[id='user[password]']")
    }
    
    get buttonLocator() {
        return cy.contains("[data-callback='onSubmit']", "Sign in")
    }

    get formLink() {
        return "https://courses.ultimateqa.com/users/sign_in"
    }

    get errorEmptyForm() {
        return cy.get("li").contains("Invalid email or password")
    }

    get forgotPassword() {
        return cy.get("a").contains("Forgot Password")
    }

    get forgotEmailInput() {
        return cy.get("[id='user[email]']")
    }

    get forgotSubmit() {
        return cy.get("[name='commit']")
    }

    get forgotConfirmation() {
        return cy.get("h2").contains("Help is on the way")
    }

}

export default LoginPage