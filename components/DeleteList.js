

export default function createDeleteList(root, { list, handleDelete }) {

    const button = document.getElementById('delete');
    root.classList.add('destroy');
    button.addEventListener('click', () => {
        handleDelete(list); 
    });
    return () => {};
}   