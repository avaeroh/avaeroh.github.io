import { Selector, t } from "testcafe";

export default class HomePage {
    constructor(){
        this.baseUrl = "https://avaeroh.github.io/";
        this.homePageTitle = Selector("div.blurb h1");
        this.homePageTitleText = "Avaeroh's hub";
        this.cvPageLink = Selector("[href='/cv']");
    }

    async enterFromLocation(locationText) {
        await t
            .typeText(this.fromLocation, locationText)
            .click(this.suggestedStationFrom);
    }

    async enterToLocation(locationText) {
        await t
        .typeText(this.toLocation, locationText)
        .click(this.toLocation);
    }

    async enterBothLocations(fromText, toText) {
        this.enterFromLocation(fromText)
        this.enterToLocation(toText);
    }

}