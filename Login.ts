
export function login (userName:string,password:string):void {
  
    cy.get("#mat-input-0").type(userName)
    cy.get("#mat-input-1").type(password)
    cy.get(".mat-button-wrapper").click()
 
}

