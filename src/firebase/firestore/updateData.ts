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
  data: any,
  updatingOffice = false
) {
  // Variable to store the result of the operation
  let result = null;
  // Variable to store any error that occurs during the operation
  let error = null;

  try {
    const officeRef = doc(db, 'offices', String(id));
    if (updatingOffice) {
      result = await updateDoc(officeRef, {
        // @ts-ignore
        ...data
      });
    } else {

      data.map(async (info: unknown) => {
        // @ts-ignore
        result = await updateDoc(doc(db, 'offices', String(info.id)), {
          // @ts-ignore
          originalStaff: info.originalStaff,

          // @ts-ignore

          staff: info.staff
        });
      });
    }
  } catch (e) {
    console.log('error on update doc', e);
    // Catch and store any error that occurs during the operation
    error = e;
  }
  // Return the result and error as an object
  return { result, error };
}
