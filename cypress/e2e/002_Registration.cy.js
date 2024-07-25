/// <reference types="cypress" />

import registrationLoginData from "../fixtures/registrationLoginData.json" 

import RegistrationPage from "../support/pageObjects/RegistrationPO.cy.js"
const registrationPage = new RegistrationPage()


describe('"Registration" related tests', () => {


    it('Correct registration test [id_1003]', () => {    
      cy.visit(registrationPage.formLink)
      registrationPage.nameInput.type(registrationLoginData.FirstName)
      registrationPage.lastNameInput.type(registrationLoginData.LastName)
      registrationPage.emailInput.type(registrationLoginData.email)
      registrationPage.passwordInput.type(registrationLoginData.password)
      registrationPage.termsCheckbox.click()
      registrationPage.submitButton.click()
    // check registration sucessful %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%5
       })
    })