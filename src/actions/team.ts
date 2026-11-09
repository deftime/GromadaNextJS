'use server'

import { verifySession } from "@/api/adminAuthVerify";
import { dbServer } from "@/api/firebase-server";
import { TeamMemberType } from "@/types/firebase-data";

// Server Action функции для Team

export async function getTeammate(id: string) {
  await verifySession();
  const dbRef = dbServer.ref(`Team/Tm-${id}`);

  const snapshot = await dbRef.once('value');
  if (!snapshot.exists()) {
    return { error: 'DB path failed! Teammate not found.' };
  }

  return { data: snapshot.val() };
}

export async function updateTeammate(data: TeamMemberType) {
  await verifySession();
  const dbRef = dbServer.ref(`Team/Tm-${data.id}`);

  const snapshot = await dbRef.once('value');
  if (!snapshot.exists()) {
    return { error: 'DB path failed! Teammate not found.' };
  }

  await dbRef.update(data);

  return { success: 'Teammate updated successfully!' };
}

export async function createTeammate(data: TeamMemberType) {
  await verifySession();
  const dbRef = dbServer.ref(`Team/Tm-${data.id}`);

  const snapshot = await dbRef.once('value');
  if (snapshot.exists()) {
    return { error: 'DB path failed! Teammate ALREADY exists.' };
  }

  await dbRef.set(data);

  return { success: 'Teammate created successfully!' };
}

export async function deleteTeammate(id: string) {
  await verifySession();
  const dbRef = dbServer.ref(`Team/Tm-${id}`);

  const snapshot = await dbRef.once('value');
  if (!snapshot.exists()) {
    return { error: 'DB path failed! Teammate not found.' };
  }

  await dbRef.remove();
}