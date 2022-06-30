

export default function createItemList(root, {
    handleBought
}) {
    
    return ({ list }) => {
        root.innerHTML = '';
        
        for (const item of list) {
            const p = ListItem({
                item,
                handleBought
            });
            root.append(p);
        }
    };

}

export function ListItem({ item, handleBought }) {
    const p = document.createElement('p');
    if (item.bought) {
        p.classList.add('bought');
    }

    p.addEventListener('dblclick', () => {
        handleBought(item);
    });

    const div = document.createElement('div');
    div.classList.add('view');

    const label = document.createElement('label');
    label.textContent = item.item;

    const label2 = document.createElement('label');
    label2.textContent = item.quantity;


    div.append(label, label2);

    p.append(div);

    return p;
    
}

