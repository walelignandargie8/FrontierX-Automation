class NFTsPage {
    nftsTab(){
       return cy.get("a[href='/ntfs']")
    }
    collectionLink(){
        return cy.get(".bg-gray-700")
    }
    collectionLists(){
        return cy.get('li[class="flex justify-between"]')
    }
}
export default NFTsPage