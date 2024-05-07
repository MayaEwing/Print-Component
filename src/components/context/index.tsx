import { ReactNode, createContext, useState } from "react";

interface ContextData {
  file: File | null;
  firstname: string;
  lastname: string;
  birthyear: string;
  deathyear: string;
  email: string;
  info: string;
}

const initinalData: ContextData = {
  file: null,
  firstname: "",
  lastname: "",
  birthyear: "****",
  deathyear: "****",
  email: "****@***.com",
  info: "he is ...",
};

export const AppContext = createContext<{
  data: ContextData;
  setData: (data: Partial<ContextData>) => void;
}>({
  data: initinalData,
  setData: () => null,
});

export default function AppContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [data, setDataT] = useState(initinalData);

  return (
    <AppContext.Provider
      value={{
        data,
        setData: (d: Partial<ContextData>) =>
          setDataT((data) => ({ ...data, ...d })),
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
