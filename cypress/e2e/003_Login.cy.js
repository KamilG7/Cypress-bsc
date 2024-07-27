/// <reference types="cypress" />

import LoginPage from "../support/pageObjects/LoginPO.cy.js"
const loginPage = new LoginPage()
import registrationLoginData from "../fixtures/registrationLoginData.json" 
import PostLoginPage from "../support/pageObjects/PostLoginPO.cy.js"
const postLoginPage = new PostLoginPage()
import PostLogoutPage from "../support/pageObjects/PostLogoutPO.cy.js"
const postLogoutPage = new PostLogoutPage()


describe('"Registration" related tests', () => {


    it('Correct registration test [id_1003]', () => {    
      cy.visit(loginPage.formLink)

      loginPage.emailInput.type(registrationLoginData.email)
      loginPage.passwordInput.type(registrationLoginData.password)
      loginPage.buttonLocator.click()
      postLoginPage.loggedInConfirmationLocator.should("be.visible")
      postLoginPage.dropdownMenu.click()
      postLoginPage.signOutButton.click()
      postLogoutPage.signOutConfirmation.should("be.visible")
       })
    })
