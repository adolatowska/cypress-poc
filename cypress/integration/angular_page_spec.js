describe('Test Angular page with Cypress', function() {

  beforeEach(function() {
    cy.fixture('angular_page_object').as('pageObject')
    cy.fixture('angular_page_data').as('data')
  })

  it('should assert Angular page title', function() {
    cy.visit(this.pageObject.url)
    cy.title().should('include', this.data.pageTitle)
  })

  it('should type name', function() {
    cy.get(this.pageObject.nameInput).type(this.data.name)
    cy.get(this.pageObject.nameHeader).should('have.text',this.data.greetings)
  })

  it('should check given checkbox', function(){
    cy.checkCheckbox(this.pageObject.taskCheckbox, this.data.taskName)
  })

  it('should add new task', function() {
    cy.get(this.pageObject.addNewTaskInput).type(this.data.newTaskName)
    cy.get(this.pageObject.addNewTaskButton).click()
    cy.get(this.pageObject.tasksList).should('contain',this.data.newTaskName)
  })

  it('should find given project', function() {
    cy.get(this.pageObject.projectSearchInput).type(this.data.projectName)
    cy.get(this.pageObject.projectsTable).should('contain', this.data.projectDescription)
  })

  it('should add new project', function() {
    cy.get(this.pageObject.addNewProjectButton).click()
    cy.get(this.pageObject.newProjectNameInput).should('be.visible').type(this.data.newProjectName)
    cy.get(this.pageObject.newProjectUrlInput).should('be.visible').type(this.data.newProjectUrl)
    cy.get(this.pageObject.newProjectDescriptionTextArea).should('be.visible').type(this.data.newProjectDescription)
    cy.get(this.pageObject.saveNewProjectButton).should('be.visible').click()
  })
  })
