# Chat Interface

Uma interface de chat moderna construída com React + TypeScript + Vite usando styled-components.

## 🚀 Funcionalidades

- **Tela de Login**: Interface elegante para entrada de usuário
- **Chat em Tempo Real**: Interface completa de chat com mensagens
- **Status Online/Offline**: Indicador visual do status do usuário
- **Design Responsivo**: Interface moderna e responsiva
- **TypeScript**: Tipagem forte para melhor desenvolvimento

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool moderna e rápida
- **Styled Components** - CSS-in-JS para estilização
- **React DOM** - Renderização do React

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd chat_interface
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Para build de produção:
```bash
npm run build
```

## 🎯 Como Usar

1. **Login**: Digite um nome de usuário (mínimo 3 caracteres) e clique em "Entrar no Chat"
2. **Chat**: Digite mensagens e veja as respostas automáticas do bot
3. **Status**: Observe o indicador de status que muda automaticamente entre online/offline
4. **Logout**: Clique em "Sair" para voltar à tela de login

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Login/
│   │   ├── Index.tsx         # Tela de login
│   │   └── Styled.ts
│   └── Chat/
│       ├── Index.tsx         # Interface do chat
│       ├── Styled.ts
│       └── Message.tsx
├── types/
│   └── index.ts              # Definições de tipos TypeScript
├── App.tsx                   # Componente principal
├── main.tsx                  # Ponto de entrada
├── assets/                   # Recursos estáticos (imagens, ícones, etc)
├── Hooks/                    # Hooks customizados
│   └── UserChat.ts
├── StylesThemes/             # Temas e estilos globais
│   └── Theme.ts
├── ultils/                   # Funções utilitárias
│   └── date.ts
└── index.css     
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter

## 🎨 Características do Design

- Gradientes modernos
- Animações suaves
- Indicadores de status com pulsação
- Bolhas de mensagem diferenciadas
- Interface responsiva
- Cores consistentes e profissionais

## 📝 Tipos TypeScript

O projeto utiliza tipagem forte com interfaces bem definidas:

- `MessageType` - Estrutura das mensagens
- `LoginProps` - Props do componente de login
- `ChatProps` - Props do componente de chat
- `StatusIndicatorProps` - Props do indicador de status

## 🚀 Deploy

O projeto pode ser facilmente deployado em qualquer plataforma que suporte aplicações React estáticas, como:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 📄 Licença

Este projeto está sob a licença MIT.