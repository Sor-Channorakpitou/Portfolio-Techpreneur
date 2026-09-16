import * as React from 'react'

/**
 * Reusable container component that utilizes the `children` prop.
 * Enforces Tailwind's 4px spacing scale (p-6 = 24px) and text hierarchy.
 */
export function SectionCard({
  title,
  subtitle,
  action,
  children,
  className = '',
}) {
  return (
    <section
      className={`rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md ${className}`}
    >
      {(title || subtitle || action) && (
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-gray-100">
          <div>
            {title && (
              <h2 className="text-xl font-bold tracking-tight text-gray-900">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-1 text-sm text-gray-500">
                {subtitle}
              </p>
            )}
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </div>
      )}
      {children}
    </section>
  )
}
