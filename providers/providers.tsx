"use client"

import type { ReactNode } from "react"

import { WebSocketProvider } from "@/providers/websocket/websocket-provider"

type ProvidersProps = {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return <WebSocketProvider>{children}</WebSocketProvider>
}
