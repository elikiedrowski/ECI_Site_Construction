'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, TrendingUp, Download, AlertCircle } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock analytics data
const feesByProjectSize = [
  { range: '$0-1M', avgFee: 12.5, count: 8 },
  { range: '$1-5M', avgFee: 11.2, count: 12 },
  { range: '$5-10M', avgFee: 10.8, count: 6 },
  { range: '$10M+', avgFee: 9.5, count: 3 },
];

const timelineTrends = [
  { year: '2020', avgMonths: 14, projects: 4 },
  { year: '2021', avgMonths: 16, projects: 6 },
  { year: '2022', avgMonths: 13, projects: 8 },
  { year: '2023', avgMonths: 15, projects: 7 },
  { year: '2024', avgMonths: 12, projects: 9 },
  { year: '2025', avgMonths: 14, projects: 11 },
];

const winRateByType = [
  { type: 'Aquatic', winRate: 75, projects: 8 },
  { type: 'Recreation', winRate: 67, projects: 9 },
  { type: 'Sports Complex', winRate: 60, projects: 5 },
  { type: 'Playground', winRate: 50, projects: 2 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

const tableData = [
  { project: 'Boulder Aquatic Center', year: 2026, budget: 3200000, fee: 11.5, feeDollar: 368000, duration: 18, status: 'Pending' },
  { project: 'Westminster Rec Center', year: 2023, budget: 8200000, fee: 10.2, feeDollar: 836400, duration: 14, status: 'Won' },
  { project: 'Longmont Sports Complex', year: 2022, budget: 12500000, fee: 9.8, feeDollar: 1225000, duration: 24, status: 'Won' },
  { project: 'Aurora Community Center', year: 2024, budget: 5600000, fee: 11.0, feeDollar: 616000, duration: 16, status: 'Won' },
  { project: 'Denver Playground Revamp', year: 2021, budget: 850000, fee: 12.5, feeDollar: 106250, duration: 8, status: 'Lost' },
  { project: 'Thornton Aquatic Facility', year: 2023, budget: 4300000, fee: 11.8, feeDollar: 507400, duration: 15, status: 'Won' },
  { project: 'Broomfield Rec Expansion', year: 2022, budget: 6700000, fee: 10.5, feeDollar: 703500, duration: 18, status: 'Won' },
  { project: 'Lakewood Sports Center', year: 2024, budget: 9200000, fee: 9.9, feeDollar: 910800, duration: 20, status: 'Pending' },
];

export default function AnalyticsPage() {
  const [selectedType, setSelectedType] = useState('All');
  const [yearRange, setYearRange] = useState('All');
  const [sortField, setSortField] = useState<'budget' | 'fee' | 'duration'>('budget');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const handleSort = (field: 'budget' | 'fee' | 'duration') => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const sortedData = [...tableData].sort((a, b) => {
    const aVal = a[sortField];
    const bVal = b[sortField];
    return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
  });

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="p-8 space-y-6">
          <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Proposal Analytics</h1>
          <p className="text-gray-500 mt-1">Historical trends and performance metrics</p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4 items-center">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option>All</option>
                <option>Aquatic</option>
                <option>Recreation</option>
                <option>Sports Complex</option>
                <option>Playground</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Year Range
              </label>
              <select
                value={yearRange}
                onChange={(e) => setYearRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option>All</option>
                <option>2024-2026</option>
                <option>2021-2023</option>
                <option>2020-2021</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Budget Range
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option>All</option>
                <option>Under $1M</option>
                <option>$1M - $5M</option>
                <option>$5M - $10M</option>
                <option>Over $10M</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-gray-900">11.2%</div>
            <div className="text-sm text-gray-500 mt-1">Average Fee %</div>
            <div className="text-xs text-green-600 mt-1">↑ 0.5% vs. last year</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-gray-900">15 mo</div>
            <div className="text-sm text-gray-500 mt-1">Typical Duration</div>
            <div className="text-xs text-green-600 mt-1">↓ 2 mo improvement</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-gray-900">Aquatic</div>
            <div className="text-sm text-gray-500 mt-1">Highest Win Rate</div>
            <div className="text-xs text-blue-600 mt-1">75% success rate</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-gray-900">$5.2M</div>
            <div className="text-sm text-gray-500 mt-1">Avg Project Size</div>
            <div className="text-xs text-gray-600 mt-1">24 projects analyzed</div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Fee by Project Size */}
        <Card>
          <CardHeader>
            <CardTitle>Average Fee % by Project Size</CardTitle>
            <CardDescription>Larger projects typically command lower fee percentages</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={feesByProjectSize}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="avgFee" fill="#3b82f6" name="Avg Fee %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Timeline Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Project Duration Trends</CardTitle>
            <CardDescription>Average timeline in months over the years</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={timelineTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="avgMonths" stroke="#10b981" name="Avg Duration (months)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Win Rate by Type */}
        <Card>
          <CardHeader>
            <CardTitle>Win Rate by Project Type</CardTitle>
            <CardDescription>Success rates across different facility types</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={winRateByType}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ type, winRate }) => `${type}: ${winRate}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="winRate"
                >
                  {winRateByType.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Estimate Guard Rails Preview */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <CardTitle className="text-blue-900">Estimate Validation (Phase 4)</CardTitle>
                <CardDescription className="text-blue-700">
                  AI-powered guard rails to prevent cost estimation errors
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border border-blue-200">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium text-gray-900">Fee Percentage Check</div>
                    <div className="text-sm text-gray-600 mt-1">
                      Validates fees against historical averages ± 2%
                    </div>
                  </div>
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <div className="bg-white p-3 rounded border border-blue-200">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium text-gray-900">Timeline Validation</div>
                    <div className="text-sm text-gray-600 mt-1">
                      Flags timelines outside typical ranges by project type
                    </div>
                  </div>
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <div className="text-xs text-blue-600 mt-2">
                Prevents $50K+ estimation errors annually
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data Table */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Proposal Metrics</CardTitle>
          <CardDescription>Click column headers to sort</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-medium">Project</th>
                  <th className="text-left p-3 font-medium">Year</th>
                  <th 
                    className="text-left p-3 font-medium cursor-pointer hover:bg-gray-50"
                    onClick={() => handleSort('budget')}
                  >
                    Budget {sortField === 'budget' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th 
                    className="text-left p-3 font-medium cursor-pointer hover:bg-gray-50"
                    onClick={() => handleSort('fee')}
                  >
                    Fee % {sortField === 'fee' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="text-left p-3 font-medium">Fee $</th>
                  <th 
                    className="text-left p-3 font-medium cursor-pointer hover:bg-gray-50"
                    onClick={() => handleSort('duration')}
                  >
                    Duration {sortField === 'duration' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="text-left p-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {sortedData.map((row, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="p-3">{row.project}</td>
                    <td className="p-3">{row.year}</td>
                    <td className="p-3">${(row.budget / 1000000).toFixed(1)}M</td>
                    <td className="p-3">{row.fee}%</td>
                    <td className="p-3">${(row.feeDollar / 1000).toFixed(0)}K</td>
                    <td className="p-3">{row.duration} mo</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        row.status === 'Won' ? 'bg-green-100 text-green-800' :
                        row.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
        </div>
      </main>
    </div>
  );
}
