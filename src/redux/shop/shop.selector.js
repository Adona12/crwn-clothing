import { createSelector } from "reselect"



const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop], 
    shop => shop.collections
)

export  const selectCollectionsForPreview=createSelector(
    [selectCollections],collection=>Object.keys(collection).map(item=>collection[item])
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections =>
        collections[collectionUrlParam]
);
