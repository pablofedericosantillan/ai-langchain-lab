import { notFound } from 'next/navigation';
import { ChatView } from '@/core/components/chat/ChatView';
import BaseLayout from '@/core/components/layout/BaseLayout';

export default async function ChatPage({
  params,
}: {
  params: Promise<{ chatId: string }>;
}) {
  const { chatId } = await params;
  const parsed = Number(chatId);
  if (!Number.isInteger(parsed)) notFound();

  return (
    <BaseLayout>
      <ChatView chatId={parsed} />
    </BaseLayout>
  );
}
