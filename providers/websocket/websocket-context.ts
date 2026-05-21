"use client"

import { createContext, type RefObject } from "react"
import type { Socket } from "socket.io-client"

export type WebSocketContextValue = {
  /** Ref do instancji — czytaj socketRef.current w momencie użycia (emit, subscribe). */
  socketRef: RefObject<Socket | null>
}

export const WebSocketContext = createContext<WebSocketContextValue | null>(
  null,
)
