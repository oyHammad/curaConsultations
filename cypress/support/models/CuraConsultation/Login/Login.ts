
export function login ():void {
    
    const userName= "ConsultationAmin";
    const password="Qura@123456";

    cy.get("#mat-input-0").type(userName)
    cy.get("#mat-input-1").type(password)
    cy.get(".mat-button-wrapper").click()
 
}


