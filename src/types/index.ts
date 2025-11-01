// Tipos globais da aplicação


export type MessageType = {
  id: number;
  text: string;
  username: string;
  timestamp: Date;
  isOwn: boolean;
};

export interface LoginProps {
  onLogin: (username: string) => void;
}

export interface ChatProps {
  username: string;
  onLogout: () => void;
}

export interface StatusIndicatorProps {
  $isOnline: boolean;
}

export interface MessageProps {
  $isOwn: boolean;
}

export interface MessageBubbleProps {
  $isOwn: boolean;
}
