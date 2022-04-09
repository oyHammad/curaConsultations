export class AddUser{

public fullNameInput = ()=>cy.findByTestId("mat-input-81")

public alicNameinput =()=>cy.findByTestId("mat-input-83")

public userNameInput =()=>cy.findByTestId("mat-input-84")

public emailInput =()=> cy.findByTestId("mat-input-85")

public userPhoneInput =()=> cy.findByTestId("mat-input-82")

public passwordInput = ()=> cy.findByTestId("mat-input-86")

public confirmpasswprdInput = ()=> cy.findByTestId("mat-input-87")

public isActive = ()=> cy.findByTestId("mat-checkbox-83")

public saveButton =()=>cy.get('.mat-button-wrapper')

}