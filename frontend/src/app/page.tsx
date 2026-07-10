import { NewChatView } from '@/core/components/chat/NewChatView';
import BaseLayout from '@/core/components/layout/BaseLayout';

export default function Home() {
  return (
    <BaseLayout>
      <NewChatView />
    </BaseLayout>
  );
}
