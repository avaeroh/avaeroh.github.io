import { Selector, t } from "testcafe";

export default class HomePage {
    constructor(){
        this.baseUrl = "https://avaeroh.github.io/";
        this.homePageTitle = Selector("div.blurb h1");
        this.homePageTitleText = String("Avaeroh's hub");
        this.cvPageLink = Selector("[href='/cv']");

        // this.toLocation = Selector("[id='to.text']");
        // this.suggestedStationFrom = Selector("#stations_from li:nth-child(1)");
        // this.suggestedStationTo = Selector("#stations_to li:nth-child(1)");
        // this.submitButton = Selector("button[type='submit']");
        // this.toText = 'Brighton';
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