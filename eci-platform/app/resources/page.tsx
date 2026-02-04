'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/sidebar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Calendar, TrendingUp, AlertTriangle, Plus, Filter, Clock, CheckCircle2, XCircle } from 'lucide-react';

type Role = 'CEO' | 'Project Executive' | 'Project Manager' | 'Superintendent' | 'MEP Coordinator' | 'Safety Manager' | 'Estimator';

export default function ResourcesPage() {
  const [viewMode, setViewMode] = useState<'people' | 'projects'>('people');
  const [filterRole, setFilterRole] = useState<Role | 'All'>('All');

  // Mock staff data
  const staff = [
    {
      id: 1,
      name: 'Ted Johnson',
      role: 'CEO' as Role,
      utilization: 95,
      hoursWeek: 38,
      maxHours: 40,
      projects: [
        { name: 'Boulder Aquatic Center', allocation: 15 },
        { name: 'Westminster Sports Complex', allocation: 10 },
        { name: 'Business Development', allocation: 13 }
      ],
      skills: ['Leadership', 'Estimating', 'Client Relations', 'Recreation Construction'],
      availability: { nextAvailable: '2024-03-15', vacationDays: 5 },
      capacity: 'Critical',
      email: 'tjohnson@eci.com',
      phone: '(303) 555-0100'
    },
    {
      id: 2,
      name: 'Sarah Mitchell',
      role: 'Project Executive' as Role,
      utilization: 90,
      hoursWeek: 36,
      maxHours: 40,
      projects: [
        { name: 'Boulder Aquatic Center', allocation: 12 },
        { name: 'Longmont Rec Center', allocation: 12 },
        { name: 'Thornton Pool Upgrade', allocation: 8 },
        { name: 'Proposal Development', allocation: 4 }
      ],
      skills: ['Project Management', 'Aquatic Facilities', 'LEED', 'Client Management'],
      availability: { nextAvailable: '2024-04-01', vacationDays: 10 },
      capacity: 'High',
      email: 'smitchell@eci.com',
      phone: '(303) 555-0101'
    },
    {
      id: 3,
      name: 'James Rivera',
      role: 'Superintendent' as Role,
      utilization: 100,
      hoursWeek: 50,
      maxHours: 50,
      projects: [
        { name: 'Westminster Sports Complex', allocation: 40 },
        { name: 'Safety Training', allocation: 10 }
      ],
      skills: ['Site Management', 'Safety', 'Scheduling', 'Subcontractor Management'],
      availability: { nextAvailable: '2024-06-01', vacationDays: 0 },
      capacity: 'Critical',
      email: 'jrivera@eci.com',
      phone: '(303) 555-0102'
    },
    {
      id: 4,
      name: 'Lisa Chang',
      role: 'MEP Coordinator' as Role,
      utilization: 75,
      hoursWeek: 30,
      maxHours: 40,
      projects: [
        { name: 'Boulder Aquatic Center', allocation: 15 },
        { name: 'Longmont Rec Center', allocation: 10 },
        { name: 'Engineering Review', allocation: 5 }
      ],
      skills: ['MEP Systems', 'HVAC', 'Plumbing', 'Aquatic Systems', 'Energy Modeling'],
      availability: { nextAvailable: '2024-02-20', vacationDays: 15 },
      capacity: 'Available',
      email: 'lchang@eci.com',
      phone: '(303) 555-0103'
    },
    {
      id: 5,
      name: 'Michael Torres',
      role: 'Project Manager' as Role,
      utilization: 85,
      hoursWeek: 34,
      maxHours: 40,
      projects: [
        { name: 'Longmont Rec Center', allocation: 20 },
        { name: 'Arvada Park Pavilion', allocation: 14 }
      ],
      skills: ['Project Management', 'Scheduling', 'Budget Management', 'Sports Facilities'],
      availability: { nextAvailable: '2024-03-01', vacationDays: 8 },
      capacity: 'High',
      email: 'mtorres@eci.com',
      phone: '(303) 555-0104'
    },
    {
      id: 6,
      name: 'Jennifer Park',
      role: 'Safety Manager' as Role,
      utilization: 70,
      hoursWeek: 28,
      maxHours: 40,
      projects: [
        { name: 'All Active Projects - Safety', allocation: 20 },
        { name: 'Safety Training Programs', allocation: 8 }
      ],
      skills: ['OSHA Compliance', 'Safety Training', 'Risk Assessment', 'Incident Investigation'],
      availability: { nextAvailable: '2024-02-15', vacationDays: 12 },
      capacity: 'Available',
      email: 'jpark@eci.com',
      phone: '(303) 555-0105'
    },
    {
      id: 7,
      name: 'David Chen',
      role: 'Estimator' as Role,
      utilization: 80,
      hoursWeek: 32,
      maxHours: 40,
      projects: [
        { name: 'Boulder Proposal', allocation: 16 },
        { name: 'Thornton Proposal', allocation: 12 },
        { name: 'Historical Data Analysis', allocation: 4 }
      ],
      skills: ['Cost Estimating', 'Quantity Takeoffs', 'Value Engineering', 'Recreation Construction'],
      availability: { nextAvailable: '2024-02-25', vacationDays: 10 },
      capacity: 'Moderate',
      email: 'dchen@eci.com',
      phone: '(303) 555-0106'
    }
  ];

  // Mock project staffing data
  const projects = [
    {
      id: 1,
      name: 'Boulder Aquatic Center',
      status: 'In Progress',
      startDate: '2024-01-15',
      endDate: '2025-07-30',
      budget: 3200000,
      staffNeeds: {
        current: 4,
        optimal: 5,
        roles: [
          { role: 'Project Executive', assigned: 'Sarah Mitchell', hours: 12 },
          { role: 'MEP Coordinator', assigned: 'Lisa Chang', hours: 15 },
          { role: 'CEO/Estimator', assigned: 'Ted Johnson', hours: 15 },
          { role: 'Safety Manager', assigned: 'Jennifer Park', hours: 8 },
          { role: 'Superintendent', assigned: 'NEEDED', hours: 0, alert: true }
        ]
      },
      health: 'Warning'
    },
    {
      id: 2,
      name: 'Westminster Sports Complex',
      status: 'In Progress',
      startDate: '2023-11-01',
      endDate: '2024-08-15',
      budget: 2800000,
      staffNeeds: {
        current: 3,
        optimal: 3,
        roles: [
          { role: 'Superintendent', assigned: 'James Rivera', hours: 40 },
          { role: 'Project Manager', assigned: 'Ted Johnson', hours: 10 },
          { role: 'Safety Manager', assigned: 'Jennifer Park', hours: 6 }
        ]
      },
      health: 'Good'
    },
    {
      id: 3,
      name: 'Longmont Rec Center',
      status: 'Starting Soon',
      startDate: '2024-02-15',
      endDate: '2024-11-30',
      budget: 1600000,
      staffNeeds: {
        current: 3,
        optimal: 4,
        roles: [
          { role: 'Project Executive', assigned: 'Sarah Mitchell', hours: 12 },
          { role: 'Project Manager', assigned: 'Michael Torres', hours: 20 },
          { role: 'MEP Coordinator', assigned: 'Lisa Chang', hours: 10 },
          { role: 'Superintendent', assigned: 'NEEDED', hours: 0, alert: true }
        ]
      },
      health: 'Warning'
    }
  ];

  const filteredStaff = staff.filter(person => 
    filterRole === 'All' || person.role === filterRole
  );

  const stats = {
    totalStaff: staff.length,
    avgUtilization: Math.round(staff.reduce((sum, p) => sum + p.utilization, 0) / staff.length),
    atCapacity: staff.filter(p => p.utilization >= 95).length,
    activeProjects: projects.length
  };

  const getCapacityColor = (capacity: string) => {
    switch (capacity) {
      case 'Critical': return 'text-red-600 bg-red-50';
      case 'High': return 'text-orange-600 bg-orange-50';
      case 'Moderate': return 'text-yellow-600 bg-yellow-50';
      case 'Available': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
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
              <h1 className="text-3xl font-bold text-gray-900">Resource Management</h1>
              <p className="text-gray-600 mt-2">
                Optimize staff allocation and capacity planning across all projects
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Add Resource
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Staff</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stats.totalStaff}</p>
                  </div>
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Avg Utilization</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stats.avgUtilization}%</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">At Capacity</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stats.atCapacity}</p>
                  </div>
                  <AlertTriangle className="h-8 w-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Projects</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stats.activeProjects}</p>
                  </div>
                  <Calendar className="h-8 w-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* View Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'people' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('people')}
              >
                By Person
              </Button>
              <Button
                variant={viewMode === 'projects' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('projects')}
              >
                By Project
              </Button>
            </div>
            {viewMode === 'people' && (
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value as any)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="All">All Roles</option>
                <option value="CEO">CEO</option>
                <option value="Project Executive">Project Executive</option>
                <option value="Project Manager">Project Manager</option>
                <option value="Superintendent">Superintendent</option>
                <option value="MEP Coordinator">MEP Coordinator</option>
                <option value="Safety Manager">Safety Manager</option>
                <option value="Estimator">Estimator</option>
              </select>
            )}
          </div>

          {/* Main Content */}
          {viewMode === 'people' ? (
            <div className="space-y-4">
              {filteredStaff.map((person) => (
                <Card key={person.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Users className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-lg">{person.name}</h3>
                          <p className="text-sm text-gray-600">{person.role}</p>
                          <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                            <span>{person.email}</span>
                            <span>•</span>
                            <span>{person.phone}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${getCapacityColor(person.capacity)}`}>
                          {person.capacity}
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mt-2">{person.utilization}%</div>
                        <div className="text-xs text-gray-500">{person.hoursWeek}/{person.maxHours} hrs/week</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Utilization</span>
                        <span className="text-sm text-gray-600">{person.projects.length} projects</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full transition-all ${
                            person.utilization >= 95 ? 'bg-red-500' :
                            person.utilization >= 85 ? 'bg-yellow-500' :
                            'bg-green-500'
                          }`}
                          style={{ width: `${Math.min(person.utilization, 100)}%` }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Current Projects</h4>
                        <div className="space-y-2">
                          {person.projects.map((project, idx) => (
                            <div key={idx} className="flex justify-between items-center text-sm">
                              <span className="text-gray-600">{project.name}</span>
                              <span className="font-medium text-gray-900">{project.allocation}h</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Skills & Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {person.skills.map((skill, idx) => (
                            <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                        <div className="mt-3 text-xs text-gray-600">
                          <div>Next available: {new Date(person.availability.nextAvailable).toLocaleDateString()}</div>
                          <div>Vacation days: {person.availability.vacationDays} remaining</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-3 border-t border-gray-200">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        View Schedule
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Adjust Allocation
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {projects.map((project) => (
                <Card key={project.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{project.name}</CardTitle>
                        <CardDescription className="mt-1">
                          {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()} • 
                          ${(project.budget / 1000000).toFixed(1)}M budget
                        </CardDescription>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.health === 'Good' ? 'bg-green-100 text-green-700' :
                        project.health === 'Warning' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {project.health}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Staffing Status</span>
                        <span className="text-sm text-gray-600">
                          {project.staffNeeds.current}/{project.staffNeeds.optimal} roles filled
                        </span>
                      </div>
                      <div className="space-y-3">
                        {project.staffNeeds.roles.map((role, idx) => (
                          <div key={idx} className={`p-3 border rounded-lg ${
                            role.alert ? 'border-red-200 bg-red-50' : 'border-gray-200'
                          }`}>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-3">
                                {role.alert ? (
                                  <XCircle className="h-5 w-5 text-red-600" />
                                ) : (
                                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                                )}
                                <div>
                                  <div className="font-medium text-gray-900">{role.role}</div>
                                  <div className="text-sm text-gray-600">{role.assigned}</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="font-semibold text-gray-900">{role.hours}h/week</div>
                                {role.alert && (
                                  <div className="text-xs text-red-600 mt-1">Needs assignment</div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {project.health === 'Warning' && (
                      <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <div className="flex items-start gap-2">
                          <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                          <div className="text-sm text-yellow-800">
                            <div className="font-medium">Staffing Alert</div>
                            <div className="mt-1">This project needs additional resources. Consider reallocating from projects with lower priority.</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
