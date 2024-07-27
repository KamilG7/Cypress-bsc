/// <reference types="cypress" />

import registrationLoginData from "../fixtures/registrationLoginData.json" 
import RegistrationPage from "../support/pageObjects/RegistrationPO.cy.js"
const registrationPage = new RegistrationPage()
import PostLoginPage from "../support/pageObjects/PostLoginPO.cy.js"
const postLoginPage = new PostLoginPage()
import PostLogoutPage from "../support/pageObjects/PostLogoutPO.cy.js"
const postLogoutPage = new PostLogoutPage()


describe('"Registration" related tests', () => {


    it('Correct registration test [id_1003]', () => {    
      cy.visit(registrationPage.formLink)
      registrationPage.nameInput.type(registrationLoginData.FirstName).should('have.value', registrationLoginData.FirstName)
      registrationPage.lastNameInput.type(registrationLoginData.LastName).should('have.value', registrationLoginData.LastName)
      registrationPage.emailInput.type(registrationLoginData.email).should('have.value', registrationLoginData.email)
      registrationPage.passwordInput.type(registrationLoginData.password).should('have.value', registrationLoginData.password)
      registrationPage.termsCheckbox.click().should("be.checked")
      registrationPage.submitButton.click()
      postLoginPage.loggedInConfirmationLocator.should("be.visible")
      postLoginPage.dropdownMenu.click()
      postLoginPage.signOutButton.click()
      postLogoutPage.signOutConfirmation.should("be.visible")
       })
    })