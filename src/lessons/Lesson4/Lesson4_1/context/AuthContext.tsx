import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

type User = {
  id: string
  username: string
  email: string
}

type AuthContextType = {
  user: User | null
  login: (userInfo: User) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('auth error')
  }
  return context
}

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<User | null>(null)

  const login = useCallback((userInfo: User) => {
    if (
      userInfo.username === 'testUser' &&
      userInfo.email === 'test@gmail.com'
    ) {
      setUser(userInfo)
    } else {
      console.log('login error')
    }
  }, [])

  const logout = useCallback(() => {
    setUser(null)
  }, [])

  const contextValue = useMemo(
    () => ({ user, login, logout }),
    [user, login, logout]
  )

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}
