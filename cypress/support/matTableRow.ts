import { MatTable } from "./matTable";

export class MatTableRow {
    constructor(private parent: MatTable, private text?: string) {}

    public self = () => {
        const selector = this.parent.self().find("mat-row");
        if (this.text) {
            return selector.contains(this.text).closest("mat-row");
        }
        return selector;
    };

    public click = () => this.self().click();
    public select = () =>
        this.self().find(".mat-column-select").find("mat-checkbox").click();
}
