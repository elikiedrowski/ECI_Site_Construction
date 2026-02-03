'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, Link, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function DataAggregationPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8">
        <div className="flex items-center gap-3 mb-2">
          <Database className="h-8 w-8" />
          <h1 className="text-3xl font-bold">Data Aggregation Hub</h1>
        </div>
        <p className="text-green-100 text-lg mb-4">
          Unified dashboard pulling data from Procore, QuickBooks, and financial systems
        </p>
        <div className="inline-block bg-white text-green-900 px-4 py-2 rounded-full text-sm font-semibold">
          Coming Soon in Phase 5 - Q3 2026
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Link className="h-5 w-5" />
              Data Source Connections
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { name: 'Procore', status: 'Connected', lastSync: '2 hours ago', records: 1240 },
              { name: 'QuickBooks', status: 'Connected', lastSync: '1 hour ago', records: 3450 },
              { name: 'Municipal Portals', status: 'Pending', lastSync: 'Not synced', records: 0 },
              { name: 'Email Systems', status: 'Connected', lastSync: '30 min ago', records: 8920 },
            ].map((source, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 border border-gray-200 rounded">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    source.status === 'Connected' ? 'bg-green-500' : 'bg-yellow-500'
                  }`} />
                  <div>
                    <div className="font-medium text-gray-900">{source.name}</div>
                    <div className="text-xs text-gray-500">Last sync: {source.lastSync}</div>
                  </div>
                </div>
                <div className="text-xs text-gray-600">{source.records} records</div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Unified Executive Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-900">$12.3M</div>
                <div className="text-sm text-blue-700 mt-1">Active Project Value</div>
                <div className="text-xs text-blue-600 mt-1">From Procore</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-900">$8.7M</div>
                <div className="text-sm text-green-700 mt-1">Revenue YTD</div>
                <div className="text-xs text-green-600 mt-1">From QuickBooks</div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-900">94%</div>
                <div className="text-sm text-purple-700 mt-1">On-Time %</div>
                <div className="text-xs text-purple-600 mt-1">Across systems</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <div>
                    <div className="font-medium text-gray-900">Westminster Rec Center</div>
                    <div className="text-sm text-gray-600">Procore: 87% complete | QB: $680K invoiced</div>
                  </div>
                </div>
                <div className="text-sm font-medium text-green-600">On Track</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <div className="flex items-center gap-3">
                  <RefreshCw className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-gray-900">Boulder Aquatic Center</div>
                    <div className="text-sm text-gray-600">Procore: 12% complete | QB: $145K invoiced</div>
                  </div>
                </div>
                <div className="text-sm font-medium text-blue-600">In Progress</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="font-medium text-gray-900">Longmont Sports Complex</div>
                    <div className="text-sm text-gray-600">Procore: 100% complete | QB: $1.2M final</div>
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-600">Completed</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-green-50 border-green-200">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <Database className="h-6 w-6 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-green-900 mb-2">Phase 5: Data Aggregation Features</h3>
              <ul className="space-y-1 text-sm text-green-800">
                <li>• Real-time sync with Procore project management platform</li>
                <li>• QuickBooks financial data integration</li>
                <li>• Municipal portal scrapers for RFPs and opportunities</li>
                <li>• Email parsing for client communications</li>
                <li>• Unified executive dashboard with cross-system KPIs</li>
                <li>• Automated data quality checks and reconciliation</li>
              </ul>
              <div className="mt-3 text-xs text-green-600">
                Part of Integration & Polish package | Investment: $15,000 total (includes system integration)
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
