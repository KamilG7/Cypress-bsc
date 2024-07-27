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

    it('Error is displayed when "First Name" is NOT submitted in the form [id_1005]', () => {    
      cy.visit(registrationPage.formLink)
      registrationPage.lastNameInput.type(registrationLoginData.LastName).should('have.value', registrationLoginData.LastName)
      registrationPage.emailInput.type(registrationLoginData.email).should('have.value', registrationLoginData.email)
      registrationPage.passwordInput.type(registrationLoginData.password).should('have.value', registrationLoginData.password)
      registrationPage.termsCheckbox.click().should("be.checked")
      registrationPage.submitButton.click()
      registrationPage.errorNoName.should("be.visible")
         })

    it('Error is displayed when "Last Name" is NOT submitted in the form [id_1006]', () => {    
      cy.visit(registrationPage.formLink)
      registrationPage.nameInput.type(registrationLoginData.FirstName).should('have.value', registrationLoginData.FirstName)
      registrationPage.emailInput.type(registrationLoginData.email).should('have.value', registrationLoginData.email)
      registrationPage.passwordInput.type(registrationLoginData.password).should('have.value', registrationLoginData.password)
      registrationPage.termsCheckbox.click().should("be.checked")
      registrationPage.submitButton.click()
      registrationPage.errorNoLastName.should("be.visible")
    })

    it('Error is displayed when "Email" is NOT submitted in the form [id_1007]', () => {    
      cy.visit(registrationPage.formLink)
      registrationPage.nameInput.type(registrationLoginData.FirstName).should('have.value', registrationLoginData.FirstName)
      registrationPage.lastNameInput.type(registrationLoginData.LastName).should('have.value', registrationLoginData.LastName)
      registrationPage.passwordInput.type(registrationLoginData.password).should('have.value', registrationLoginData.password)
      registrationPage.termsCheckbox.click().should("be.checked")
      registrationPage.submitButton.click()
      registrationPage.errorNoEmail.should("be.visible")
      })

    it('Error is displayed when incorrect "Email" submitted in registration form [id_1008]', () => {    
      cy.visit(registrationPage.formLink)
      registrationPage.nameInput.type(registrationLoginData.FirstName).should('have.value', registrationLoginData.FirstName)
      registrationPage.lastNameInput.type(registrationLoginData.LastName).should('have.value', registrationLoginData.LastName)
      registrationPage.emailInput.type(registrationLoginData.incorrectEmail).should('have.value', registrationLoginData.incorrectEmail)
      registrationPage.passwordInput.type(registrationLoginData.password).should('have.value', registrationLoginData.password)
      registrationPage.termsCheckbox.click().should("be.checked")
      registrationPage.submitButton.click()
      registrationPage.errorIncorrectEmail.should("be.visible")
})

   it('Error is displayed when weak "Password" is used [id_1009]', () => {    
     cy.visit(registrationPage.formLink)
     registrationPage.nameInput.type(registrationLoginData.FirstName).should('have.value', registrationLoginData.FirstName)
     registrationPage.lastNameInput.type(registrationLoginData.LastName).should('have.value', registrationLoginData.LastName)
     registrationPage.emailInput.type(registrationLoginData.email).should('have.value', registrationLoginData.Email)
     registrationPage.passwordInput.type(registrationLoginData.weakPassword).should('have.value', registrationLoginData.weakPassword)
     registrationPage.termsCheckbox.click().should("be.checked")
     registrationPage.submitButton.click()
     registrationPage.errorWeakPassword.should("be.visible")
})

  it('Error is displayed when empty form is submitted [id_1010]', () => {    
    cy.visit(registrationPage.formLink)
    registrationPage.termsCheckbox.click().should("be.checked")
    registrationPage.submitButton.click()
    registrationPage.errorEmptyForm.should("be.visible")

})

it('Registration shpuld fail if "Email" already in databse [id_1014]', () => {    
    cy.visit(registrationPage.formLink)
    registrationPage.nameInput.type(registrationLoginData.FirstName).should('have.value', registrationLoginData.FirstName)
    registrationPage.lastNameInput.type(registrationLoginData.LastName).should('have.value', registrationLoginData.LastName)
    registrationPage.emailInput.type(registrationLoginData.email).should('have.value', registrationLoginData.email)
    registrationPage.passwordInput.type(registrationLoginData.password).should('have.value', registrationLoginData.password)
    registrationPage.termsCheckbox.click().should("be.checked")
    registrationPage.submitButton.click()
    registrationPage.errorUsedEmail.should("be.visible")

})
})
