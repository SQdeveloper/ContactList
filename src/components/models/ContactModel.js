export class ContactModel {
    active = true;
    name   = '';

    constructor(active, name) {
        this.active = active;
        this.name   = name;
    }
}