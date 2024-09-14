import { Consumer, createConsumer } from "@rails/actioncable";
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface ActionCableContextType {
  cable: Consumer | null;
  isConnected: boolean;
}

interface ActionCableProviderProps {
  url: string;
  children: React.ReactNode;
}

const ActionCableContext = createContext<ActionCableContextType>({
  cable: null,
  isConnected: false,
});

export const useActionCable = () => useContext(ActionCableContext);

export const ActionCableProvider: React.FC<ActionCableProviderProps> = ({
  url,
  children,
}) => {
  const [cable, setCable] = useState<Consumer | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    console.log(url);
    const newCable = createConsumer(url);

    newCable.subscriptions.create("NotificationChannel", {
      connected: () => {
        setIsConnected(true);
      },
      disconnected: () => {
        setIsConnected(false);
      },
      received: (data: { message: string }) => {
        toast.success(data.message)
      },
    });

    setCable(newCable);

    return () => {
      if (cable) {
        cable.disconnect();
      }
    };
  }, []);

  return (
    <ActionCableContext.Provider value={{ cable, isConnected }}>
      {children}
    </ActionCableContext.Provider>
  );
};
