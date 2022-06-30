import { getUser, signOut } from './services/auth-service.js';
import { protectPage } from './utils.js';
import createUser from './components/User.js';
import createAddItem from './components/AddItem.js';
import {
    getAllItems,
    getItems,
    createItem,
    boughtItem,
    deleteList
} from './services/list-service.js';

// State
let user = null;
let list = [];

// Action Handlers
async function handlePageLoad() {
    user = getUser();
    protectPage(user);

    list = await getAllItems;

    display();
}

async function handleSignOut() {
    signOut();
}

async function handleAdd(item, quantity) {
    const listItem = await createItem({
        item,
        quantity,
        bought: false
    });

    list.push(listItem);
    
}

// Components ---------------------------------------
const User = createUser(
    document.querySelector('#user'),
    { handleSignOut }
);

const AddItem = createAddItem(
    document.querySelector('#item-form'), 
    { handleAdd }
);

function display() {
    User({ user });
    AddItem();

}

handlePageLoad();
