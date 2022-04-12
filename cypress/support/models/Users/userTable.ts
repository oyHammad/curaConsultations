import { MatTable } from "../../matTable";
import { UserRow } from "./userRow";

export class UserTable extends MatTable {
    constructor() {
        super(".mat-table cdk-table mat-sort example-table");
    }

    public row = (userNameInput: string) => new UserRow(this, userNameInput);

}