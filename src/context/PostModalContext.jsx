import { createContext, useRef, useState } from "react";

export const PostModalContext = createContext();

export const PostModalContextProvider = ({ children }) => {
  const [postModal, setPostModal] = useState(false);
  const searchInputRef = useRef();

  const clickToFocus = () => {
    searchInputRef.current.focus();
  };

  return (
    <PostModalContext.Provider
      value={{ postModal, setPostModal, searchInputRef, clickToFocus }}
    >
      {children}
    </PostModalContext.Provider>
  );
};
