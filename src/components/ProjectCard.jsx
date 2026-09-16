import * as React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/icons'

/**
 * ProjectCard composed from shadcn/ui primitives (Card, Badge, Button).
 * Demonstrates unidirectional props flow, distinct data per instance,
 * and Tailwind's 4px spacing scale (e.g. p-6 = 24px).
 */
export function ProjectCard({
  title,
  description,
  status = 'In Progress',
  statusVariant = 'secondary',
  tags = [],
  projectUrl = '#',
  repoUrl,
}) {
  return (
    <Card className="group flex flex-col justify-between border-gray-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md transition-all duration-200">
      <div>
        <CardHeader className="p-6 pb-3">
          <div className="flex items-start justify-between gap-4">
            <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
              {title}
            </CardTitle>
            <Badge variant={statusVariant} className="shrink-0 font-medium">
              {status}
            </Badge>
          </div>
          <CardDescription className="text-sm text-gray-500 mt-2 line-clamp-2">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-6 pt-2 pb-4">
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </div>

      <CardFooter className="p-6 pt-2 flex items-center gap-3">
        <Button
          asChild
          variant="default"
          size="sm"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-sm transition-colors"
        >
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5"
          >
            <span>View project</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </Button>

        {repoUrl && (
          <Button
            asChild
            variant="outline"
            size="sm"
            className="text-gray-700 border-gray-300 hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>Source</span>
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
