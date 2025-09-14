import { JSX, useState } from 'react';
import { UserLogin } from './components/Login/Index'
import Chat from './components/Chat/Index';


function App(): JSX.Element {
  const [user, setUser] = useState<string | null>(null);

  const handleLogin = (username: string): void => {
    setUser(username);
  };

  const handleLogout = (): void => {
    setUser(null);
  };

  return (
    <>
      {user ? (
        <Chat username={user} onLogout={handleLogout} />
      ) : (
        <UserLogin onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;
