import * as React from 'react'

/**
 * Reusable component rendering distinct content per instance via props.
 * Demonstrates unidirectional data flow, 4px spacing scale (p-4 = 16px),
 * and gray contrast hierarchy (text-gray-900 / 700 / 500).
 */
export function StatItem({
  icon: Icon,
  label,
  value,
  description,
  accent = false,
}) {
  return (
    <div
      className={`group flex items-start gap-4 rounded-lg border p-4 transition-all duration-200 ${
        accent
          ? 'border-indigo-200 bg-indigo-50/50 hover:bg-indigo-50'
          : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
      }`}
    >
      {Icon && (
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md transition-colors ${
            accent
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-700 group-hover:bg-indigo-50 group-hover:text-indigo-600'
          }`}
        >
          <Icon className="h-5 w-5" />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          {label}
        </p>
        <p className="mt-1 text-base font-bold text-gray-900 truncate">
          {value}
        </p>
        {description && (
          <p className="mt-0.5 text-xs text-gray-500">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
