import shopActionTypes from "./shop.types"

export const UpdateCollections=collectionMap=>{
    return {
        type:shopActionTypes.UPDATE_COLLECTIONS,
        payload:collectionMap,
    }
}