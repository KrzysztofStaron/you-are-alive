"use server";

import { db } from "@/app/firebase";
import { collection, addDoc } from "firebase/firestore";

export async function addQuote(quote: string) {
  const quotesCollection = collection(db, "quotes");
  await addDoc(quotesCollection, { quote });
}
