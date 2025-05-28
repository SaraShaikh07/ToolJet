describe('Tooljet App', () => {


const appName = 'Test App'
const updatedAppName = 'Updated Test App';



it('To login', () => {
cy.visit("https://v3-lts-cetestsystem.tooljet.com/cy-qa");
cy.wait(2000)
cy.get('#email').type('sara@example.com')
cy.get('#password').type('Password')
cy.get('button[type="submit"]').click()

cy.get('button[data-cy="create-new-app-button"]').click()
cy.get('input[data-cy="app-name-input"]').type(appName)
cy.get('button[type="submit"]').click()
cy.get('.driver-close-btn').click()
cy.get('h1[data-cy="editor-page-logo"]').click()
cy.contains('Back to apps').click();
cy.contains('.card.homepage-app-card', appName).should('be.visible');


cy.contains('.card.homepage-app-card', appName).realHover()
.within(() => {
cy.get('.cursor-pointer.menu-ico').should('be.visible').click();

});
cy.get('[data-cy="rename-app-card-option"]').should('be.visible').click()


cy.get('input[placeholder="Enter app name"]').clear().type(updatedAppName)
cy.get('button[type="submit"]').click()

cy.contains('.card.homepage-app-card', updatedAppName).realHover()
.within(() => {
cy.get('.cursor-pointer.menu-ico').should('be.visible').click();
});

cy.get('[data-cy="delete-app-card-option"]').click() 
cy.get('[data-cy="yes-button"]').click() 

cy.contains('.card.homepage-app-card', updatedAppName).should('not.exist');









}) 
})