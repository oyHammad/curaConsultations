/// <reference types="Cypress"/>

import { login } from "../support/models/CuraConsultation/Login/Login"
import { AddUser } from "../support/models/Users/addUser";
import { Users } from "../support/models/Users/users";
import { generateRandomstring } from "../support/randam";


const user=new Users()
const addUser=new AddUser()
const fullName = generateRandomstring("user")
const alicNameInput=generateRandomstring("alic")
const userNameInput =generateRandomstring("userName")
const emailInput=generateRandomstring("email@")
const userPhoneInput=generateRandomstring("phone")


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
addUser.emailInput().type("emailInpu")
addUser.userPhoneInput().type(userPhoneInput)
addUser.passwordInput().type("Ts@123456")
addUser.confirmpasswprdInput().type("Ts@123456")
addUser.isActive().click()
addUser.saveButton().click()

cy.get("#mat-input-10").type(userNameInput)
cy.get("body > app-root > app-full-layout > div > mat-sidenav-container > mat-sidenav-content > div > app-list-users > div > div > mat-card > mat-card-content > div.d-flex.search-input-style > button").click()
cy.get('app-list-users.ng-star-inserted').click()

})

})
