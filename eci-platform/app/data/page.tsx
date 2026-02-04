'use client';

import React, { useState } from 'react';
import { Sidebar } from '@/components/sidebar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Database, Link, RefreshCw, CheckCircle2, AlertCircle, BarChart3, TrendingUp } from 'lucide-react';

interface SystemConnection {
  id: string;
  name: string;
  status: 'connected' | 'disconnected' | 'syncing';
  lastSync: string;
  recordCount: number;
  icon: React.ReactNode;
}

interface ProjectData {
  id: string;
  name: string;
  value: number;
  status: string;
  procoreStatus: string;
  quickbooksStatus: string;
  permitStatus: string;
  completion: number;
}

interface KPIMetric {
  label: string;
  value: string;
  change: number;
  positive: boolean;
}

export default function DataAggregationHub() {
  const [refreshing, setRefreshing] = useState(false);

  const stats = [
    {
      title: 'Active Integrations',
      value: '4',
      icon: <Link className="w-6 h-6 text-blue-600" />,
      change: '+1 this month',
      changePositive: true,
    },
    {
      title: 'Records Synced',
      value: '12,847',
      icon: <Database className="w-6 h-6 text-green-600" />,
      change: '+2,341 today',
      changePositive: true,
    },
    {
      title: 'Last Sync',
      value: '2 min ago',
      icon: <RefreshCw className="w-6 h-6 text-purple-600" />,
      change: 'Auto-sync enabled',
      changePositive: true,
    },
    {
      title: 'Data Quality',
      value: '98.5%',
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
      change: '+0.5% this week',
      changePositive: true,
    },
  ];

  const systemConnections: SystemConnection[] = [
    {
      id: 'procore',
      name: 'Procore',
      status: 'connected',
      lastSync: '2 minutes ago',
      recordCount: 4567,
      icon: <Database className="w-8 h-8 text-orange-600" />,
    },
    {
      id: 'quickbooks',
      name: 'QuickBooks',
      status: 'connected',
      lastSync: '5 minutes ago',
      recordCount: 8234,
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
    },
    {
      id: 'municipal',
      name: 'Municipal Portals',
      status: 'syncing',
      lastSync: 'Syncing now...',
      recordCount: 1892,
      icon: <Link className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 'email',
      name: 'Email Integration',
      status: 'connected',
      lastSync: '1 minute ago',
      recordCount: 3421,
      icon: <CheckCircle2 className="w-8 h-8 text-purple-600" />,
    },
  ];

  const kpiMetrics: KPIMetric[] = [
    {
      label: 'Total Revenue (YTD)',
      value: '$45.2M',
      change: 12.5,
      positive: true,
    },
    {
      label: 'Active Project Value',
      value: '$18.7M',
      change: 8.3,
      positive: true,
    },
    {
      label: 'On-Time Completion',
      value: '87%',
      change: 5.2,
      positive: true,
    },
    {
      label: 'Budget Variance',
      value: '-2.1%',
      change: -1.3,
      positive: false,
    },
  ];

  const projectData: ProjectData[] = [
    {
      id: 'proj-001',
      name: 'Riverside Recreation Center',
      value: 4500000,
      status: 'In Progress',
      procoreStatus: '68% Complete',
      quickbooksStatus: 'Budget: 72% Used',
      permitStatus: 'All Permits Approved',
      completion: 68,
    },
    {
      id: 'proj-002',
      name: 'Downtown Community Pool',
      value: 2800000,
      status: 'In Progress',
      procoreStatus: '45% Complete',
      quickbooksStatus: 'Budget: 48% Used',
      permitStatus: 'Pending Final Inspection',
      completion: 45,
    },
    {
      id: 'proj-003',
      name: 'Oakwood Sports Complex',
      value: 6200000,
      status: 'In Progress',
      procoreStatus: '82% Complete',
      quickbooksStatus: 'Budget: 85% Used',
      permitStatus: 'All Permits Approved',
      completion: 82,
    },
    {
      id: 'proj-004',
      name: 'Lakeside Fitness Center',
      value: 3100000,
      status: 'Planning',
      procoreStatus: '12% Complete',
      quickbooksStatus: 'Budget: 8% Used',
      permitStatus: 'Under Review',
      completion: 12,
    },
  ];

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'syncing':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'disconnected':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Data Aggregation Hub</h1>
                <p className="text-gray-600">
                  Real-time integration and synchronization across all your systems
                </p>
              </div>
              <Button
                onClick={handleRefresh}
                disabled={refreshing}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
                {refreshing ? 'Syncing...' : 'Refresh All'}
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gray-50 rounded-lg">{stat.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-600 mb-2">{stat.title}</p>
                <p className={`text-xs ${stat.changePositive ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </p>
              </Card>
            ))}
          </div>

          {/* System Connections */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">System Connections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {systemConnections.map((system) => (
                <Card key={system.id} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gray-50 rounded-lg">{system.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{system.name}</h3>
                        <p className="text-sm text-gray-600">{system.lastSync}</p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                        system.status
                      )}`}
                    >
                      {system.status === 'connected' && 'Connected'}
                      {system.status === 'syncing' && 'Syncing'}
                      {system.status === 'disconnected' && 'Disconnected'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Database className="w-4 h-4" />
                      <span>{system.recordCount.toLocaleString()} records</span>
                    </div>
                    {system.status === 'syncing' && (
                      <RefreshCw className="w-4 h-4 text-blue-600 animate-spin" />
                    )}
                    {system.status === 'connected' && (
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Unified Dashboard KPIs */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Cross-System KPIs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kpiMetrics.map((metric, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-gray-600">{metric.label}</p>
                    {metric.positive ? (
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-red-600" />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
                  <p
                    className={`text-xs ${
                      metric.positive ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {metric.change > 0 ? '+' : ''}
                    {metric.change}% vs last month
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Project Status Cards */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Multi-System Project Status
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {projectData.map((project) => (
                <Card key={project.id} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {project.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        ${(project.value / 1000000).toFixed(1)}M Project Value
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      {project.status}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        Overall Completion
                      </span>
                      <span className="text-sm font-semibold text-gray-900">
                        {project.completion}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.completion}%` }}
                      />
                    </div>
                  </div>

                  {/* System Status Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="flex items-start gap-3">
                      <Database className="w-5 h-5 text-orange-600 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Procore</p>
                        <p className="text-sm font-medium text-gray-900">
                          {project.procoreStatus}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <BarChart3 className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-600 mb-1">QuickBooks</p>
                        <p className="text-sm font-medium text-gray-900">
                          {project.quickbooksStatus}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      {project.permitStatus.includes('Approved') ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                      )}
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Permits</p>
                        <p className="text-sm font-medium text-gray-900">
                          {project.permitStatus}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
