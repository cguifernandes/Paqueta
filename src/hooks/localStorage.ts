export const SetStoraged = (key : string, id : string) => {
    const favorites = GetStoraged(key);
    favorites.push(id);
    localStorage.setItem(key, JSON.stringify(favorites));
};

export const RemoveStoraged = (key : string, id : string) => {
    const favorites = GetStoraged(key);
    const updatedFavorites = favorites.filter((favoriteId : string) => favoriteId !== id);
    localStorage.setItem(key, JSON.stringify(updatedFavorites));
};

export const GetStoraged = (key : string) : string[] => {
    const favorites = JSON.parse(localStorage.getItem(key) ?? '[]');
    return favorites;
};