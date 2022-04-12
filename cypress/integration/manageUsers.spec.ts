/// <reference types="Cypress"/>

import { SearchComponent } from "../support/componenets/searchComponent";
import { login } from "../support/models/CuraConsultation/Login/Login"
import { AddUser } from "../support/models/Users/addUser";
import { Users } from "../support/models/Users/users";
import { generateRandomstring } from "../support/randam";


const user=new Users()
const addUser=new AddUser()
const fullName = generateRandomstring("user")
const alicNameInput=generateRandomstring("alic")
const userNameInput =generateRandomstring("userName")
const emailInput=generateRandomstring("email@.com")
const userPhoneInput=generateRandomstring("phone")
const searchComponent=new SearchComponent()

describe('Manage users',()=>{
before(()=>{

    cy.visit('/')
    login()
})
it('Add and edit new user',()=>{
 
    user.users().click()
    user.usersButton().click()
    user.addUserButton().click()

addUser.fullNameInput().type(fullName)
addUser.alicNameinput().type(alicNameInput)
addUser.userNameInput().type(userNameInput)
addUser.emailInput().type(emailInput)
addUser.userPhoneInput().type("00000000000000")
addUser.passwordInput().type("Ts@123456")
addUser.confirmpasswprdInput().type("Ts@123456")
addUser.isActive().click()
addUser.saveButton().click()

user.searchRaw().type(userNameInput)
user.searchButton().click()

cy.get('app-list-users.ng-star-inserted').contains(userNameInput).should('be.visible')
cy.get('app-list-users.ng-star-inserted').contains(userNameInput).then((elme)=>{
if (userNameInput==userNameInput){    
    cy.get("body > app-root > app-full-layout > div > mat-sidenav-container > mat-sidenav-content > div > app-list-users > div > div > mat-card > mat-card-content > div.example-container.m-t-20 > app-dbs-data-table > div > table > tbody > tr:nth-child(1) > td.mat-cell.cdk-cell.cdk-column-action.mat-column-action.ng-star-inserted > button").click()
}
})
cy.get('.mat-menu-content > :nth-child(1)').click()
})

})
