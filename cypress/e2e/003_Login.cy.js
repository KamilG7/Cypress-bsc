/// <reference types="cypress" />

import LoginPage from "../support/pageObjects/LoginPO.cy.js"
const loginPage = new LoginPage()
import registrationLoginData from "../fixtures/registrationLoginData.json" 


describe('"Registration" related tests', () => {


    it('Correct registration test [id_1003]', () => {    
      cy.visit(loginPage.formLink)

      loginPage.emailInput.type(registrationLoginData.email)
      loginPage.passwordInput.type(registrationLoginData.password)
      loginPage.buttonLocator.click()
       })
    })
