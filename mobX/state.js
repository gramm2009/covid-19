import { makeAutoObservable } from "mobx";

class State {
    countries = [];

    constructor() {
        makeAutoObservable(this);
    }

    addCountries(data) {
        this.countries = [...data];
    }
}

export default new State();
