import firebase_app from '../config';
import { getFirestore, doc, deleteDoc } from 'firebase/firestore';

// Get the Firestore instance
const db = getFirestore(firebase_app);

// Function to retrieve a document from a Firestore collection
export default async function DeleteData(collectionName: string, id: string) {
  const docRef = doc(db, collectionName, String(id));

  // Variable to store the result of the operation
  // Variable to store any error that occurs during the operation
  let error = null;

  try {
    // Retrieve the document using the document reference
    await deleteDoc(docRef);
  } catch (e) {
    console.log('error on delete doc', e);
    // Catch and store any error that occurs during the operation
    error = e;
  }

  // Return the result and error as an object
  return { error };
}
