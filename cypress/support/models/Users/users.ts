export class Users{

    public users = ()=>cy.get("#snav > div > perfect-scrollbar > div > div.ps-content > app-vertical-sidebar > mat-nav-list > mat-list-item:nth-child(2)")

    public usersButton =()=> cy.get('.selected > :nth-child(1) > .mat-nav-list > :nth-child(1) > .mat-list-item-content > .relative')

    public addUserButton = ()=> cy.get('.ml-auto > .mat-focus-indicator')

    public searchRaw=()=> cy.get("#mat-input-2").parent()
//public userTable = ()=> cy.get()
}