import type { IncomingMessage, ServerResponse } from "node:http";

export function handleContactRequest(
  req: IncomingMessage,
  res: ServerResponse,
): Promise<void>;
