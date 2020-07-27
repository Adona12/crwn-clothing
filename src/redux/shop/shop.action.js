import shopActionTypes from "./shop.types"

// export const fetchCollectionStartAsync=()=>{
//    return (dispatch)=>{
//     const collectionRef=firestore.collection("collections");
//     dispatch(fetchCollectionStart());
//     collectionRef.get().then(snapshot=>{   
//     const collectionData=convertCollectionsSnapshotToMap(snapshot);
//     dispatch(fetchCollectionSuccess(collectionData));
//       }).catch(error=>dispatch(fetchCollectionFailure(error.message)));
//    }
// }
export const fetchCollectionStart=()=>{
    return {
        type:shopActionTypes.FETCH_COLLECTION_START,
       
    }
}
export const fetchCollectionSuccess=(collectionMap)=>{
    return {
        type:shopActionTypes.FETCH_COLLECTION_SUCCESS,
        payload:collectionMap,
    }
}
export const fetchCollectionFailure=(errorMessage)=>{
    return {
        type:shopActionTypes.FETCH_COLLECTION_FAILURE,
        payload:errorMessage,
    }
}