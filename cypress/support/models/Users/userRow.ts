import { MatTableRow } from "../../matTableRow";
import { UserTable } from "./userTable";

export class UserRow extends MatTableRow {
    constructor(parent: UserTable, text?: string) {
        super(parent, text);
    }
}