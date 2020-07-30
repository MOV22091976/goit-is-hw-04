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

const inventoryAdd = inventory.add.bind(inventory)
invokeInventoryAction('Medkit', inventoryAdd);

console.log(inventory.items);

const inventoryRemove = inventory.remove.bind(inventory)
invokeInventoryAction('Medkit', inventoryRemove);

console.log(inventory.items);