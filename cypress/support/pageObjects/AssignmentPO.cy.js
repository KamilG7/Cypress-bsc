/// <reference types="cypress" />

class Assignment {

    get nameInput() {
        return cy.get('#cu-form-control-0')
    }

    get emailInput() {
        return cy.get('#cu-form-control-1')
    }

    get positionInput() {
        return cy.get('#cu-form-control-2')
    }

    get companyInput() {
        return cy.get('#cu-form-control-3')
    }

    get assignmentQuestion() {
        return cy.get("div[class='cu-select-selection__text ng-star-inserted']")
    }

    get assignmentQuestionPick() {
        return cy.contains("Framework assessment and review")
    }

    get textBox() {
        return cy.get('#cu-form-control-5')
    }

    get submitButton() {
        return cy.get("button[data-test='form__submit-btn']")
    }
    
    get returnMsg() {
        return cy.contains("excited to meet")
    }

    get selectedOption() {
        return cy.get("div[class='cu-custom-fields__dropdown-item cu-custom-fields__dropdown-item-white']:nth-child(1)")
    }
    

    }
    
    export default Assignment