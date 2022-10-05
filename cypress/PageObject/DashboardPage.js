class DashboardPage {
    dashboardTab(){
       return cy.get("a[href='/']")
       return 
    }
    emailField(){
        return cy.get("input[id='email']")
    }
    loginButton(){
        return cy.get(".py-2")
    }
    errorMessage(){
        return cy.get('.p-3')
    }
}
export default DashboardPage