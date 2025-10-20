import Input from './components/input';
import Header from './components/header';
import Chat from './components/chat';
import Layout from './components/layout';
import { useChat } from './hooks/use.chat';

export default function App() {
  const { messages, isLoading, error, sendMessage, clearChat } = useChat();
  
  return (
    <Layout>
      <Header onClearChat={clearChat} />
      <Chat messages={messages} isLoading={isLoading} error={error} />
      <Input onSendMessage={sendMessage} disabled={isLoading} />
    </Layout>
  );
}