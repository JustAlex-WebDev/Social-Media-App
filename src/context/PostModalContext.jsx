import { createContext, useState } from "react";

export const PostModalContext = createContext();

export const PostModalContextProvider = ({ children }) => {
  const [postModal, setPostModal] = useState(false);

  return (
    <PostModalContext.Provider value={{ postModal, setPostModal }}>
      {children}
    </PostModalContext.Provider>
  );
};
