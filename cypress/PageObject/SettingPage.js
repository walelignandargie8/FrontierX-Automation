class SettingPage {
    settingTab(){
       return cy.get("[href='/settings']")
    }
    chooseNetworkDropdown(){
        return cy.get(".mx-5")
    }
    saveButton(){
        return cy.get(".py-2")
    }
}
export default SettingPage