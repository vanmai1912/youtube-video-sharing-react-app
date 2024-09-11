import { ReactNode } from "react";
import { SocketProvider } from "./SocketContext";
import { UserProvider } from "./UserContext";

const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <UserProvider>
      <SocketProvider url={import.meta.env.REACT_APP_SOCKET_URL || ""}>
        {children}
      </SocketProvider>
    </UserProvider>
  );
};

export default AppContextProvider;
