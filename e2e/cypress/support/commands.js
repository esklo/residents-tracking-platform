/// <reference types="cypress" />

let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorageCache", () => {
    // @ts-ignore
    Object.keys(localStorage).forEach(key => {
        // @ts-ignore
        LOCAL_STORAGE_MEMORY[key] = localStorage[key];
    });
});

Cypress.Commands.add('restoreLocalStorageCache', () => {
    Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
        // @ts-ignore
        localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
    });
});

Cypress.Commands.add('clearLocalStorageCache', () => {
    // @ts-ignore
    localStorage.clear();
    LOCAL_STORAGE_MEMORY = {};
});