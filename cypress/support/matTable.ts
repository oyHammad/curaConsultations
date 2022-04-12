export class MatTable {
    constructor(private testId: string) {}

    public self = () => cy.get(".mat-table cdk-table mat-sort example-table", { timeout: 30000 });
}
