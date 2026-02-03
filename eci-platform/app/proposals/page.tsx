"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { mockProposals, type Proposal, type ProjectType, type ProposalStatus } from "@/lib/mock-data/proposals"
import {
  Search,
  Filter,
  Plus,
  FileText,
  Calendar,
  DollarSign,
  Clock,
  Tag,
  Download,
  Eye
} from "lucide-react"

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date)
}

const getStatusColor = (status: ProposalStatus) => {
  switch (status) {
    case 'Won':
      return 'bg-green-100 text-green-700'
    case 'Lost':
      return 'bg-red-100 text-red-700'
    case 'Pending':
      return 'bg-yellow-100 text-yellow-700'
  }
}

export default function ProposalsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState<ProjectType | "All">("All")
  const [selectedStatus, setSelectedStatus] = useState<ProposalStatus | "All">("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredProposals = mockProposals.filter(proposal => {
    const matchesSearch = proposal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         proposal.client.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === "All" || proposal.projectType === selectedType
    const matchesStatus = selectedStatus === "All" || proposal.status === selectedStatus
    return matchesSearch && matchesType && matchesStatus
  })

  const stats = {
    total: mockProposals.length,
    pending: mockProposals.filter(p => p.status === 'Pending').length,
    won: mockProposals.filter(p => p.status === 'Won').length,
    totalValue: mockProposals.reduce((sum, p) => sum + p.budget, 0)
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Proposal Library</h1>
              <p className="mt-2 text-gray-600">
                Search and manage historical proposals
              </p>
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              New Proposal
            </Button>
          </div>

          {/* Stats */}
          <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Proposals</p>
                    <p className="mt-2 text-3xl font-semibold text-gray-900">{stats.total}</p>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-3">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Pending</p>
                    <p className="mt-2 text-3xl font-semibold text-gray-900">{stats.pending}</p>
                  </div>
                  <div className="rounded-lg bg-yellow-50 p-3">
                    <Clock className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Won</p>
                    <p className="mt-2 text-3xl font-semibold text-gray-900">{stats.won}</p>
                  </div>
                  <div className="rounded-lg bg-green-50 p-3">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Value</p>
                    <p className="mt-2 text-2xl font-semibold text-gray-900">{formatCurrency(stats.totalValue)}</p>
                  </div>
                  <div className="rounded-lg bg-purple-50 p-3">
                    <DollarSign className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <div className="mb-6 flex flex-wrap gap-4">
            <div className="relative flex-1 min-w-[300px]">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search proposals..."
                className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <select
              className="rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as ProjectType | "All")}
            >
              <option value="All">All Types</option>
              <option value="Recreation">Recreation</option>
              <option value="Sports Complex">Sports Complex</option>
              <option value="Aquatic">Aquatic</option>
              <option value="Playground">Playground</option>
            </select>

            <select
              className="rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value as ProposalStatus | "All")}
            >
              <option value="All">All Status</option>
              <option value="Won">Won</option>
              <option value="Lost">Lost</option>
              <option value="Pending">Pending</option>
            </select>
          </div>

          {/* Proposals Grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {filteredProposals.map((proposal) => (
              <Card key={proposal.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 line-clamp-2">{proposal.title}</h3>
                      <p className="mt-1 text-sm text-gray-600">{proposal.client}</p>
                    </div>
                    <span className={`ml-2 rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(proposal.status)}`}>
                      {proposal.status}
                    </span>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Tag className="h-4 w-4" />
                      <span>{proposal.projectType}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <DollarSign className="h-4 w-4" />
                      <span>Budget: {formatCurrency(proposal.budget)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <DollarSign className="h-4 w-4" />
                      <span>Fee: {formatCurrency(proposal.fee)} ({proposal.feePercentage}%)</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(proposal.submissionDate)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{proposal.durationMonths} months</span>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1">
                    {proposal.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 gap-2">
                      <Eye className="h-4 w-4" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProposals.length === 0 && (
            <div className="text-center py-12">
              <FileText className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No proposals found</h3>
              <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
