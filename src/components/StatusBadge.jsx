import * as React from 'react'

/**
 * Reusable StatusBadge component with Tailwind's 4px scale
 * and animated pulse indicator.
 */
export function StatusBadge({ isBusy = false, label }) {
  const displayText = label || (isBusy ? 'Busy learning' : 'Open to work')

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold transition-colors ${
        isBusy
          ? 'bg-gray-100 text-gray-700 border border-gray-200'
          : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
      }`}
    >
      <span className="relative flex h-2 w-2">
        {!isBusy && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        )}
        <span
          className={`relative inline-flex h-2 w-2 rounded-full ${
            isBusy ? 'bg-gray-400' : 'bg-emerald-500'
          }`}
        />
      </span>
      <span>{displayText}</span>
    </span>
  )
}
