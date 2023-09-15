import firebase_app from '../config';
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  collection,
  setDoc
} from 'firebase/firestore';

// Get the Firestore instance
const db = getFirestore(firebase_app);

// Function to retrieve a document from a Firestore collection
export default async function UpdateData(
  collectionName: any,
  id: any,
  data: any
) {
  const docRef = doc(db, collectionName, String(id));

  // Variable to store the result of the operation
  let result = null;
  // Variable to store any error that occurs during the operation
  let error = null;

  try {
    // Retrieve the document using the document reference
    const res = await updateDoc(docRef, {
      ...data
    });

    console.log('result', res);
  } catch (e) {
    console.log('error on update doc', e);
    // Catch and store any error that occurs during the operation
    error = e;
  }

  // Return the result and error as an object
  return { result, error };
}
