export function getStoredItem(key) {
    const storedItem =localStorage.getItem(key)
    return storedItem;
}

export function setItemToStore(key, value) {
    localStorage.setItem(key, value);
}

export function removeItemFromStorage(key) {
    localStorage.removeItem(key);
}