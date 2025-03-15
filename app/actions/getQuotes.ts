"use server";

import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export async function getQuotes(): Promise<string[]> {
  const quotes = await getDocs(collection(db, "quotes"));
  return quotes.docs.map(doc => doc.data().quote);
}
