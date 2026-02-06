import { NextResponse } from "next/server";
import { db } from "@/app/lib/firebaseAdmin";
import * as admin from 'firebase-admin'

export async function POST(request:Request) {
    try {
        const {raw_email, raw_username} = await request.json()
        const email = raw_email.trim().toLowerCase()
        const username = raw_username.trim()
        if (!email || !username) {
            return NextResponse.json({ message: "Missing fields", type:"error" }, { status: 301 },);
        }
        const query = await db.collection("waitlist").where("email", "==", email).get()
        if (!query.empty) {
            return NextResponse.json({ message: "Email already registered.", type:"error" }, { status: 401 });
        }
        await db.collection("waitlist").add({
            email: email,
            username: username,
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
        });
        return NextResponse.json({ message: "Welcome to the waitlist, "+username + "!", type:"success" }, { status: 201 });
    } catch (error: any) {
        console.error("Firebase Error:", error.message);
        return NextResponse.json({ message: "Database failure", type:"error" }, { status: 500 });
    }
} 