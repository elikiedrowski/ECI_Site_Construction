'use client';

import React, { useState } from 'react';
import { Sidebar } from '@/components/sidebar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  BarChart3,
  TrendingDown,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Brain,
  Activity,
} from 'lucide-react';

interface CostMetric {
  title: string;
  value: string;
  change: number;
  positive: boolean;
  icon: React.ReactNode;
  subtitle: string;
}

interface CostTrend {
  category: string;
  budgeted: number;
  actual: number;
  variance: number;
  trend: 'up' | 'down' | 'stable';
}

interface BudgetAlert {
  id: string;
  project: string;
  category: string;
  severity: 'high' | 'medium' | 'low';
  variance: number;
  message: string;
}

interface Forecast {
  metric: string;
  current: string;
  predicted: string;
  confidence: number;
  risk: 'low' | 'medium' | 'high';
}

export default function ProjectIntelligence() {
  const [selectedTimeframe, setSelectedTimeframe] = useState<'week' | 'month' | 'quarter'>(
    'month'
  );

  const metrics: CostMetric[] = [
    {
      title: 'Cost Variance',
      value: '-2.3%',
      change: -1.2,
      positive: false,
      icon: <BarChart3 className="w-6 h-6 text-orange-600" />,
      subtitle: 'vs. baseline',
    },
    {
      title: 'Cost per SF',
      value: '$287',
      change: 3.5,
      positive: true,
      icon: <Activity className="w-6 h-6 text-blue-600" />,
      subtitle: 'Below market avg',
    },
    {
      title: 'Budget Alerts',
      value: '3',
      change: -2,
      positive: true,
      icon: <AlertCircle className="w-6 h-6 text-yellow-600" />,
      subtitle: 'Active warnings',
    },
    {
      title: 'Forecast Accuracy',
      value: '94.2%',
      change: 2.1,
      positive: true,
      icon: <Brain className="w-6 h-6 text-purple-600" />,
      subtitle: 'AI predictions',
    },
  ];

  const costTrends: CostTrend[] = [
    {
      category: 'Labor',
      budgeted: 1000000,
      actual: 1050000,
      variance: 5.0,
      trend: 'up',
    },
    {
      category: 'Materials',
      budgeted: 800000,
      actual: 765000,
      variance: -4.4,
      trend: 'down',
    },
    {
      category: 'Equipment',
      budgeted: 450000,
      actual: 458000,
      variance: 1.8,
      trend: 'stable',
    },
    {
      category: 'Subcontractors',
      budgeted: 650000,
      actual: 680000,
      variance: 4.6,
      trend: 'up',
    },
    {
      category: 'Permits & Fees',
      budgeted: 120000,
      actual: 115000,
      variance: -4.2,
      trend: 'down',
    },
  ];

  const budgetAlerts: BudgetAlert[] = [
    {
      id: 'alert-1',
      project: 'Riverside Recreation Center',
      category: 'Labor',
      severity: 'high',
      variance: 8.5,
      message: 'Labor costs exceeding budget by 8.5% due to overtime requirements',
    },
    {
      id: 'alert-2',
      project: 'Downtown Community Pool',
      category: 'Materials',
      severity: 'medium',
      variance: 5.2,
      message: 'Material price increases affecting concrete and steel',
    },
    {
      id: 'alert-3',
      project: 'Oakwood Sports Complex',
      category: 'Schedule',
      severity: 'low',
      variance: 2.1,
      message: 'Minor schedule adjustments may impact completion timeline',
    },
  ];

  const forecasts: Forecast[] = [
    {
      metric: 'Project Completion Date',
      current: 'Aug 15, 2026',
      predicted: 'Aug 22, 2026',
      confidence: 87,
      risk: 'low',
    },
    {
      metric: 'Final Project Cost',
      current: '$4.5M',
      predicted: '$4.62M',
      confidence: 92,
      risk: 'medium',
    },
    {
      metric: 'Labor Hours Required',
      current: '12,450 hrs',
      predicted: '13,100 hrs',
      confidence: 89,
      risk: 'medium',
    },
    {
      metric: 'Material Cost Index',
      current: '108.5',
      predicted: '112.3',
      confidence: 78,
      risk: 'high',
    },
  ];

  const getAlertColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-50 border-red-200';
      case 'medium':
        return 'bg-yellow-50 border-yellow-200';
      case 'low':
        return 'bg-green-50 border-green-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const getAlertIcon = (severity: string) => {
    switch (severity) {
      case 'high':
        return <XCircle className="w-5 h-5 text-red-600" />;
      case 'medium':
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      case 'low':
        return <CheckCircle2 className="w-5 h-5 text-green-600" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-600" />;
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high':
        return 'text-red-600 bg-red-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'low':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
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
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Project Intelligence</h1>
                <p className="text-gray-600">
                  AI-powered cost analysis and predictive insights for your projects
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => setSelectedTimeframe('week')}
                  variant={selectedTimeframe === 'week' ? 'default' : 'outline'}
                  className={
                    selectedTimeframe === 'week'
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : ''
                  }
                >
                  Week
                </Button>
                <Button
                  onClick={() => setSelectedTimeframe('month')}
                  variant={selectedTimeframe === 'month' ? 'default' : 'outline'}
                  className={
                    selectedTimeframe === 'month'
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : ''
                  }
                >
                  Month
                </Button>
                <Button
                  onClick={() => setSelectedTimeframe('quarter')}
                  variant={selectedTimeframe === 'quarter' ? 'default' : 'outline'}
                  className={
                    selectedTimeframe === 'quarter'
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : ''
                  }
                >
                  Quarter
                </Button>
              </div>
            </div>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gray-50 rounded-lg">{metric.icon}</div>
                  {metric.positive ? (
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  ) : (
                    <TrendingDown className="w-5 h-5 text-red-600" />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
                <p className="text-sm text-gray-600 mb-2">{metric.title}</p>
                <p
                  className={`text-xs ${metric.positive ? 'text-green-600' : 'text-red-600'}`}
                >
                  {metric.change > 0 ? '+' : ''}
                  {metric.change}% {metric.subtitle}
                </p>
              </Card>
            ))}
          </div>

          {/* Cost Trend Analysis */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Cost Trend Analysis</h2>
            <Card className="p-6">
              <div className="space-y-6">
                {costTrends.map((trend, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-gray-900 w-32">
                          {trend.category}
                        </span>
                        {trend.trend === 'up' && <TrendingUp className="w-4 h-4 text-red-600" />}
                        {trend.trend === 'down' && (
                          <TrendingDown className="w-4 h-4 text-green-600" />
                        )}
                        {trend.trend === 'stable' && (
                          <Activity className="w-4 h-4 text-blue-600" />
                        )}
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-gray-600">
                          ${trend.actual.toLocaleString()} / ${trend.budgeted.toLocaleString()}
                        </span>
                        <span
                          className={`ml-3 text-sm font-medium ${
                            trend.variance > 0 ? 'text-red-600' : 'text-green-600'
                          }`}
                        >
                          {trend.variance > 0 ? '+' : ''}
                          {trend.variance.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                    <div className="relative w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`absolute h-3 rounded-full ${
                          trend.variance > 0 ? 'bg-red-500' : 'bg-green-500'
                        }`}
                        style={{
                          width: `${Math.min((trend.actual / trend.budgeted) * 100, 100)}%`,
                        }}
                      />
                      <div className="absolute top-0 left-0 w-full h-3 rounded-full border-2 border-blue-600 opacity-30" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Budget Variance Alerts */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Budget Variance Alerts</h2>
            <div className="grid grid-cols-1 gap-4">
              {budgetAlerts.map((alert) => (
                <Card key={alert.id} className={`p-6 border-2 ${getAlertColor(alert.severity)}`}>
                  <div className="flex items-start gap-4">
                    <div className="mt-1">{getAlertIcon(alert.severity)}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{alert.project}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium uppercase ${
                            alert.severity === 'high'
                              ? 'bg-red-200 text-red-800'
                              : alert.severity === 'medium'
                              ? 'bg-yellow-200 text-yellow-800'
                              : 'bg-green-200 text-green-800'
                          }`}
                        >
                          {alert.severity}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">{alert.message}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-600">
                        <span className="font-medium">Category: {alert.category}</span>
                        <span className="font-medium text-red-600">
                          Variance: +{alert.variance}%
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* AI Predictive Modeling */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-6 h-6 text-purple-600" />
              <h2 className="text-xl font-bold text-gray-900">AI Predictive Modeling</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {forecasts.map((forecast, index) => (
                <Card key={index} className="p-6">
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-gray-600 mb-1">{forecast.metric}</h3>
                    <div className="flex items-baseline gap-3">
                      <span className="text-2xl font-bold text-gray-900">
                        {forecast.predicted}
                      </span>
                      <span className="text-sm text-gray-500">from {forecast.current}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {/* Confidence Bar */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-600">Confidence Level</span>
                        <span className="text-xs font-semibold text-gray-900">
                          {forecast.confidence}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${forecast.confidence}%` }}
                        />
                      </div>
                    </div>

                    {/* Risk Factor */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                      <span className="text-xs text-gray-600">Risk Factor</span>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium uppercase ${getRiskColor(
                          forecast.risk
                        )}`}
                      >
                        {forecast.risk}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* AI Insights Note */}
            <Card className="mt-6 p-6 bg-purple-50 border-purple-200">
              <div className="flex items-start gap-4">
                <Brain className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="text-sm font-semibold text-purple-900 mb-2">
                    AI-Generated Insights
                  </h3>
                  <p className="text-sm text-purple-800 mb-3">
                    Based on historical data analysis and current trends, the AI model predicts:
                  </p>
                  <ul className="space-y-2 text-sm text-purple-800">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5" />
                      <span>
                        Material costs are expected to stabilize in Q3 2026, reducing budget
                        variance risk
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-purple-600 mt-0.5" />
                      <span>
                        Labor productivity may decline by 3-5% during peak summer months requiring
                        schedule adjustments
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5" />
                      <span>
                        Current project trajectory suggests 87% probability of on-time completion
                        within 5% budget variance
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
