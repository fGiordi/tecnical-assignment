import firebase_app from '../config';
import {
  getFirestore,
  doc,
  updateDoc,
  setDoc,
  collection
} from 'firebase/firestore';

// Get the Firestore instance
const db = getFirestore(firebase_app);

// Function to retrieve a Update from a Firestore collection
export default async function UpdateData(
  collectionName: any,
  id: any,
  data: any
) {
  // Variable to store the result of the operation
  let result = null;
  // Variable to store any error that occurs during the operation
  let error = null;

  try {
    const officeRef = doc(db, 'offices', String(id));

    data.map(async (data: unknown) => {
      const res = await updateDoc(officeRef, {
        // @ts-ignore
        originalStaff: data.originalStaff,

        // @ts-ignore

        staff: data.originalStaff
      });
    });
  } catch (e) {
    console.log('error on update doc', e);
    // Catch and store any error that occurs during the operation
    error = e;
  }

  // Return the result and error as an object
  return { result, error };
}
