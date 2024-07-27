/// <reference types="cypress" />

import LoginPage from "../support/pageObjects/LoginPO.cy.js"
const loginPage = new LoginPage()
import registrationLoginData from "../fixtures/registrationLoginData.json" 
import PostLoginPage from "../support/pageObjects/PostLoginPO.cy.js"
const postLoginPage = new PostLoginPage()
import PostLogoutPage from "../support/pageObjects/PostLogoutPO.cy.js"
const postLogoutPage = new PostLogoutPage()


describe('"Login" related tests', () => {

    it('"Forgot Password" option should work [id_1016]', () => {    
      cy.visit(loginPage.formLink)
      loginPage.forgotPassword.click()
      loginPage.forgotEmailInput.should("be.visible").type(registrationLoginData.email).should('have.value', registrationLoginData.email)
      loginPage.forgotSubmit.click()
      loginPage.forgotConfirmation.should("be.visible")
          })

    it('Correct Login test [id_1004]', () => {    
      cy.visit(loginPage.formLink)

      loginPage.emailInput.type(registrationLoginData.email).should('have.value', registrationLoginData.email)
      loginPage.passwordInput.type(registrationLoginData.password).should('have.value', registrationLoginData.password)
      loginPage.buttonLocator.click()
      postLoginPage.loggedInConfirmationLocator.should("be.visible")
      postLoginPage.dropdownMenu.click()
      postLoginPage.signOutButton.click()
      postLogoutPage.signOutConfirmation.should("be.visible")
       })

    it('Login should fail with empty form [id_1014]', () => {    
      cy.visit(loginPage.formLink)
      loginPage.buttonLocator.click()
      loginPage.errorEmptyForm.should("be.visible")
         })

    
    })
