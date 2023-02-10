import React, {
  useContext,
  useMemo,
  useState,
} from 'react'

export type ContextValue = {
  session: string | undefined
  setSession: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const WalletContext = React.createContext<ContextValue | undefined>(
  undefined,
)

interface Props {
  children: React.ReactNode
}

export const WalletProvider: React.FC<Props> = (props) => {
  const [session, setSession] = useState<string>();

  const value = useMemo(
    () => ({
      session,
      setSession,
    }),
    [
      session,
      setSession,
    ],
  )

  return <WalletContext.Provider value={value} {...props} />
}

export const useWallet = (): ContextValue => {
  const context = useContext(WalletContext)
  if (context === undefined) {
    throw new Error('Error')
  }
  return context
}