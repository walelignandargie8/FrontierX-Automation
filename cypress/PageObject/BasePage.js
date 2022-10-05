class BasePage {

    // a method to navigate the application
    navigate(url) {
        cy.visit(url)
    }
}
export default BasePage 