import { login } from "../support/models/CuraConsultation/Login/Login"
import { AddUser } from "../support/models/Users/addUser";
import { Users } from "../support/models/Users/users";

const user=new Users()
const addUser=new AddUser
describe('Manage users',()=>{
before(()=>{

    const userName="doctor01";
    const Passwpord="Doctor01P@$$"
    cy.visit('/')
    login(userName,Passwpord)
})
it('Add and edit new user',()=>{
 
    user.users().click()
    user.usersButton().click()
    user.addUserButton().click()

})

})