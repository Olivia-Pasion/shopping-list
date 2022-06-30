import { client } from './client.js';

//retrieves all rows from supabase
export async function getAllItems() {
    const response = await client
        .from('shopping_list')
        .select();

    return response.data;
}


//grabs single row from supabase
export async function getItems() {
    const response = await client
        .from('shopping_list')
        .select();
        
    return response.data;
}

//sends new row to supabase
export async function createItem(item, quantity) {
    const response = await client
        .from('shopping_list')
        .insert([{ 
            item, 
            quantity 
        }])
        .single();

    return response.data;
}

//updates item status
export async function boughtItem(item) {
    const response = await client
        .from('shopping_list')
        .update({ 
            bought: true
        })
        .eq('item', item.item)
        .single();

    return response.data;
}

//removes row from supabase
export async function deleteList() {
    const response = await client
        .from('shopping_list')
        .delete()
        .neq('quantity', 0);

    return response.data;
}

