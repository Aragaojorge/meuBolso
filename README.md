# Aplicativo meuBolso

Esse é um aplicativo simples para acompanhamento de despesas e receitas do usuário.

## Descrição

Esse projeto foi desenvolvido com React-Native.

## Funcionalidade

- Cadastrar usuário
- Login
- Logout
- Adicionar despesas e receitas
- Listar despesas e receitas, selecionando o dia desejado
- Excluir despesas e receitas

## Pré-requisitos

- React-Native: Framework de código aberto para desenvolvimento de aplicativos para Android, IOS e etc.
- SQLite: SQL Database engine
- VSCode: Ambiente de desenvolvimento integrado recomendado para este projeto.

## Bibliotecas e módulos utilizados:

- React e React Native (para construção do aplicativo):
  npm install react react-native
- React Navigation (para navegação):
  npm install @react-navigation/native @react-navigation/drawer react-native-screens react-native-safe-area-context react-native-gesture-handler
- react-native-vector-icons (para ícones):
  npm install react-native-vector-icons
- Axios (para chamadas HTTP):
  npm install axios
- AsyncStorage (para armazenamento local):
  npm install @react-native-async-storage/async-storage
- date-fns (para manipulação e formatação de datas):
  npm install date-fns
- react-native-calendars (para calendários):
  npm install react-native-calendars
- react-native-safe-area-context (para segurança na interface):
  npm install react-native-safe-area-context
- styled-components (para estilização):
  npm install styled-components
- expo: plataforma open source para desenvolvimento de aplicativos nativos, tanto para Android quanto IOS:
  1 - para criar o aplicativo: npx create-expo-app@latest
  2 - iniciar o servidor de desenvolvimento: npx expo start

## Para executar o projeto:

- Instalar as dependências no diretório do backend, disponível no repositório de mesmo nome:
  npm install
- Sincronizar o backend:
  npx prisma migrate dev
- Iniciar o servidor do backend:
  npm run dev
- Iniciar a aplicação:
  npx expo start
