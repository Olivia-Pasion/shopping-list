import { createItem } from '../services/client';


export default function createAddItem(form, { handleAdd }) {
    
    form.addEventListener('click', async () => {
        const data = new FormData(form);
        await createItem({
            item: data.get('item'),
            quantity: data.get('quantity'),
            //need to add bought category
        });
    });

    //may change event listener from this format to AddTodo demo format

    return ({ }) => {
        
    };
}