import request from '../fixtures/request.json'

describe('Cypress Studio Demo', () => {
    beforeEach(() => {
        cy.restoreLocalStorageCache();
    });

    afterEach(() => {
        cy.saveLocalStorageCache();
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('authInvalid', function () {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('/');
        cy.get('#email_input').type('admin@mail.ru');
        cy.get('#password_input').type('Password1');
        cy.get('#login_button').click();
        cy.get('.toast_container').first().should("contain.text", "Ошибка");
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('authValid', function () {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('/');
        cy.get('#email_input').type(Cypress.env("ADMIN_EMAIL"));
        cy.get('#password_input').type(Cypress.env("ADMIN_PASSWORD"));
        cy.get('#login_button').click();
        cy.get('.toast_container').first().should("contain.text", "Вы авторизовались");
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('districtCreate', function () {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('/districts');
        cy.get('#add_district_button').click();
        cy.get('#select_administrative_district', {timeout: 10000}).click();
        cy.get('.administrative_district_element', {timeout: 10000}).first().click();
        cy.get('#select_district_button').click();
        cy.get('.select_district_element', {timeout: 10000}).first().click();
        cy.get('.drag_and_drop_area').first().selectFile("cypress/fixtures/img.png", {action: "drag-drop"})
        cy.get('#create_district_button').click();
        cy.get('.toast_container').first().should('contain.text', 'Район добавлен');
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('departmentCreate', function () {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('/departments');
        cy.get('#add_department_button').click();
        cy.get('#added_district_select').click();
        cy.get('.added_district_element', {timeout: 10000}).first().click();
        cy.get('#department_name').type("department_name");
        cy.get('#create_department_button').click();
        cy.get('.toast_container').first().should('contain.text', 'Отдел добавлен');
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('themeCreate', function () {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('/themes');
        cy.get('#add_theme_button').click();
        cy.get('#select_department_button').click();
        cy.get('.select_department_element', {timeout: 10000}).first().click();
        cy.get('#theme_name').type("theme_name");
        cy.get('#create_theme').click();
        cy.get('.toast_container').first().should('contain.text', 'Тематика добавлена');
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('userEdit', function () {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('/users');
        cy.get('.user_row_actions').first().click();
        cy.get('.user_edit_action').first().click();
        cy.get('#select_department_button').click();
        cy.get('.select_department_element', {timeout: 10000}).first().click();
        cy.get('#save_user').click();
        cy.get('.toast_container').first().should('contain.text', 'Пользователь обновлен');
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('requestCreate', function () {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('/requests/new');
        cy.get('#theme_select_button').click();
        cy.get('.theme_select_element').first().click();
        cy.get("#theme_description").type(request.description);
        cy.get('.drag_and_drop_area').first().selectFile(["cypress/fixtures/img.png"], {action: "drag-drop"})
        cy.wait(2000)
        cy.get('.drag_and_drop_area').first().selectFile("cypress/fixtures/img2.png", {action: "drag-drop"})
        cy.wait(2000)
        cy.get('#contact_info_phone').type(request.phone);
        cy.get('#contact_info_email').type(request.email);
        cy.get('#contact_info_name').type(request.name);
        cy.get("#address_select_input", {timeout: 10000}).type(request.address)
        cy.get(".address_select_element", {timeout: 20000}).first().click()
        cy.get('#create_request_button').click();
        cy.get('.toast_container').first().should("contain.text", "создано");
        /* ==== End Cypress Studio ==== */
    });

    it('requestTable', function () {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('/requests');
        cy.get(".theme_description").first().should("have.text", request.description)
        cy.get(".contact_name").first().should("have.text", request.name)
        cy.get(".contact_email_url").first().should("have.attr", "href", `mailto:${request.email}`)
        cy.get(".contact_phone_url").first().should("have.attr", "href", `tel:+${request.phone}`)
        /* ==== End Cypress Studio ==== */
    });
});