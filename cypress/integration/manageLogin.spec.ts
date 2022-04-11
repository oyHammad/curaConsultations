import cypress from "cypress";
import { login } from "../support/models/CuraConsultation/Login/Login";
const userName ="doctor01";
const password="Doctor01P@$$";

describe('Manage Login ',()=>{
it('login with valid userName and password',()=>{

    cy.visit('/')
   login(userName,password)

})
})