export type MessageRole = "system" | "user" | "assistant" | "tool";

export interface Chat {
  chat_id: number;
  title: string | null;
  created_at: string;
}

export interface Message {
  id: string;
  chat_id: number;
  role: MessageRole;
  content: string;
  model: string | null;
  input_tokens: number | null;
  output_tokens: number | null;
  created_at: string;
}
