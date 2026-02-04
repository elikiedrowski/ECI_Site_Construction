'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Circle, Upload, FileText, Sparkles, Eye, Download } from 'lucide-react';

type Step = 1 | 2 | 3 | 4 | 5 | 6;

const steps = [
  { num: 1, title: 'Project Info', description: 'Basic details and RFP upload' },
  { num: 2, title: 'Requirements', description: 'Review and edit requirements' },
  { num: 3, title: 'Content Selection', description: 'Choose sections and templates' },
  { num: 4, title: 'AI Generation', description: 'Generate proposal content' },
  { num: 5, title: 'Review & Edit', description: 'Preview and refine proposal' },
  { num: 6, title: 'Export', description: 'Format and download' },
];

export default function ProposalWizardPage() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [projectName, setProjectName] = useState('Central Community Aquatic Center Renovation');
  const [client, setClient] = useState('City of Boulder');
  const [budget, setBudget] = useState('$2,500,000 - $3,200,000');
  const [deadline, setDeadline] = useState('2026-03-15');
  const [generating, setGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [selectedSections, setSelectedSections] = useState([
    { id: 'executive', name: 'Executive Summary', required: true, selected: true, template: 'Standard' },
    { id: 'safety', name: 'Safety Plan', required: true, selected: true, template: 'AI Generate' },
    { id: 'approach', name: 'Project Approach', required: true, selected: true, template: 'AI Generate' },
    { id: 'timeline', name: 'Timeline & Schedule', required: true, selected: true, template: 'AI Generate' },
    { id: 'experience', name: 'Experience & Qualifications', required: true, selected: true, template: 'Standard' },
    { id: 'team', name: 'Team Structure', required: true, selected: true, template: 'Standard' },
    { id: 'references', name: 'References', required: true, selected: true, template: 'Standard' },
    { id: 'cost', name: 'Cost Breakdown', required: true, selected: true, template: 'Manual' },
    { id: 'quality', name: 'Quality Assurance', required: false, selected: true, template: 'AI Generate' },
    { id: 'environment', name: 'Environmental Plan', required: false, selected: false, template: 'AI Generate' },
  ]);

  const toggleSection = (sectionId: string) => {
    setSelectedSections(prev => prev.map(section => 
      section.id === sectionId ? { ...section, selected: !section.selected } : section
    ));
  };

  const handleNext = () => {
    if (currentStep === 4 && !generating) {
      // Simulate AI generation
      setGenerating(true);
      setGenerationProgress(0);
      const interval = setInterval(() => {
        setGenerationProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setGenerating(false);
            setCurrentStep(5);
            return 100;
          }
          return prev + 10;
        });
      }, 300);
    } else if (currentStep < 6) {
      setCurrentStep((currentStep + 1) as Step);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as Step);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="p-8 max-w-6xl mx-auto space-y-6">
          <div>
        <h1 className="text-3xl font-bold text-gray-900">New Proposal Wizard</h1>
        <p className="text-gray-500 mt-1">Step-by-step guided proposal creation</p>
      </div>

      {/* Progress Steps */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            {steps.map((step, idx) => (
              <div key={step.num} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    currentStep > step.num ? 'bg-green-500 border-green-500' :
                    currentStep === step.num ? 'bg-blue-500 border-blue-500' :
                    'bg-white border-gray-300'
                  }`}>
                    {currentStep > step.num ? (
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    ) : (
                      <span className={`text-sm font-medium ${
                        currentStep === step.num ? 'text-white' : 'text-gray-500'
                      }`}>
                        {step.num}
                      </span>
                    )}
                  </div>
                  <div className="text-center mt-2">
                    <div className={`text-xs font-medium ${
                      currentStep === step.num ? 'text-blue-600' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5 hidden md:block">
                      {step.description}
                    </div>
                  </div>
                </div>
                {idx < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-2 ${
                    currentStep > step.num ? 'bg-green-500' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Step Content */}
      <Card>
        <CardHeader>
          <CardTitle>Step {currentStep}: {steps[currentStep - 1].title}</CardTitle>
          <CardDescription>{steps[currentStep - 1].description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step 1: Project Info */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Name *
                </label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Client *
                </label>
                <input
                  type="text"
                  value={client}
                  onChange={(e) => setClient(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Budget Range *
                  </label>
                  <input
                    type="text"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Submission Deadline *
                  </label>
                  <input
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload RFP Document
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm text-gray-600">
                    Drag and drop RFP file here, or click to browse
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    PDF, Word, or text files (Max 10MB)
                  </p>
                  <Button variant="outline" className="mt-3">
                    Choose File
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Requirements */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex gap-3">
                  <FileText className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-blue-900">Auto-Extracted Requirements</h3>
                    <p className="text-blue-700 text-sm mt-1">
                      These requirements were automatically extracted from the RFP. Review and edit as needed.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  'LEED Gold certification required',
                  'Prevailing wage compliance mandatory',
                  'Minimum 5 years experience in aquatic facilities',
                  'Local subcontractor participation: 25% minimum',
                  'Performance bond: $5M+ coverage',
                  'Project completion: 18 months from NTP',
                  'Weekly progress meetings with city staff',
                ].map((req, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 border border-gray-200 rounded">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <input
                      type="text"
                      defaultValue={req}
                      className="flex-1 px-2 py-1 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    />
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full">
                + Add Custom Requirement
              </Button>
            </div>
          )}

          {/* Step 3: Content Selection */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Select the sections to include in your proposal and choose how to generate them.
              </p>
              <div className="space-y-2">
                {selectedSections.map((section) => (
                  <div
                    key={section.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={section.selected}
                        onChange={() => toggleSection(section.id)}
                        className="h-4 w-4 text-blue-600"
                      />
                      <div>
                        <div className="font-medium flex items-center gap-2">
                          {section.name}
                          {section.required && (
                            <span className="text-xs text-red-600">Required</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <select className="px-3 py-1 border border-gray-300 rounded text-sm">
                      <option>{section.template}</option>
                      <option>AI Generate</option>
                      <option>Standard Template</option>
                      <option>Manual Entry</option>
                    </select>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: AI Generation */}
          {currentStep === 4 && (
            <div className="space-y-6">
              {!generating && generationProgress === 0 && (
                <>
                  <div className="text-center py-8">
                    <Sparkles className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Ready to Generate Proposal Content
                    </h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      Click "Generate Content" to create professional proposal sections using
                      ECI's AI and institutional knowledge base.
                    </p>
                    <div className="mt-4 text-sm text-gray-500">
                      {selectedSections.filter(s => s.selected && s.template === 'AI Generate').length} sections
                      will be generated
                    </div>
                  </div>
                </>
              )}

              {(generating || generationProgress > 0) && (
                <div className="space-y-4">
                  <div className="text-center">
                    <Sparkles className="h-12 w-12 text-blue-500 mx-auto mb-3 animate-pulse" />
                    <h3 className="font-semibold text-gray-900">Generating Content...</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {generationProgress}% complete
                    </p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${generationProgress}%` }}
                    />
                  </div>
                  <div className="space-y-2">
                    {[
                      { name: 'Safety Plan', progress: Math.min(100, generationProgress + 20) },
                      { name: 'Project Approach', progress: Math.min(100, generationProgress) },
                      { name: 'Timeline & Schedule', progress: Math.max(0, generationProgress - 20) },
                      { name: 'Quality Assurance', progress: Math.max(0, generationProgress - 40) },
                    ].map((section) => (
                      <div key={section.name} className="flex items-center gap-3 text-sm">
                        {section.progress === 100 ? (
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        ) : section.progress > 0 ? (
                          <Circle className="h-4 w-4 text-blue-500 animate-pulse" />
                        ) : (
                          <Circle className="h-4 w-4 text-gray-300" />
                        )}
                        <span className={section.progress > 0 ? 'text-gray-900' : 'text-gray-400'}>
                          {section.name}
                        </span>
                        {section.progress === 100 && (
                          <span className="text-xs text-green-600">✓ Complete</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 5: Review & Edit */}
          {currentStep === 5 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">Proposal Preview</h3>
                <Button variant="outline" size="sm">
                  <Eye className="mr-2 h-4 w-4" />
                  Full Preview
                </Button>
              </div>
              <div className="border border-gray-300 rounded-lg p-6 bg-gray-50 max-h-96 overflow-y-auto">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{projectName}</h2>
                    <p className="text-gray-600">Proposal submitted to {client}</p>
                  </div>
                  {selectedSections.filter(s => s.selected).map((section) => (
                    <div key={section.id} className="bg-white p-4 rounded border border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-2">{section.name}</h3>
                      <p className="text-sm text-gray-600">
                        {section.template === 'AI Generate'
                          ? 'AI-generated content appears here...'
                          : 'Template or manual content...'}
                      </p>
                      <Button variant="ghost" size="sm" className="mt-2">
                        Edit Section
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 6: Export */}
          {currentStep === 6 && (
            <div className="space-y-6">
              <div className="text-center py-6">
                <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Proposal Complete!
                </h3>
                <p className="text-gray-600">
                  Your proposal is ready for export and submission
                </p>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Template Design
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>ECI Professional (Default)</option>
                    <option>ECI Minimal</option>
                    <option>City of Boulder Format</option>
                    <option>Custom Branding</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Export as PDF
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Export as Word
                  </Button>
                </div>
                <Button variant="outline" className="w-full">
                  Save as Draft
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === 1}
        >
          Previous
        </Button>
        <div className="flex gap-2">
          <Button variant="ghost">
            Save Draft
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentStep === 6 || (currentStep === 4 && generating)}
          >
            {currentStep === 4 && !generating && generationProgress === 0 ? 'Generate Content' :
             currentStep === 6 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>
        </div>
      </main>
    </div>
  );
}
