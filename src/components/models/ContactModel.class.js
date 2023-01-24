export class ContactModel {
    active = false;
    name   = '';

    constructor(active, name) {
        this.active = active;
        this.name   = name;
    }
}