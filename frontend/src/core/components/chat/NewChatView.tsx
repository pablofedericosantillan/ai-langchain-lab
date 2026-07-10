"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { createMessage } from "./api";
import { DEFAULT_MODEL } from "./constants";
import { EmptyState } from "./EmptyState";
import { useCreateChat } from "./hooks";

export function NewChatView() {
  const router = useRouter();
  const createChat = useCreateChat();
  const [pending, setPending] = useState(false);

  const handleSend = async (content: string) => {
    setPending(true);
    try {
      const chat = await createChat.mutateAsync(content.slice(0, 60));
      await createMessage({ chat_id: chat.chat_id, role: "user", content });
      await createMessage({
        chat_id: chat.chat_id,
        role: "assistant",
        content:
          "(Respuesta simulada — todavía no está conectado el modelo real. " +
          "Este mensaje solo demuestra el flujo de guardado en la base de datos.)",
        model: DEFAULT_MODEL,
        input_tokens: Math.ceil(content.length / 4),
        output_tokens: 24,
      });
      router.push(`/c/${chat.chat_id}`);
    } finally {
      setPending(false);
    }
  };

  return <EmptyState onSend={handleSend} disabled={pending} />;
}
