/// <reference types="cypress" />

import user from "../fixtures/user.json" 
import Assignment from "../support/pageObjects/AssignmentPO.cy.js"
import HomePage from "../support/pageObjects/HomePagePO.cy.js"
const homePage = new HomePage()
const assignment = new Assignment()


describe('Tests related to "Free Assignment" option', () => {


  it('Applying for free assignment - navigating to form [Id_1002]', () => {    
    cy.visit('')
    homePage.assignmentTab.should("have.attr", "href", homePage.formLink).click()
     })  

  it('Applying for free assignment - filling form [Id_1002]', () => {    
    cy.visit(homePage.formLink)      
      assignment.nameInput.type(user.name).should('have.value', user.name)
      assignment.emailInput.type(user.email).should('have.value', user.email)
      assignment.positionInput.type(user.position).should('have.value', user.position)
      assignment.companyInput.type(user.company).should('have.value', user.company)
      assignment.assignmentQuestion.click()
      assignment.assignmentQuestionPick.click()
      assignment.selectedOption.should('include.text', user.option)
      assignment.textBox.type(user.textbox).should('have.value', user.textbox)

      //captcha to be solved by hand
      cy.wait(60000)

      assignment.submitButton.click()
      assignment.returnMsg.should('include.text', user.expectedText)
      
    })

})