import { ReactNode } from "react";

import { ActionCableProvider } from "./ActionCableContext";
import { UserProvider } from "./UserContext";

const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <UserProvider>
      <ActionCableProvider url={import.meta.env.VITE_SOCKET_URL || ""}>
        {children}
      </ActionCableProvider>
    </UserProvider>
  );
};

export default AppContextProvider;
