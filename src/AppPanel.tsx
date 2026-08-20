import type { ReactNode } from 'react'

export interface AppDefinition {
  id: string
  name: string
  icon: ReactNode
}

export interface AppPanelProps {
  apps: AppDefinition[]
  selectedAppId?: string
  onSelect: (app: AppDefinition) => void
  className?: string
}

export function AppPanel({ apps, selectedAppId, onSelect, className = '' }: AppPanelProps) {
  return (
    <nav className={`app-panel ${className}`.trim()} aria-label="Apps">
      {apps.map((app) => (
        <button
          key={app.id}
          type="button"
          className={`app-panel-item${app.id === selectedAppId ? ' is-selected' : ''}`}
          aria-label={app.name}
          aria-current={app.id === selectedAppId ? 'page' : undefined}
          title={app.name}
          onClick={() => onSelect(app)}
        >
          <span className="app-panel-icon" aria-hidden="true">{app.icon}</span>
        </button>
      ))}
    </nav>
  )
}
