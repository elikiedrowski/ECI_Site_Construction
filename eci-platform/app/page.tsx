"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sidebar } from "@/components/sidebar"
import {
  FileText,
  Building2,
  Users,
  Database,
  BarChart3,
  ArrowRight,
  TrendingUp,
  Clock,
  CheckCircle2
} from "lucide-react"

const modules = [
  {
    name: "Proposal Management",
    description: "AI-powered proposal creation, RFP analysis, and historical search",
    icon: FileText,
    href: "/proposals",
    status: "active",
    stats: { label: "Active Proposals", value: "12" }
  },
  {
    name: "Municipal CRM",
    description: "Track long-cycle municipal projects and relationship touch-points",
    icon: Building2,
    href: "/crm",
    status: "coming-soon",
    phase: "Phase 3 - Q2 2026"
  },
  {
    name: "Resource Management",
    description: "Staffing allocation, capacity planning, and utilization tracking",
    icon: Users,
    href: "/resources",
    status: "coming-soon",
    phase: "Phase 4 - Q3 2026"
  },
  {
    name: "Data Aggregation",
    description: "Unified dashboard integrating Procore, financial, and estimating systems",
    icon: Database,
    href: "/data",
    status: "coming-soon",
    phase: "Phase 5 - Q3 2026"
  },
  {
    name: "Project Intelligence",
    description: "Cost tracking, budget analysis, and predictive analytics",
    icon: BarChart3,
    href: "/intelligence",
    status: "coming-soon",
    phase: "Phase 5 - Q4 2026"
  },
]

const quickStats = [
  {
    name: "Time Saved This Month",
    value: "48 hrs",
    change: "+23%",
    icon: Clock,
    trend: "up"
  },
  {
    name: "Proposals Submitted",
    value: "8",
    change: "+2 from last month",
    icon: FileText,
    trend: "up"
  },
  {
    name: "Win Rate",
    value: "67%",
    change: "+12% vs. last quarter",
    icon: TrendingUp,
    trend: "up"
  },
  {
    name: "Projects Won",
    value: "$8.2M",
    change: "YTD 2026",
    icon: CheckCircle2,
    trend: "neutral"
  },
]

export default function HomePage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, Ted</h1>
            <p className="mt-2 text-gray-600">
              Here's what's happening with your business intelligence platform
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {quickStats.map((stat) => (
              <Card key={stat.name}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                      <p className="mt-2 text-3xl font-semibold text-gray-900">{stat.value}</p>
                      <p className="mt-2 text-sm text-gray-500">{stat.change}</p>
                    </div>
                    <div className="ml-4">
                      <div className="rounded-lg bg-blue-50 p-3">
                        <stat.icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Platform Modules */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Platform Modules</h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {modules.map((module) => (
                <Card key={module.name} className={module.status === 'coming-soon' ? 'opacity-75' : ''}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`rounded-lg p-2 ${
                          module.status === 'active' ? 'bg-blue-50' : 'bg-gray-100'
                        }`}>
                          <module.icon className={`h-6 w-6 ${
                            module.status === 'active' ? 'text-blue-600' : 'text-gray-400'
                          }`} />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{module.name}</CardTitle>
                          {module.status === 'coming-soon' && (
                            <span className="mt-1 inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                              {module.phase}
                            </span>
                          )}
                        </div>
                      </div>
                      {module.stats && (
                        <div className="text-right">
                          <p className="text-2xl font-semibold text-gray-900">{module.stats.value}</p>
                          <p className="text-xs text-gray-500">{module.stats.label}</p>
                        </div>
                      )}
                    </div>
                    <CardDescription className="mt-2">{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant={module.status === 'active' ? 'default' : 'outline'}
                      className="w-full"
                      disabled={module.status === 'coming-soon'}
                    >
                      {module.status === 'active' ? 'Open Module' : 'Coming Soon'}
                      {module.status === 'active' && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* POC Notice */}
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-blue-100 p-2">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Phase 1 POC - Demonstration Mode</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    This is a non-functional proof of concept showcasing the complete platform vision. 
                    The Proposal Management module is fully interactive with simulated data. 
                    Additional modules (Municipal CRM, Resources, Data Aggregation, Project Intelligence) 
                    are shown as previews to demonstrate the unified platform approach.
                  </p>
                  <div className="mt-4">
                    <Button variant="outline" size="sm">
                      View Implementation Plan
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
