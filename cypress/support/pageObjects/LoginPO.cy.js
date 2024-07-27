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
}

export default LoginPage