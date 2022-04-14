/// <reference types= "cypress"/>

import { login } from "../support/models/CuraConsultation/Login/Login"
import { Addtax } from "../support/models/Taxes/addTaxes"
import { Taxes } from "../support/models/Taxes/taxes"
import { generateRandomstring } from "../support/randam"

const taxes= new Taxes()
const addtax = new Addtax()
const arbNameInput=generateRandomstring("tax")
const engNameInput=generateRandomstring("tax")

describe('Manage Taxes',()=>{
before(()=>{
    cy.visit('/')
    login()
})
it('Add and Edit Taxes',()=>{

taxes.taxes().click()
taxes.taxesButton().click()
taxes.addTaxButton().click()

addtax.arbNameInput().type(arbNameInput)
addtax.engNameInput().type(engNameInput)
addtax.valueInput().type("10")
addtax.saveButton().click()
cy.wait(10000)

cy.get("body > app-root > app-full-layout > div > mat-sidenav-container > mat-sidenav-content > div > app-list-taxestype > div > div > mat-card > mat-card-content > div > app-dbs-data-table > div > table > tbody").contains("tax20220413134224039").should('be.visible')
.then((elemnt)=>{
 if("tax20220413134224039"=="tax20220413134224039"){
cy.get("body > app-root > app-full-layout > div > mat-sidenav-container > mat-sidenav-content > div > app-list-taxestype > div > div > mat-card > mat-card-content > div > app-dbs-data-table > div > table > tbody > tr:nth-child(2) > td.mat-cell.cdk-cell.cdk-column-action.mat-column-action.ng-star-inserted > button").click()

}
})


})
})