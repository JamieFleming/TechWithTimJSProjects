const prompt = require("prompt-sync")();

function printInfo() {
    console.log("Contact Management System");
    console.log("-------------------------");
    console.log("1. Add Contact");
    console.log("2. Delete Contact");
    console.log("3. View Contacts");
    console.log("4. Search Contact");
    console.log("5. Exit");
}

function addContact() {
    const name = prompt("Name: ");
    const email = prompt("Email: ");
    const contact = {
        name,
        email,
    };
    contacts.push(contact);
    console.log("Added");
};

function deleteContact() {
    for (let i = 0; i < contacts.length; i++) {
        const contact = contacts[i];
        console.log((i + 1).toString() + ":", contact.name);
    }
    const number = parseInt(prompt("Enter and ID: "));
    if (isNaN(number) || number > contacts.length) {
        console.log("Invalid");
        return
    }
    contacts.splice(number - 1, 1)
    console.log("Removed");
};

function listContacts(contacts) {
    for (let contact of contacts) {
        console.log("#############");
        console.log("Name: ", contact.name);
        console.log("Email: ", contact.email);
    }
};

function searchContact() {
    const searchString = prompt("Search: ").toLowerCase();
    const result = [];

    for (let contact of contacts) {
        if (contact.name.toLowerCase().includes(searchString)) result.push(contact);
    }

    listContacts(result);
};

const contacts = []
let keepGoing = true;

printInfo();

while (keepGoing) {
    const number = prompt("Enter an operation (1-5): ");
    console.log();
    switch (number) {
        case "1":
            addContact();
            break;
        case "2":
            deleteContact();
            break;
        case "3":
            listContacts(contacts); // Pass contacts
            break;
        case "4":
            searchContact()
            break;
        case "5":
            keepGoing = false; // Exits while loop
            break; 
        default:
            console.log("Unknown");
    }
}