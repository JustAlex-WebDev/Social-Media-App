import { useState } from "react";
import { db } from "../firebase";
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { uuidv4 } from "@firebase/util";

export function usePost(id) {
  const q = doc(db, "posts", id);
  const [post, isLoading, error] = useDocumentData(q);
  if (error) throw error;
  return { post, isLoading };
}

export function usePosts() {
  const q = query(collection(db, "posts"), orderBy("date", "desc"));
  const [posts, isLoading, error] = useCollectionData(q);
  if (error) throw error;
  return { posts, isLoading };
}

export function useToggleLike({ id, isLiked, uid }) {
  const [isLoading, setLoading] = useState(false);

  async function toggleLike() {
    setLoading(true);
    const docRef = doc(db, "posts", id);
    await updateDoc(docRef, {
      likes: isLiked ? arrayRemove(uid) : arrayUnion(uid),
    });
    setLoading(false);
  }
  return { toggleLike, isLoading };
}

export function useAddPost() {
  const [isLoading, setLoading] = useState(false);

  async function addPost(post) {
    setLoading(true);
    const id = uuidv4();
    await setDoc(doc(db, "posts", id), {
      ...post,
      id,
      date: Date.now(),
      likes: [],
    });
    setLoading(false);
  }

  return { addPost, isLoading };
}

export function useDeletePost(id) {
  const [isLoading, setLoading] = useState(false);

  async function deletePost() {
    setLoading(true);
    // const docRef = doc(db, "posts", id);
    // await updateDoc(docRef, {
    //   likes: isLiked ? arrayRemove(uid) : arrayUnion(uid),
    // });
    setLoading(false);
  }
  return { deletePost, isLoading };
}
