import { createContext, useState } from "react";

export const MessageContext = createContext();

export default function MessageProvider({ children }) {
  const [message, setMessage] = useState("");

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  );
}
