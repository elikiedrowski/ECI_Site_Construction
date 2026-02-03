'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Sparkles, Copy, Check } from 'lucide-react';

type SectionType = 'safety' | 'approach' | 'experience' | 'timeline' | 'quality' | 'environment' | 'team';

interface GeneratedContent {
  section: SectionType;
  title: string;
  content: string;
}

const sectionOptions: { value: SectionType; label: string; description: string }[] = [
  { value: 'safety', label: 'Safety Plan', description: 'Comprehensive safety protocols and OSHA compliance' },
  { value: 'approach', label: 'Project Approach', description: 'Methodology, phases, and execution strategy' },
  { value: 'experience', label: 'Experience & Qualifications', description: 'Past projects and team expertise' },
  { value: 'timeline', label: 'Project Timeline', description: 'Schedule, milestones, and deliverables' },
  { value: 'quality', label: 'Quality Assurance', description: 'QA processes and standards compliance' },
  { value: 'environment', label: 'Environmental Plan', description: 'Sustainability and environmental impact' },
  { value: 'team', label: 'Team Structure', description: 'Key personnel and organizational chart' },
];

const mockGeneratedContent: Record<SectionType, string> = {
  safety: `**Safety First Commitment**

ECI's safety program is built on a foundation of zero-tolerance for unsafe practices and continuous training. Our comprehensive safety plan includes:

**Pre-Construction Safety Measures:**
- Detailed site hazard analysis and risk mitigation planning
- OSHA-certified safety personnel on-site throughout construction
- Daily safety briefings and toolbox talks
- Personal Protective Equipment (PPE) requirements and enforcement

**Active Construction Safety Protocols:**
- Real-time safety monitoring systems with IoT sensors
- Fall protection systems exceeding OSHA requirements
- Confined space entry procedures and atmospheric monitoring
- Emergency response team with certified first aid personnel

**Safety Performance Metrics:**
- Target: Zero lost-time incidents
- Monthly safety audits and third-party inspections
- Incident reporting and investigation procedures
- Continuous improvement through lessons learned

ECI maintains an Experience Modification Rate (EMR) of 0.78, well below the industry average of 1.0, demonstrating our commitment to workplace safety.`,

  approach: `**Integrated Project Delivery Approach**

Our methodology emphasizes collaboration, phased execution, and adaptive planning to ensure project success:

**Phase 1: Pre-Construction (Weeks 1-4)**
- Stakeholder alignment meetings and goal-setting
- Detailed site surveys and existing conditions analysis
- Value engineering workshops to optimize budget
- Permit acquisition and regulatory compliance review

**Phase 2: Site Preparation (Weeks 5-8)**
- Mobilization and temporary facilities setup
- Utility coordination and relocation
- Erosion control and environmental protection measures
- Foundation and underground infrastructure

**Phase 3: Core Construction (Weeks 9-32)**
- Structural systems installation
- MEP (Mechanical, Electrical, Plumbing) coordination
- Weekly progress reviews with stakeholders
- Quality control checkpoints at major milestones

**Phase 4: Finishing & Commissioning (Weeks 33-40)**
- Architectural finishes and landscaping
- System testing and commissioning
- Punch list completion
- Owner training and documentation handover

This phased approach allows for flexibility while maintaining schedule integrity and budget control.`,

  experience: `**Proven Track Record in Municipal Recreation**

ECI brings 25+ years of experience delivering award-winning recreation facilities across Colorado and the Western United States.

**Recent Comparable Projects:**

**Westminster Community Rec Center (2023) - $8.2M**
- 45,000 SF aquatic and fitness facility
- LEED Gold certified
- Completed 3 weeks ahead of schedule
- 12% under budget through value engineering

**Boulder Valley Indoor Sports Complex (2022) - $12.5M**
- 65,000 SF multi-sport facility
- Innovative air-supported dome technology
- Zero safety incidents over 14-month construction

**Longmont Aquatic Center Renovation (2021) - $3.8M**
- Phased construction with facility remaining operational
- Award: Colorado Construction Excellence, Best Renovation

**Key Team Members:**
- **Ted Johnson, CEO** - 30+ years construction leadership
- **Sarah Mitchell, Project Executive** - 15+ municipal projects
- **James Rivera, Senior Superintendent** - LEED AP, Safety certified
- **Dr. Lisa Chang, MEP Coordinator** - P.E., 20 years facility systems

Our team's deep bench of expertise ensures seamless project execution.`,

  timeline: `**36-Month Project Schedule Overview**

**Month 1-2: Planning & Mobilization**
- Finalize design documents and permit submissions
- Bid long-lead equipment (pool systems, HVAC)
- Mobilize site trailers and establish logistics

**Month 3-6: Site Work & Foundations**
- Mass excavation and underground utilities
- Foundation concrete pours
- Structural steel fabrication (off-site)

**Month 7-18: Core Construction**
- Structural steel erection
- Building enclosure (roof, walls, windows)
- MEP rough-in installation
- Pool shell construction and waterproofing

**Month 19-30: Systems & Finishes**
- Pool equipment installation and testing
- Interior finishes (drywall, flooring, ceilings)
- HVAC system commissioning
- Exterior site work and landscaping

**Month 31-36: Closeout & Commissioning**
- Final inspections and certificate of occupancy
- Staff training on building systems
- Warranty documentation and O&M manuals
- Punch list completion and final walkthrough

**Critical Milestones:**
- Month 6: Foundation complete
- Month 12: Building weather-tight
- Month 24: Pool operational
- Month 36: Grand opening

We build in 10% float time to accommodate weather delays and unforeseen conditions.`,

  quality: `**Quality Assurance & Control Program**

ECI's quality program ensures every aspect of construction meets or exceeds specifications:

**Quality Planning:**
- Project-specific Quality Control Plan developed during pre-construction
- Inspection and Test Plan (ITP) for all major systems
- Material submittal tracking and approval workflows
- Mock-up requirements for critical assemblies

**In-Process Quality Control:**
- Daily superintendent inspections with photo documentation
- Third-party testing for concrete, soils, and waterproofing
- Weekly QA/QC meetings with design team
- Non-conformance reporting and corrective action tracking

**Quality Verification:**
- Milestone inspections at 25%, 50%, 75%, and substantial completion
- Building envelope testing (air barrier, water intrusion)
- Systems commissioning by certified professionals
- Final punch list review with owner representatives

**Documentation:**
- As-built drawings updated throughout construction
- Complete material certifications and test reports
- Warranty documentation organized by system
- Operations & Maintenance manuals with training videos

Our commitment to quality has resulted in a 98% first-time acceptance rate on final inspections across our portfolio.`,

  environment: `**Sustainability & Environmental Stewardship**

ECI is committed to minimizing environmental impact and achieving LEED Gold certification:

**Sustainable Site Practices:**
- Construction waste diversion target: 75% recycling/reuse
- Erosion and sediment control plan exceeding local requirements
- Low-impact development (LID) for stormwater management
- Native plant landscaping reducing irrigation by 40%

**Energy Efficiency:**
- High-performance building envelope (R-30 walls, R-50 roof)
- Triple-pane windows with low-E coatings
- LED lighting throughout with daylight harvesting sensors
- Variable-frequency drive (VFD) pool pumps reducing energy 35%

**Water Conservation:**
- Low-flow plumbing fixtures (1.28 gpf toilets, 0.5 gpm faucets)
- Rainwater harvesting for landscape irrigation
- Pool water treatment reducing chemical use by 50%

**Material Selection:**
- 20% recycled content in concrete and steel
- Low-VOC paints, adhesives, and sealants
- Locally sourced materials within 500-mile radius (60% by value)
- FSC-certified wood products

**Indoor Environmental Quality:**
- MERV 13 air filtration for superior air quality
- CO2 monitoring and demand-controlled ventilation
- Acoustic design meeting ANSI S12.60 standards

These measures not only reduce environmental footprint but deliver long-term operational cost savings to the community.`,

  team: `**Project Team Organization**

ECI's dedicated project team brings deep expertise and local knowledge:

**Executive Leadership:**
- **Ted Johnson, CEO & Principal** - Ultimate project accountability, strategic oversight
- **Sarah Mitchell, VP Operations** - Resource allocation, quality assurance

**On-Site Leadership:**
- **James Rivera, Project Superintendent** - Day-to-day site management, safety enforcement
- **Maria Gonzalez, Assistant Superintendent** - Subcontractor coordination, logistics
- **Tom Bradley, Site Safety Officer** - OSHA compliance, incident prevention

**Design Coordination:**
- **Dr. Lisa Chang, MEP Coordinator (P.E.)** - Systems integration, commissioning
- **Robert Kim, Structural Lead** - Foundation, steel, and concrete oversight
- **Jennifer Adams, Architect Liaison** - Design intent compliance, finish coordination

**Project Controls:**
- **Michael Torres, Project Manager** - Schedule, budget, and contract administration
- **Amanda Lee, Project Engineer** - Submittals, RFIs, change management
- **David Park, Estimator** - Cost tracking, buyout, value engineering

**Specialty Consultants:**
- **Aquatic Design Group** - Pool systems design and commissioning
- **Green Building Strategies** - LEED certification consulting
- **Acme Geotech** - Soils engineering and foundation design

**Communication Structure:**
- Weekly owner/architect/contractor (OAC) meetings
- Daily toolbox talks with trade partners
- Monthly public updates to city council
- Real-time project dashboard accessible 24/7

This team structure ensures clear accountability, efficient decision-making, and seamless project delivery.`,
};

