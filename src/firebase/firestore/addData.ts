import firebase_app from '../config';
import {
  getFirestore,
  addDoc,
  collection
} from 'firebase/firestore';

// Get the Firestore instance
const db = getFirestore(firebase_app);

// Function to add data to a Firestore collection
export default async function addData(id: string, data: any) {
  // Variable to store the result of the operation
  let result = null;
  // Variable to store any error that occurs during the operation
  let error = null;

  try {
    const docRef = await addDoc(collection(db, 'offices'), {
      ...data
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    // Catch and store any error that occurs during the operation
    error = e;
  }

  // Return the result and error as an object
  return { result, error };
}
