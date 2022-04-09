export class Users{

    public users = ()=>cy.get("#snav > div > perfect-scrollbar > div > div.ps-content > app-vertical-sidebar > mat-nav-list > mat-list-item:nth-child(2)")

    public usersButton =()=> cy.get('.selected > :nth-child(1) > .mat-nav-list > mat-list-item[routerlinkactive="selected"] > .mat-list-item-content > .relative')

    public addUserButton = ()=> cy.get('.ml-auto > .mat-focus-indicator')

}