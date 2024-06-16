/// <reference types="cypress" />

import HomePage from "../support/pageObjects/HomePagePO.cy.js"
const homePage = new HomePage()


describe('Tests related to "Main Site"', () => {


    it('Main Site should load [Id_1001]', () => {    
      cy.visit('')
      homePage.confirmationLocator.should("be.visible")
       })
    })