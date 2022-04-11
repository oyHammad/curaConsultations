export class AddUser{

public fullNameInput = ()=>cy.get("#mat-input-3")

public alicNameinput =()=>cy.get("#mat-input-5")

public userNameInput =()=>cy.get("#mat-input-6")

public emailInput =()=> cy.get("#mat-input-7")

public userPhoneInput =()=> cy.get("#mat-input-4")

public passwordInput = ()=> cy.get("#mat-input-8")

public confirmpasswprdInput = ()=> cy.get("#mat-input-9")

public isActive = ()=> cy.get("#mat-checkbox-6")

public saveButton =()=>cy.get('dbs-spinner-button > .mat-focus-indicator')

}