export default function ContentGeneratorPage() {
  const [selectedSection, setSelectedSection] = useState<SectionType>('safety');
  const [projectType, setProjectType] = useState('Aquatic Center');
  const [budget, setBudget] = useState('$2.5M - $3.2M');
  const [requirements, setRequirements] = useState('LEED Gold certification, prevailing wage compliance, 25-page limit');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setCopied(false);
    
    // Simulate AI generation delay
    setTimeout(() => {
      setGeneratedContent({
        section: selectedSection,
        title: sectionOptions.find(opt => opt.value === selectedSection)!.label,
        content: mockGeneratedContent[selectedSection],
      });
      setIsGenerating(false);
    }, 2000);
  };

  const handleCopy = () => {
    if (generatedContent) {
      navigator.clipboard.writeText(generatedContent.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">AI Content Generator</h1>
          <p className="text-gray-500 mt-1">Generate professional proposal sections instantly</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg">
          <Sparkles className="h-5 w-5 text-blue-600" />
          <span className="text-sm font-medium text-blue-900">Powered by ECI AI</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Configuration Panel */}
        <div className="lg:col-span-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Section to Generate</CardTitle>
              <CardDescription>Choose the proposal section you need</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {sectionOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedSection(option.value)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    selectedSection === option.value
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-medium text-sm">{option.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{option.description}</div>
                </button>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Project Context</CardTitle>
              <CardDescription>Provide details for personalization</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Type
                </label>
                <input
                  type="text"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="e.g., Aquatic Center"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Budget Range
                </label>
                <input
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="e.g., $2M - $5M"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Special Requirements
                </label>
                <textarea
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="List any specific requirements..."
                />
              </div>
              <Button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full"
              >
                {isGenerating ? (
                  <>
                    <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Content
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Generated Content Panel */}
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">
                    {generatedContent ? generatedContent.title : 'Generated Content'}
                  </CardTitle>
                  <CardDescription>
                    {generatedContent
                      ? 'AI-generated content ready for review and editing'
                      : 'Configure settings and click "Generate Content" to start'}
                  </CardDescription>
                </div>
                {generatedContent && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopy}
                  >
                    {copied ? (
                      <>
                        <Check className="mr-2 h-4 w-4 text-green-600" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-4 w-4" />
                        Copy
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {!generatedContent && !isGenerating && (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <FileText className="h-16 w-16 text-gray-300 mb-4" />
                  <p className="text-gray-500 max-w-md">
                    Select a section type and provide project context to generate
                    professional proposal content tailored to your needs.
                  </p>
                </div>
              )}

              {isGenerating && (
                <div className="flex flex-col items-center justify-center py-16">
                  <Sparkles className="h-16 w-16 text-blue-500 mb-4 animate-pulse" />
                  <p className="text-gray-600 font-medium">Generating content...</p>
                  <p className="text-gray-400 text-sm mt-2">
                    Analyzing requirements and crafting professional content
                  </p>
                </div>
              )}

              {generatedContent && !isGenerating && (
                <div className="prose max-w-none">
                  <div
                    className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                    style={{ whiteSpace: 'pre-wrap' }}
                  >
                    {generatedContent.content}
                  </div>
                  
                  <div className="mt-6 flex gap-3">
                    <Button variant="default">
                      Insert into Proposal
                    </Button>
                    <Button variant="outline">
                      Edit Content
                    </Button>
                    <Button variant="outline" onClick={() => setGeneratedContent(null)}>
                      Generate New
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* POC Notice */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <Sparkles className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900">AI Content Generation (Demo)</h3>
              <p className="text-blue-700 text-sm mt-1">
                This POC demonstrates AI-powered content generation using ECI's institutional knowledge
                and best practices. Full implementation will include real-time AI using GPT-4 with custom
                training on your historical proposals, winning strategies, and technical specifications.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
