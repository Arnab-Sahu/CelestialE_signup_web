import * as admin from "firebase-admin";
import path from "path";

// 1. Resolve the path to your JSON file
// This assumes your firebase_admin.json is in the root of your project
const serviceAccountPath = path.join(process.cwd(), "firebase_admin.json");

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      // 2. Use the path to the service account file
      credential: admin.credential.cert(serviceAccountPath),
    });
    console.log("Firebase Admin initialized via JSON file.");
  } catch (error) {
    console.error("Firebase Admin initialization error:", error);
  }
}

const db = admin.firestore();
export { db };