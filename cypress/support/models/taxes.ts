export class Taxes {
public taxes =()=> cy.get("#snav > div > perfect-scrollbar > div > div.ps-content > app-vertical-sidebar > mat-nav-list > mat-list-item:nth-child(4) > div")

public taxesButton = ()=> cy.get("#snav > div > perfect-scrollbar > div > div.ps-content > app-vertical-sidebar > mat-nav-list > mat-list-item.mat-list-item.mat-focus-indicator.ng-star-inserted.selected > div > mat-nav-list")

public addTaxButton = ()=> cy.get("body > app-root > app-full-layout > div > mat-sidenav-container > mat-sidenav-content > div > app-list-taxestype > div > mat-card > mat-card-content > div > div > button")
}
