


export default function createAddItem(form, { handleAdd }) {
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const data = new FormData(form);
        handleAdd(
            data.get('item'),
            data.get('quantity')
        );
    
    });

    //may change event listener from this format to AddTodo demo format

    return () => {
        
    };
}