import firebase_app from '../config';
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection
} from 'firebase/firestore';

// Get the Firestore instance
const db = getFirestore(firebase_app);

// Function to retrieve a document from a Firestore collection
export default async function getDocuments(collectionName: string) {
  // Variable to store the result of the operation
  let result = null;
  // Variable to store any error that occurs during the operation
  let error = null;

  try {
    // Retrieve the documents using the document reference
    result = await getDocs(collection(db, collectionName));
  } catch (e) {
    // Catch and store any error that occurs during the operation
    error = e;
  }

  // Return the result and error as an object
  return { result, error };
}
