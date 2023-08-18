import { db } from "../firebase";
import { doc, query } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";

export function useUser(id) {
  const q = query(doc(db, "users", id));
  const [user, isLoading] = useDocumentData(q);

  return { user, isLoading };
}
