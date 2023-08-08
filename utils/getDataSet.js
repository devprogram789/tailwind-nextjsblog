import admin from '../services/nodeApp'

const dxb = admin.firestore();
const entry_data_center = dxb.collection("data_center").doc();

export const getDatacollectionSet = async () => {
  dxb.listCollections().then(snapshot=>{
      snapshot.forEach(snaps => {
        console.log(snaps["_queryOptions"].collectionId);
        return snaps["_queryOptions"].collectionId;
      })
  })
  .catch(error => console.error(error));
}

export const getAllDataX = async () => {

  const snapshot = await entry_data_center.where('capital', '==', true).get();
  if (snapshot.empty) {
    console.log('No matching documents.');
    return;
  }  
 

  if (!snapshot) {
    return null
  }
  
  return snapshot
}

export const getCollectionData = async () => {
  const docsRef = dxb.collection("data_center");
  const mainDocs = [];

  const docs = await docsRef.get();
  docs.forEach(async (doc) => {
    mainDocs.push({ ...doc.data(), _id: doc.id });
  });

  return mainDocs;
}