'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Calendar, TrendingUp, AlertTriangle } from 'lucide-react';

export default function ResourcesPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg p-8">
        <div className="flex items-center gap-3 mb-2">
          <Users className="h-8 w-8" />
          <h1 className="text-3xl font-bold">Resource Management</h1>
        </div>
        <p className="text-purple-100 text-lg mb-4">
          Optimize staff allocation, capacity planning, and project scheduling
        </p>
        <div className="inline-block bg-white text-purple-900 px-4 py-2 rounded-full text-sm font-semibold">
          Coming Soon in Phase 4 - Q3 2026
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-gray-900">23</div>
            <div className="text-sm text-gray-500 mt-1">Total Staff</div>
            <div className="text-xs text-gray-400 mt-1">Project managers, superintendents, engineers</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-gray-900">87%</div>
            <div className="text-sm text-gray-500 mt-1">Utilization Rate</div>
            <div className="text-xs text-green-600 mt-1">↑ 5% from last month</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-gray-900">9</div>
            <div className="text-sm text-gray-500 mt-1">Active Projects</div>
            <div className="text-xs text-gray-400 mt-1">2 starting next month</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-gray-900">4</div>
            <div className="text-sm text-gray-500 mt-1">At Capacity</div>
            <div className="text-xs text-orange-600 mt-1">Need allocation review</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Staff Allocation Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: 'Ted Johnson', role: 'CEO', utilization: 95, projects: 3, available: 5 },
                { name: 'Sarah Mitchell', role: 'Project Executive', utilization: 90, projects: 4, available: 10 },
                { name: 'James Rivera', role: 'Superintendent', utilization: 100, projects: 2, available: 0 },
                { name: 'Lisa Chang', role: 'MEP Coordinator', utilization: 75, projects: 3, available: 25 },
                { name: 'Michael Torres', role: 'Project Manager', utilization: 85, projects: 2, available: 15 },
              ].map((person, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-gray-900">{person.name}</div>
                      <div className="text-sm text-gray-500">{person.role} • {person.projects} projects</div>
                    </div>
                    <div className={`text-sm font-medium ${
                      person.utilization >= 95 ? 'text-red-600' :
                      person.utilization >= 85 ? 'text-yellow-600' :
                      'text-green-600'
                    }`}>
                      {person.utilization}%
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        person.utilization >= 95 ? 'bg-red-500' :
                        person.utilization >= 85 ? 'bg-yellow-500' :
                        'bg-green-500'
                      }`}
                      style={{ width: `${person.utilization}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              Capacity Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-red-900">James Rivera at 100% capacity</div>
                  <div className="text-sm text-red-700 mt-1">
                    No availability for new projects. Consider reallocation.
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start gap-2">
                <Calendar className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-yellow-900">Boulder project starting Feb 15</div>
                  <div className="text-sm text-yellow-700 mt-1">
                    Need to assign superintendent - 2 weeks out
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-blue-900">Utilization trending up</div>
                  <div className="text-sm text-blue-700 mt-1">
                    May need additional staff Q2 2026
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-purple-50 border-purple-200">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <Users className="h-6 w-6 text-purple-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-purple-900 mb-2">Phase 4: Resource Management Features</h3>
              <ul className="space-y-1 text-sm text-purple-800">
                <li>• Real-time staff utilization tracking</li>
                <li>• Project staffing forecasts and capacity planning</li>
                <li>• Skill-based resource matching</li>
                <li>• Vacation and availability calendar</li>
                <li>• Automated allocation alerts and recommendations</li>
              </ul>
              <div className="mt-3 text-xs text-purple-600">
                Part of Advanced Features package | Investment: $25,000 total (includes guard rails)
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
