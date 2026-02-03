'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Calendar, Bell, TrendingUp, Users, Phone } from 'lucide-react';

export default function CRMPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8">
        <div className="flex items-center gap-3 mb-2">
          <Building2 className="h-8 w-8" />
          <h1 className="text-3xl font-bold">Municipal CRM</h1>
        </div>
        <p className="text-blue-100 text-lg mb-4">
          Track relationships, touch-points, and opportunities across all municipal clients
        </p>
        <div className="inline-block bg-white text-blue-900 px-4 py-2 rounded-full text-sm font-semibold">
          Coming Soon in Phase 3 - Q2 2026
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Active Municipal Relationships</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { city: 'City of Boulder', contact: 'Sarah Martinez', role: 'Dir. of Public Works', lastContact: '3 days ago', projects: 4, status: 'Active' },
                { city: 'Westminster', contact: 'Mike Johnson', role: 'City Engineer', lastContact: '1 week ago', projects: 2, status: 'Active' },
                { city: 'Thornton', contact: 'Lisa Chen', role: 'Recreation Director', lastContact: '2 weeks ago', projects: 1, status: 'Warm' },
                { city: 'Broomfield', contact: 'Tom Bradley', role: 'Facilities Manager', lastContact: '1 month ago', projects: 0, status: 'Cold' },
              ].map((client, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{client.city}</div>
                      <div className="text-sm text-gray-600">{client.contact} • {client.role}</div>
                      <div className="text-xs text-gray-500 mt-1">Last contact: {client.lastContact}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">{client.projects} projects</div>
                    <span className={`inline-block px-2 py-1 rounded text-xs font-medium mt-1 ${
                      client.status === 'Active' ? 'bg-green-100 text-green-800' :
                      client.status === 'Warm' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {client.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Upcoming Touch-Points
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { type: 'Meeting', title: 'Boulder quarterly check-in', date: 'Feb 10' },
                { type: 'Call', title: 'Westminster project follow-up', date: 'Feb 15' },
                { type: 'Event', title: 'Municipal conference booth', date: 'Feb 20' },
              ].map((task, idx) => (
                <div key={idx} className="flex gap-3 p-2">
                  <Calendar className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">{task.title}</div>
                    <div className="text-xs text-gray-500">{task.type} • {task.date}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Pipeline Value
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900 mb-2">$18.5M</div>
              <div className="text-sm text-gray-600">Active opportunities</div>
              <div className="text-xs text-green-600 mt-1">↑ $3.2M from last quarter</div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <Building2 className="h-6 w-6 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Phase 3: ECI CRM Features</h3>
              <ul className="space-y-1 text-sm text-blue-800">
                <li>• Contact database with relationship history</li>
                <li>• Touch-point tracking and reminders</li>
                <li>• Pipeline management and forecasting</li>
                <li>• Email integration and activity logging</li>
                <li>• Meeting notes and follow-up tasks</li>
              </ul>
              <div className="mt-3 text-xs text-blue-600">
                Investment: $22,000 | Timeline: 4-5 weeks | ROI: 12 months
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
