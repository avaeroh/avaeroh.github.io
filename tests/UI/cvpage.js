import { Selector, t } from "testcafe";

export default class CVPage {
    constructor(){
       this.title = Selector("title");
       this.cvPageTitle = "Jonathan's CV.";
       this.cv = Selector(".cv");
    }
    
}