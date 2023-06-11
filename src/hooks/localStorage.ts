export const SetStoraged = (key : string, id : string) => {
    if (typeof localStorage !== 'undefined') {
        const storageItems = GetStoraged(key);
        storageItems.push(id);
        localStorage.setItem(key, JSON.stringify(storageItems));
    }
};

export const RemoveStoraged = (key : string, id : string) => {
    if (typeof localStorage !== 'undefined') {
        const storageItems = GetStoraged(key);
        const updatedStorageItems = storageItems.filter((favoriteId : string) => favoriteId !== id);
        localStorage.setItem(key, JSON.stringify(updatedStorageItems));
    }
};

export const GetStoraged = (key : string) : string[] => {
    let storageItems = [""];
    if (typeof localStorage !== 'undefined') {
        storageItems = JSON.parse(localStorage.getItem(key) ?? '[]');
    }
    return storageItems;
};