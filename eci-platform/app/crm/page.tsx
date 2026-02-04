'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/sidebar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, Calendar, Bell, TrendingUp, Users, Phone, Mail, MapPin, Plus, Search, Filter, History, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

type RelationshipStatus = 'Hot' | 'Warm' | 'Cold' | 'Inactive';
type ProjectStage = 'Planning' | 'Design' | 'Pre-RFP' | 'RFP Active' | 'Won' | 'Lost';

export default function CRMPage() {
  const [statusFilter, setStatusFilter] = useState<RelationshipStatus | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedView, setSelectedView] = useState<'grid' | 'pipeline'>('grid');

  // Mock CRM data
  const clients = [
    {
      id: 1,
      city: 'City of Boulder',
      contact: 'Sarah Martinez',
      role: 'Director of Public Works',
      email: 'smartinez@bouldercolorado.gov',
      phone: '(303) 441-3266',
      lastContact: '2024-01-30',
      nextTouchpoint: '2024-02-10',
      relationship: 'Hot' as RelationshipStatus,
      projects: 4,
      pipelineValue: 8500000,
      activeProjects: ['Aquatic Center Renovation'],
      plannedProjects: ['Rec Center Expansion', 'Playground Modernization'],
      notes: 'Key decision-maker. Prefers quarterly check-ins. LEED certification important.',
      interactions: 12
    },
    {
      id: 2,
      city: 'Westminster',
      contact: 'Mike Johnson',
      role: 'City Engineer',
      email: 'mjohnson@cityofwestminster.us',
      phone: '(303) 658-2400',
      lastContact: '2024-01-23',
      nextTouchpoint: '2024-02-15',
      relationship: 'Hot' as RelationshipStatus,
      projects: 3,
      pipelineValue: 4200000,
      activeProjects: ['Sports Complex Phase 2'],
      plannedProjects: ['Ice Rink Renovation'],
      notes: 'Budget-conscious. Values timeline adherence. Upcoming bond measure in Nov.',
      interactions: 8
    },
    {
      id: 3,
      city: 'Thornton',
      contact: 'Lisa Chen',
      role: 'Recreation Director',
      email: 'lchen@cityofthornton.net',
      phone: '(720) 977-6400',
      lastContact: '2024-01-15',
      nextTouchpoint: '2024-03-01',
      relationship: 'Warm' as RelationshipStatus,
      projects: 2,
      pipelineValue: 3100000,
      activeProjects: [],
      plannedProjects: ['Community Pool Upgrade', 'Fitness Center'],
      notes: 'New in role. Building relationship. Interested in innovative rec facilities.',
      interactions: 4
    },
    {
      id: 4,
      city: 'Broomfield',
      contact: 'Tom Bradley',
      role: 'Facilities Manager',
      email: 'tbradley@broomfield.org',
      phone: '(303) 438-6350',
      lastContact: '2023-12-10',
      nextTouchpoint: '2024-02-20',
      relationship: 'Cold' as RelationshipStatus,
      projects: 1,
      pipelineValue: 1500000,
      activeProjects: [],
      plannedProjects: ['Park Pavilion Replacement'],
      notes: 'Limited budget currently. Good relationship, but no immediate needs.',
      interactions: 6
    },
    {
      id: 5,
      city: 'Longmont',
      contact: 'Jennifer Park',
      role: 'Public Works Director',
      email: 'jpark@longmontcolorado.gov',
      phone: '(303) 651-8416',
      lastContact: '2024-01-28',
      nextTouchpoint: '2024-02-08',
      relationship: 'Hot' as RelationshipStatus,
      projects: 3,
      pipelineValue: 6800000,
      activeProjects: ['Recreation Center HVAC'],
      plannedProjects: ['Aquatic Facility Study', 'Sports Field Complex'],
      notes: 'Strong advocate for ECI. Recently completed successful project. Looking to expand.',
      interactions: 15
    },
    {
      id: 6,
      city: 'Arvada',
      contact: 'Robert Kim',
      role: 'Parks & Recreation Manager',
      email: 'rkim@arvada.org',
      phone: '(720) 898-7100',
      lastContact: '2023-11-20',
      nextTouchpoint: '2024-03-15',
      relationship: 'Warm' as RelationshipStatus,
      projects: 2,
      pipelineValue: 2700000,
      activeProjects: [],
      plannedProjects: ['Multi-use Rec Facility'],
      notes: 'Multi-year planning cycle. Good rapport. Needs education on recreation trends.',
      interactions: 7
    }
  ];

  const upcomingTouchpoints = [
    { id: 1, type: 'Meeting', client: 'City of Boulder', contact: 'Sarah Martinez', title: 'Quarterly check-in', date: '2024-02-10', time: '10:00 AM', priority: 'High' },
    { id: 2, type: 'Call', client: 'Longmont', contact: 'Jennifer Park', title: 'Aquatic study follow-up', date: '2024-02-08', time: '2:00 PM', priority: 'High' },
    { id: 3, type: 'Email', client: 'Westminster', contact: 'Mike Johnson', title: 'Project status update', date: '2024-02-15', time: 'All day', priority: 'Medium' },
    { id: 4, type: 'Meeting', client: 'Broomfield', contact: 'Tom Bradley', title: 'Re-engagement meeting', date: '2024-02-20', time: '1:30 PM', priority: 'Medium' },
    { id: 5, type: 'Event', client: 'Multiple', contact: 'Industry Event', title: 'Colorado Municipal Conference', date: '2024-02-25', time: 'All day', priority: 'High' },
  ];

  const pipelineProjects = [
    { id: 1, name: 'Boulder Aquatic Center Renovation', client: 'City of Boulder', value: 3200000, stage: 'RFP Active' as ProjectStage, probability: 75, expectedClose: '2024-03-15', contact: 'Sarah Martinez' },
    { id: 2, name: 'Westminster Sports Complex Phase 2', client: 'Westminster', value: 2800000, stage: 'RFP Active' as ProjectStage, probability: 80, expectedClose: '2024-04-01', contact: 'Mike Johnson' },
    { id: 3, name: 'Longmont Recreation Center HVAC', client: 'Longmont', value: 1600000, stage: 'Design' as ProjectStage, probability: 90, expectedClose: '2024-05-15', contact: 'Jennifer Park' },
    { id: 4, name: 'Boulder Rec Center Expansion', client: 'City of Boulder', value: 5300000, stage: 'Planning' as ProjectStage, probability: 50, expectedClose: '2024-09-01', contact: 'Sarah Martinez' },
    { id: 5, name: 'Thornton Community Pool Upgrade', client: 'Thornton', value: 2200000, stage: 'Pre-RFP' as ProjectStage, probability: 60, expectedClose: '2024-06-30', contact: 'Lisa Chen' },
  ];

  const filteredClients = clients.filter(client => {
    const matchesStatus = statusFilter === 'All' || client.relationship === statusFilter;
    const matchesSearch = searchQuery === '' || 
      client.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.contact.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const stats = {
    totalClients: clients.length,
    hotRelationships: clients.filter(c => c.relationship === 'Hot').length,
    totalPipeline: clients.reduce((sum, c) => sum + c.pipelineValue, 0),
    avgInteractions: Math.round(clients.reduce((sum, c) => sum + c.interactions, 0) / clients.length)
  };

  const getRelationshipColor = (status: RelationshipStatus) => {
    switch (status) {
      case 'Hot': return 'bg-green-100 text-green-800 border-green-200';
      case 'Warm': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Cold': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Inactive': return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStageColor = (stage: ProjectStage) => {
    switch (stage) {
      case 'Planning': return 'bg-gray-100 text-gray-700';
      case 'Design': return 'bg-blue-100 text-blue-700';
      case 'Pre-RFP': return 'bg-purple-100 text-purple-700';
      case 'RFP Active': return 'bg-orange-100 text-orange-700';
      case 'Won': return 'bg-green-100 text-green-700';
      case 'Lost': return 'bg-red-100 text-red-700';
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="p-8 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">ECI CRM</h1>
              <p className="text-gray-600 mt-2">
                Track municipal relationships, touch-points, and project opportunities
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Add Contact
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Clients</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stats.totalClients}</p>
                  </div>
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Hot Relationships</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stats.hotRelationships}</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Pipeline Value</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      ${(stats.totalPipeline / 1000000).toFixed(1)}M
                    </p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Avg Interactions</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stats.avgInteractions}</p>
                  </div>
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* View Toggle & Search */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Button
                variant={selectedView === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedView('grid')}
              >
                Client Grid
              </Button>
              <Button
                variant={selectedView === 'pipeline' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedView('pipeline')}
              >
                Project Pipeline
              </Button>
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search clients..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="All">All Status</option>
                <option value="Hot">Hot</option>
                <option value="Warm">Warm</option>
                <option value="Cold">Cold</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>

          {/* Main Content Area */}
          {selectedView === 'grid' ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Client Cards */}
              <div className="lg:col-span-2 space-y-4">
                {filteredClients.map((client) => (
                  <Card key={client.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Building2 className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 text-lg">{client.city}</h3>
                            <p className="text-sm text-gray-600">{client.contact}</p>
                            <p className="text-xs text-gray-500">{client.role}</p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getRelationshipColor(client.relationship)}`}>
                          {client.relationship}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Mail className="h-4 w-4" />
                          <span className="truncate">{client.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Phone className="h-4 w-4" />
                          <span>{client.phone}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-600">Last: {new Date(client.lastContact).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-600">Next: {new Date(client.nextTouchpoint).toLocaleDateString()}</span>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-gray-200">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-lg font-semibold text-gray-900">{client.projects}</div>
                            <div className="text-xs text-gray-500">Projects</div>
                          </div>
                          <div>
                            <div className="text-lg font-semibold text-gray-900">
                              ${(client.pipelineValue / 1000000).toFixed(1)}M
                            </div>
                            <div className="text-xs text-gray-500">Pipeline</div>
                          </div>
                          <div>
                            <div className="text-lg font-semibold text-gray-900">{client.interactions}</div>
                            <div className="text-xs text-gray-500">Interactions</div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-gray-200">
                        <p className="text-sm text-gray-600 italic">&ldquo;{client.notes}&rdquo;</p>
                      </div>

                      <div className="mt-4 flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <History className="h-4 w-4 mr-2" />
                          View History
                        </Button>
                        <Button size="sm" className="flex-1">
                          <Bell className="h-4 w-4 mr-2" />
                          Schedule Touch-point
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Sidebar - Upcoming Touch-points */}
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="h-5 w-5" />
                      Upcoming Touch-Points
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {upcomingTouchpoints.map((touchpoint) => (
                      <div key={touchpoint.id} className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="font-medium text-gray-900 text-sm">{touchpoint.title}</div>
                            <div className="text-xs text-gray-600 mt-1">{touchpoint.client}</div>
                          </div>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            touchpoint.priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {touchpoint.priority}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(touchpoint.date).toLocaleDateString()} • {touchpoint.time}</span>
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                          {touchpoint.type} with {touchpoint.contact}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            /* Pipeline View */
            <Card>
              <CardHeader>
                <CardTitle>Project Pipeline</CardTitle>
                <CardDescription>Track opportunities from planning through award</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pipelineProjects.map((project) => (
                    <div key={project.id} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{project.name}</h3>
                          <p className="text-sm text-gray-600 mt-1">{project.client} • {project.contact}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStageColor(project.stage)}`}>
                          {project.stage}
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-4 mb-3">
                        <div>
                          <div className="text-xs text-gray-500">Project Value</div>
                          <div className="font-semibold text-gray-900">${(project.value / 1000000).toFixed(2)}M</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Win Probability</div>
                          <div className="font-semibold text-gray-900">{project.probability}%</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Expected Close</div>
                          <div className="font-semibold text-gray-900">{new Date(project.expectedClose).toLocaleDateString()}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Weighted Value</div>
                          <div className="font-semibold text-gray-900">${((project.value * project.probability / 100) / 1000000).toFixed(2)}M</div>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all"
                          style={{ width: `${project.probability}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">${(pipelineProjects.reduce((sum, p) => sum + p.value, 0) / 1000000).toFixed(1)}M</div>
                      <div className="text-sm text-gray-600">Total Pipeline</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">${(pipelineProjects.reduce((sum, p) => sum + (p.value * p.probability / 100), 0) / 1000000).toFixed(1)}M</div>
                      <div className="text-sm text-gray-600">Weighted Value</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{Math.round(pipelineProjects.reduce((sum, p) => sum + p.probability, 0) / pipelineProjects.length)}%</div>
                      <div className="text-sm text-gray-600">Avg Probability</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
