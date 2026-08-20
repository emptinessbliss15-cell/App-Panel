import { jsx, jsxs } from 'react/jsx-runtime';
export function AppPanel({ apps, selectedAppId, onSelect }) {
  return jsxs('div', { className: 'app-panel', children: apps.map((app) => jsx('button', { type: 'button', className: `app-panel-item${selectedAppId === app.id ? ' selected' : ''}`, onClick: () => onSelect(app), children: [app.icon, jsx('span', { children: app.name })] }, app.id)) });
}
