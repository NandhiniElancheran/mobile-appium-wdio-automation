
export class CounterPage {

    //const button = $('id=resource-id/iosname');

    get subButton() { return $("~sub_button"); }
    get addButton() { return $("~add_button"); }
    get valueLabel() { return $("~value_label"); }
    get value() { return this.valueLabel.getText(); }

    sum() {
        this.addButton.click();
    }

    sub() {
        this.subButton.click();
    }
}

