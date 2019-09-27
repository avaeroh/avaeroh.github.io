import { Selector, t } from "testcafe";
import HomePage  from './homepage.js';
import CVPage from "./cvpage.js";

const homePage = new HomePage;
const cVPage = new CVPage;

fixture `Tests!`
    .page(homePage.baseUrl)
    .beforeEach( async t => {
        await t.maximizeWindow();
    })

    // test('Search for train time, check search page title', async t => {
    //     await homePage.enterBothLocations(homePage.fromText, homePage.toText);
    //     await t
    //         .click(homePage.submitButton)
    //         .expect(resultsPage.title.innerText)
    //             .contains(resultsPage.trainLineTitle);
    // })

    test('homepage title displayed correctly', async t => {
        await t
            .expect((homePage.homePageTitle).innerText)
                .contains(homePage.homePageTitleText);
    })

    test('CV is present on the cv page', async t => {
        await t
            .click(homePage.cvPageLink)
            .expect((cVPage.cv).exists).ok();
    })