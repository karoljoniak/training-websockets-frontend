export function DashboardNextStepsList() {
  return (
    <ul className="list-inside list-disc space-y-2 text-muted-foreground">
      <li>Podłączenie kanału WebSocket do backendu</li>
      <li>Wyświetlanie stanu połączenia i wiadomości na żywo</li>
      <li>Opcjonalnie: endpoint profilu i dane użytkownika w nagłówku</li>
    </ul>
  )
}
