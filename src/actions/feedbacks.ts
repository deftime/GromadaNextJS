'use server'

import { dbServer } from "@/api/firebase-server";
import { verifySession } from "@/api/adminAuthVerify";

// Server Action функции для Feedback Form

export async function updateFeedback(answer: string, id: string) {
  const session = await verifySession();
  const dbRef = dbServer.ref(`Feedbacks/Fe-${id}`);

  const snapshot = await dbRef.once('value');
  if (!snapshot.exists()) {
    return { error: 'DB path failed! Feedback not found.' };
  }

   await dbRef.update({
    'answer': answer,
    'answered': session.email
  });

  return { success: 'Answer updated successfully!' };
}

export async function deleteFeedback(id: string) {
  await verifySession();
  const dbRef = dbServer.ref(`Feedbacks/Fe-${id}`);

  const snapshot = await dbRef.once('value');
  if (!snapshot.exists()) {
    return { error: 'DB path failed! Feedback not found.' };
  }

  await dbRef.remove();
}

export async function getFeedback(id: string) {
  await verifySession();
  const dbRef = dbServer.ref(`Feedbacks/Fe-${id}`);

  const snapshot = await dbRef.once('value');
  if (!snapshot.exists()) {
    return { error: 'DB path failed! Feedback not found.' };
  }

  return { data: snapshot.val() };
}