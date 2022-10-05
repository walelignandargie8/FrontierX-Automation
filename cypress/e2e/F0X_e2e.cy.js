import BasePage from '../PageObject/BasePage'
import Dashboard from '../PageObject/DashboardPage'
import NFTsPage from '../PageObject/NFTsPage'
import SettingPage from '../PageObject/SettingPage'
import TokensPage from '../PageObject/TokensPage'

describe('Fr0ntierX E2E Test', () => {

    // instantiate the pages 
    const basePage = new BasePage()
    const dashboardPage = new Dashboard()
    const nftsPage = new NFTsPage()
    const settingPage = new SettingPage()
    const tokensPage = new TokensPage()

    before(function () {
        //runs once before all tess in the block
        cy.fixture('Testfile').then(function (data) {
            this.data = data
        })
    })
    // E2E test cases for Frontier application
 
    it("First Test Case", function () {
        //Opening the application
        basePage.navigate(this.data.URL)

        dashboardPage.dashboardTab().click()
        //Entering invalid email to login
        
        dashboardPage.emailField().type(this.data.incorrectEmail)
        //Clicking the login button 
        dashboardPage.loginButton().click()
        //Asserting the login functionality 
        dashboardPage.errorMessage().should('be.visible')


        //Entering valid email to login
        dashboardPage.emailField().type(this.data.correctEmail)
        //Clicking the login button 
        dashboardPage.loginButton().click()
        //Asserting the login functionality 
        dashboardPage.errorMessage().should('not.be.visible')

        
        //clicking the NFTs tab
        nftsPage.nftsTab().click()

        //Asserting the Collection lis is visible
        nftsPage.collectionLink().should('be.visible')
        nftsPage.collectionLink().click()
        tokensPage.tokenTab().click()

        // Assert that the collection lists have 8 items
        nftsPage.collectionLists().should('have.length', 8)

        //Asserting the dropdwon in setting tab
        cy.get('select').select('Ropsten').should('have.value', 'ropsten')
        //Change the setting to Ropsten
        settingPage.saveButton().click()

    })

})


