import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  projectId: import.meta.env.VITE_APPWRITE_PROJECTID,
  url: import.meta.env.VITE_APPWRITE_URL,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASEID,
  storageId: import.meta.env.VITE_APPWRITE_STORAGEID,
  userCollectionId: import.meta.env.VITE_APPWRITE_USERID,
  postCollectionId: import.meta.env.VITE_APPWRITE_POSTID,
  savesCollectionId: import.meta.env.VITE_APPWRITE_SAVESID,
};

export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
