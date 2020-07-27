import { takeEvery, call, put ,all} from "redux-saga/effects"
import shopActionTypes from "./shop.types"
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utiils"
import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop.action";

export function* fetchCollectionAsync() {
    try {
        const collectionRef = firestore.collection("collections");
        const snapshot = yield collectionRef.get()
        const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionSuccess(collectionMap));

    } catch (error) {
        yield put(fetchCollectionFailure(error.message));
    }



}


export function* fetchCollectionStart() {
    yield takeEvery(shopActionTypes.FETCH_COLLECTION_START, fetchCollectionAsync)
 
}

export function* shopSagas(){
   yield all([call(fetchCollectionStart)])
}