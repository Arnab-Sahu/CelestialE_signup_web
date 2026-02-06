import * as admin from "firebase-admin";
import path from "path";

// 1. Resolve the path to your JSON file
// This assumes your firebase_admin.json is in the root of your project

if (!admin.apps.length) {
  try {
    // 1. Grab the string from your .env or Vercel Environment Variables
    const serviceAccountRaw = process.env.FIREBASE_SERVICE_ACCOUNT;

    if (!serviceAccountRaw) {
      throw new Error("FIREBASE_SERVICE_ACCOUNT environment variable is missing.");
    }

    // 2. Parse the string into a JSON object
    const serviceAccount = JSON.parse(serviceAccountRaw);

    /**
     * 3. THE FIX FOR \n:
     * Even if VS Code added literal \n or the environment variable escaped them,
     * this regex finds those characters and converts them into real line breaks
     * so the RSA key format remains valid.
     */
    if (serviceAccount.private_key) {
      serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
    }

    // 4. Initialize the Admin SDK
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });

    console.log("Firebase Admin initialized successfully.");
  } catch (error: any) {
    console.error("Firebase Admin initialization error:", error.message);
  }
}

const db = admin.firestore();
export { db };
