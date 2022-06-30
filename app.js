import { getUser, signOut } from './services/auth-service.js';
import { protectPage } from './utils.js';
import createUser from './components/User.js';
import createAddItem from './components/AddItem.js';
import createItemList from './components/ItemList.js';
import createDeleteList from './components/DeleteList.js';
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

    list = await getAllItems();

    display();
}

async function handleSignOut() {
    signOut();
}

async function handleAdd(item, quantity) {
    const listItem = await createItem(
        item,
        quantity,   
    );
    
    list.push(listItem);
    display();
    
}
async function handleBought(item) {
    item.bought = !item.bought;
    const index = list.indexOf(item);
    list[index] = await boughtItem();
}


async function handleUpdate(item) {

    item.item = item;
    const index = list.indexOf(item);
    list[index] = await boughtItem(item);

    display();
}

async function handleDelete() {

    await deleteList(list);
    list = [];
    display();
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

const ItemList = createItemList(document.querySelector('.list'), { handleBought });

const DeleteList = createDeleteList(document.querySelector('#delete'), { handleDelete });

//Display---------------------------------
function display() {
    User({ user });
    AddItem();
    ItemList({ list });
    DeleteList();
    
}

handlePageLoad();
