import React from 'react'
import { WalletProvider } from './wallet/WalletProvider'


interface Props {
  children: React.ReactNode
}

const AppProvider: React.FC<Props> = ({ children }) => {
  return (
    <WalletProvider>{children}</WalletProvider>
  )
}

export default AppProvider