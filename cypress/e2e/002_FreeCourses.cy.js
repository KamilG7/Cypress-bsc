/// <reference types="cypress" />

import HomePage from "../support/pageObjects/HomePagePO.cy.js"
import FreeCourses from "../support/pageObjects/FreeCoursesPO.cy.js"
const homePage = new HomePage()
const freeCourses = new FreeCourses()


describe('Tests related to "Main Site"', () => {


    it('Main Site should load [Id_1001]', () => {    
      cy.visit('')
      homePage.confirmationLocator.should("be.visible")
      homePage.educationdDropdown.click()
      homePage.freeCourses.click({force:true})
      cy.visit('https://courses.ultimateqa.com/collections')
      freeCourses.confirmationLocator.should("be.visible")
      freeCourses.loginLocator.click()

       })
    })