import { uuidv4 } from "@firebase/util";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";

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
