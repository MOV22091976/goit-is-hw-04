"use strict";

const inventory = {
    items: ['Knife', 'Gas mask'],
    add(itemName) {
        console.log(`Adding ${itemName} to inventory`);

        this.items.push(itemName);
    },
    remove(itemName) {
        console.log(`Removing ${itemName} from inventory`);

        this.items = this.items.filter(item => item !== itemName);
    },
};

const invokeInventoryAction = function (itemName, action) {
    console.log(`Invoking action on ${itemName}`);
    action(itemName);
};

invokeInventoryAction('Medkit', inventory.add.bind(inventory));
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']

//   === другое решение ноооо так не ооооч =========================================
// const inventory = {
//     items: ['Knife', 'Gas mask'],

//     add(itemName) { // Добавить
//         console.log(`Adding ${itemName} to inventory`);
//         this.items.push(itemName);
//     },
//     remove(itemName) { // Удалить
//         console.log(`Removing ${itemName} from inventory`);
//         this.items = this.items.filter(item => item !== itemName);
//     },
// };
// const invokeInventoryAction = function (itemName, action) {
//     console.log(`Invoking action on ${itemName}`);
//     action(itemName);
// };
// // //=== решение с инициализацией отдельной переменной ======
// const inventoryAdd = inventory.add.bind(inventory);
// invokeInventoryAction('Medkit', inventoryAdd);
// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// const inventoryRemove = inventory.remove.bind(inventory);
// invokeInventoryAction('Gas mask', inventoryRemove);
// console.log(inventory.items); // ['Knife', 'Medkit']