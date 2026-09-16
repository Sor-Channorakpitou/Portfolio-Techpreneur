import * as React from 'react'
import {
  Code2,
  Briefcase,
  GraduationCap,
  Mail,
  MapPin,
  ExternalLink,
  Layers,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'

import { ProjectCard } from '@/components/ProjectCard'
import { SectionCard } from '@/components/SectionCard'
import { StatItem } from '@/components/StatItem'
import { StatusBadge } from '@/components/StatusBadge'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function App() {
  // Project dataset 1 & 2 - maintaining independent, unidirectional data flow
  const featuredProjects = [
    {
      id: 'proj-1',
      title: 'E-Commerce Storefront',
      description:
        'A high-performance modern web storefront featuring dynamic product filtering, seamless cart state, responsive layouts, and Tailwind UI components.',
      status: 'Live Production',
      statusVariant: 'success',
      tags: ['React 19', 'Tailwind CSS', 'shadcn/ui', 'Vite'],
      projectUrl: 'https://github.com/Sor-Channorakpitou',
      repoUrl: 'https://github.com/Sor-Channorakpitou',
    },
    {
      id: 'proj-2',
      title: 'DevPulse Analytics Dashboard',
      description:
        'Developer performance telemetry interface featuring interactive metrics, responsive two-column data views, and accessible UI blueprints.',
      status: 'In Development',
      statusVariant: 'warning',
      tags: ['React', 'Tailwind CSS', 'TypeScript', 'Radix UI'],
      projectUrl: 'https://github.com/Sor-Channorakpitou',
      repoUrl: 'https://github.com/Sor-Channorakpitou',
    },
  ]

  const technicalSkills = [
    'React 19',
    'JavaScript (ES6+)',
    'Tailwind CSS',
    'shadcn/ui',
    'HTML5 & Semantic Web',
    'Responsive Design',
    'Vite',
    'Git & GitHub',
    'REST APIs',
    'Component Architecture',
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 font-bold text-white shadow-sm">
              SC
            </div>
            <div>
              <span className="block text-sm font-bold tracking-tight text-gray-900">
                Sor Channorakpitou
              </span>
              <span className="block text-xs text-gray-500">
                Front-End Developer
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <StatusBadge isBusy={false} label="Open to work" />
            <Button
              asChild
              size="sm"
              variant="default"
              className="hidden sm:inline-flex bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-colors"
            >
              <a href="#contact">
                <span>Connect</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Container: Single column on phone, 2 columns (main + sidebar) from md: up */}
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
          
          {/* ========================================================= */}
          {/* SIDEBAR COLUMN (md:col-span-4) - Profile, Stats & Contact */}
          {/* ========================================================= */}
          <aside className="space-y-6 md:col-span-4">
            {/* Profile Overview Card */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-400 text-2xl font-bold text-white shadow-md">
                    SC
                  </div>
                  <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-500" />
                </div>

                <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                  Sor Channorakpitou
                </h1>
                <p className="mt-1 text-sm font-medium text-indigo-600">
                  Front-End Web Developer
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                  Becoming a skillful front-end developer and ready for employment. Focused on building clean, accessible, and responsive user experiences.
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-xs text-gray-500">
                  <MapPin className="h-3.5 w-3.5 text-gray-400" />
                  <span>Phnom Penh, Cambodia</span>
                </div>

                <div className="mt-5 w-full border-t border-gray-100 pt-5">
                  <div className="flex justify-center gap-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                    >
                      <a
                        href="https://github.com/Sor-Channorakpitou"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-1.5"
                      >
                        <GithubIcon className="h-4 w-4" />
                        <span>GitHub</span>
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                    >
                      <a
                        href="mailto:contact@example.com"
                        className="inline-flex items-center justify-center gap-1.5"
                      >
                        <Mail className="h-4 w-4" />
                        <span>Email</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics (Props-driven reusable StatItem component instances) */}
            <SectionCard
              title="Highlights"
              subtitle="Current metrics & focus"
            >
              <div className="space-y-3">
                <StatItem
                  icon={Briefcase}
                  label="Experience"
                  value="Ready for Hire"
                  description="Front-End / React Developer"
                  accent={true}
                />
                <StatItem
                  icon={Code2}
                  label="Core Stack"
                  value="React 19 & Tailwind"
                  description="Component-driven architecture"
                />
                <StatItem
                  icon={GraduationCap}
                  label="Education"
                  value="Techpreneur"
                  description="Hands-on frontend engineering"
                />
              </div>
            </SectionCard>

            {/* Skills Card using SectionCard (children prop) */}
            <SectionCard
              title="Technologies"
              subtitle="Tools and frameworks I work with"
            >
              <div className="flex flex-wrap gap-1.5">
                {technicalSkills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 transition-colors hover:border-indigo-300 hover:bg-indigo-50/50 hover:text-indigo-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </SectionCard>
          </aside>

          {/* ========================================================= */}
          {/* MAIN CONTENT COLUMN (md:col-span-8) - Featured Projects   */}
          {/* ========================================================= */}
          <section className="space-y-6 md:col-span-8">
            {/* Introduction Banner Card */}
            <div className="rounded-xl border border-indigo-100 bg-gradient-to-r from-indigo-50/80 via-white to-indigo-50/40 p-6 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-700">
                <Sparkles className="h-4 w-4" />
                <span>Professional Portfolio</span>
              </div>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Crafting modern, accessible web interfaces
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
                Building scalable interfaces following Tailwind's 4px spacing scale, semantic HTML, and reusable component architectures. Every detail is calibrated for clarity, contrast, and performance.
              </p>
            </div>

            {/* Featured Projects Section composed with SectionCard ({children}) */}
            <SectionCard
              title="Featured Projects"
              subtitle="Crafted with shadcn/ui blueprints and responsive Tailwind CSS"
              action={
                <Badge variant="outline" className="border-indigo-200 text-indigo-700 bg-indigo-50">
                  2 Showcase Projects
                </Badge>
              }
            >
              {/* Project Cards Grid: 1 col on mobile, 2 cols on tablet/desktop */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {featuredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    status={project.status}
                    statusVariant={project.statusVariant}
                    tags={project.tags}
                    projectUrl={project.projectUrl}
                    repoUrl={project.repoUrl}
                  />
                ))}
              </div>
            </SectionCard>

            {/* Component Architecture & Design Principles (SectionCard with children) */}
            <SectionCard
              title="Engineering Philosophy"
              subtitle="How I approach web application development"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-gray-100 bg-gray-50/50 p-4 transition-colors hover:border-gray-200">
                  <div className="flex items-center gap-2 font-semibold text-gray-900">
                    <Layers className="h-4 w-4 text-indigo-600" />
                    <span>Strict 4px Scale</span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-gray-600">
                    All paddings and margins leverage Tailwind's scale (e.g. p-6 = 24px, gap-4 = 16px). No arbitrary bracket styles.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-100 bg-gray-50/50 p-4 transition-colors hover:border-gray-200">
                  <div className="flex items-center gap-2 font-semibold text-gray-900">
                    <Sparkles className="h-4 w-4 text-indigo-600" />
                    <span>WCAG Contrast Grays</span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-gray-600">
                    Strict text hierarchy with text-gray-900 headings, text-gray-700 body copy, and text-gray-500 metadata.
                  </p>
                </div>
              </div>
            </SectionCard>

            {/* Contact / Employment Call to Action */}
            <div id="contact" className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Interested in working together?
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    I am actively seeking junior/entry-level front-end developer opportunities.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <Button
                    asChild
                    variant="default"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-sm transition-colors"
                  >
                    <a href="mailto:contact@example.com">
                      <Mail className="mr-1.5 h-4 w-4" />
                      <span>Get in Touch</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-gray-200 bg-white py-6 text-center text-xs text-gray-500">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} Sor Channorakpitou. Built with React, Tailwind CSS & shadcn/ui.</span>
          <span className="text-gray-400">Tailwind 4px Scale &bull; Accessible Hierarchy</span>
        </div>
      </footer>
    </div>
  )
}