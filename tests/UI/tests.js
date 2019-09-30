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

    test('homepage title displayed correctly', async t => {
        await t
            .expect((homePage.homePageTitle).innerText)
                .contains(homePage.homePageTitleText);
    })

    test('CV is present on the cv page', async t => {
        await tdsadsadsad
            .click(homePage.cvPageLink)
            .expect((cVPage.cv).exists).notOk();
    })