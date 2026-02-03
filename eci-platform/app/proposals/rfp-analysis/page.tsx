"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Upload,
  FileText,
  AlertCircle,
  CheckCircle2,
  Clock,
  DollarSign,
  Calendar
} from "lucide-react"

export default function RFPAnalysisPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [hasFile, setHasFile] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const handleAnalyze = () => {
    setIsAnalyzing(true)
    setTimeout(() => {
      setIsAnalyzing(false)
      setShowResults(true)
    }, 2000)
  }

  const mockAnalysis = {
    projectName: "Central Community Aquatic Center Renovation",
    client: "City of Boulder",
    budgetRange: { min: 2500000, max: 3200000 },
    deadline: "March 15, 2026",
    pageLimit: 25,
    inconsistencies: [
      "Page 3 states 30 page limit, but cover page states 25 pages",
      "Section 2.3 requests timeline in months, Section 4.1 requests timeline in weeks"
    ],
    requiredSections: [
      "Executive Summary",
      "Safety Plan & Compliance",
      "Project Approach & Methodology",
      "Timeline & Milestones",
      "Team Qualifications",
      "References (minimum 3 similar projects)",
      "Cost Breakdown & Fee Structure"
    ],
    keyRequirements: [
      "LEED Gold certification required",
      "Prevailing wage compliance mandatory",
      "Minimum 5 years experience with aquatic facilities",
      "Local subcontractor preference (25% minimum)",
      "Proof of bonding capacity $5M+"
    ],
    priority: "High" as const
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">RFP Analysis</h1>
            <p className="mt-2 text-gray-600">
              Upload and analyze RFP documents with AI-powered extraction
            </p>
          </div>

          {!showResults ? (
            <div className="max-w-4xl">
              <Card className="border-2 border-dashed">
                <CardContent className="p-12">
                  <div className="text-center">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-50">
                      <Upload className="h-12 w-12 text-blue-600" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900">Upload RFP Document</h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Drop your RFP file here or click to browse
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Supports PDF, Word documents up to 50MB
                    </p>
                    <div className="mt-6 flex justify-center gap-4">
                      <Button onClick={() => setHasFile(true)}>
                        <Upload className="mr-2 h-4 w-4" />
                        Choose File
                      </Button>
                    </div>
                    
                    {hasFile && (
                      <div className="mt-6 rounded-lg bg-gray-50 p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <FileText className="h-6 w-6 text-gray-600" />
                            <div className="text-left">
                              <p className="text-sm font-medium">Boulder_Aquatic_Center_RFP_2026.pdf</p>
                              <p className="text-xs text-gray-500">4.2 MB</p>
                            </div>
                          </div>
                          <Button onClick={handleAnalyze} disabled={isAnalyzing}>
                            {isAnalyzing ? "Analyzing..." : "Analyze Document"}
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6 border-blue-200 bg-blue-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900">What this tool does:</h3>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                      <span>Extracts key project information and requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                      <span>Identifies submission deadlines and page limits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                      <span>Detects inconsistencies in RFP document</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                      <span>Prioritizes requirements by importance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Header */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900">{mockAnalysis.projectName}</h2>
                      <p className="mt-1 text-gray-600">{mockAnalysis.client}</p>
                    </div>
                    <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
                      {mockAnalysis.priority} Priority
                    </span>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-blue-50 p-2">
                        <DollarSign className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Budget Range</p>
                        <p className="font-semibold">
                          ${(mockAnalysis.budgetRange.min / 1000000).toFixed(1)}M - ${(mockAnalysis.budgetRange.max / 1000000).toFixed(1)}M
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-red-50 p-2">
                        <Calendar className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Deadline</p>
                        <p className="font-semibold">{mockAnalysis.deadline}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-purple-50 p-2">
                        <FileText className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Page Limit</p>
                        <p className="font-semibold">{mockAnalysis.pageLimit} pages</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Inconsistencies */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-yellow-600" />
                      Inconsistencies Detected ({mockAnalysis.inconsistencies.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {mockAnalysis.inconsistencies.map((item, i) => (
                        <div key={i} className="rounded-lg border border-yellow-200 bg-yellow-50 p-3">
                          <p className="text-sm text-gray-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Required Sections */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-blue-600" />
                      Required Sections ({mockAnalysis.requiredSections.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {mockAnalysis.requiredSections.map((section, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                          <span className="text-sm">{section}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Key Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-blue-600" />
                    Key Requirements & Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {mockAnalysis.keyRequirements.map((req, i) => (
                      <div key={i} className="flex items-start gap-2 rounded-lg border border-blue-200 bg-blue-50 p-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                        <span className="text-sm">{req}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4">
                <Button className="flex-1">
                  Create Proposal from Analysis
                </Button>
                <Button variant="outline" onClick={() => setShowResults(false)}>
                  Analyze Another RFP
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
