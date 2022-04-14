export class Addtax {

public arbNameInput =()=> cy.get("#mat-input-2")

public engNameInput =()=> cy.get("#mat-input-3")

public valueInput = ()=> cy.get("#mat-input-4")

public saveButton = ()=> cy.get("#mat-dialog-0 > app-add-edit-taxestype > mat-dialog-actions > dbs-spinner-button")
}
