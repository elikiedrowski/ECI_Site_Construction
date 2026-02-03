'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, TrendingDown, TrendingUp, AlertCircle } from 'lucide-react';

export default function ProjectIntelligencePage() {
  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-lg p-8">
        <div className="flex items-center gap-3 mb-2">
          <BarChart3 className="h-8 w-8" />
          <h1 className="text-3xl font-bold">Project Intelligence</h1>
        </div>
        <p className="text-indigo-100 text-lg mb-4">
          AI-powered cost analysis, budget variance tracking, and predictive modeling
        </p>
        <div className="inline-block bg-white text-indigo-900 px-4 py-2 rounded-full text-sm font-semibold">
          Coming Soon in Phase 5 - Q4 2026
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-green-600" />
              <div className="text-2xl font-bold text-gray-900">-3.2%</div>
            </div>
            <div className="text-sm text-gray-500 mt-1">Avg Cost Variance</div>
            <div className="text-xs text-green-600 mt-1">Better than industry avg</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <div className="text-2xl font-bold text-gray-900">$142</div>
            </div>
            <div className="text-sm text-gray-500 mt-1">Cost per SF (Aquatic)</div>
            <div className="text-xs text-gray-600 mt-1">Based on 8 projects</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <div className="text-2xl font-bold text-gray-900">2</div>
            </div>
            <div className="text-sm text-gray-500 mt-1">Budget Alerts</div>
            <div className="text-xs text-orange-600 mt-1">Need review</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-purple-600" />
              <div className="text-2xl font-bold text-gray-900">95%</div>
            </div>
            <div className="text-sm text-gray-500 mt-1">Forecast Accuracy</div>
            <div className="text-xs text-purple-600 mt-1">AI-predicted vs. actual</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Cost Trend Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Labor Costs</span>
                  <span className="text-sm text-red-600">↑ 12% YoY</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '75%' }} />
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Trending above market due to prevailing wage requirements
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Materials</span>
                  <span className="text-sm text-green-600">↓ 5% YoY</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }} />
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Improved vendor relationships reducing costs
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Equipment</span>
                  <span className="text-sm text-yellow-600">↑ 3% YoY</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '65%' }} />
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Stable with slight increase for specialty aquatic systems
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              Budget Variance Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-start gap-2">
                <TrendingUp className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="font-medium text-red-900">Westminster: +8.5% over budget</div>
                  <div className="text-sm text-red-700 mt-1">
                    Labor costs trending $45K over estimate due to extended timeline
                  </div>
                  <div className="text-xs text-red-600 mt-2">
                    Recommendation: Review change orders, negotiate schedule compression
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="font-medium text-yellow-900">Boulder: Material delivery delays</div>
                  <div className="text-sm text-yellow-700 mt-1">
                    Pool equipment lead time extended 6 weeks - potential cost impact
                  </div>
                  <div className="text-xs text-yellow-600 mt-2">
                    Recommendation: Expedite shipping (+$8K) vs. schedule delay
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-start gap-2">
                <TrendingDown className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="font-medium text-green-900">Longmont: -4.2% under budget</div>
                  <div className="text-sm text-green-700 mt-1">
                    Efficiency gains in concrete work saving $18K
                  </div>
                  <div className="text-xs text-green-600 mt-2">
                    Best practice documented for future aquatic projects
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Predictive Cost Modeling (AI-Powered)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="text-sm font-medium text-gray-700 mb-3">Project: Boulder Aquatic</div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Current Budget:</span>
                  <span className="font-medium">$3.2M</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">AI Forecast (Final):</span>
                  <span className="font-medium text-yellow-600">$3.35M</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Confidence:</span>
                  <span className="font-medium">87%</span>
                </div>
                <div className="mt-3 text-xs text-gray-500">
                  Model predicts +$150K variance due to timeline extension and material cost increases
                </div>
              </div>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="text-sm font-medium text-gray-700 mb-3">Risk Factors Identified</div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Timeline: 18mo baseline, trending 20mo (+11%)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Labor: Prevailing wage +$25/hr above estimate</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Materials: Concrete prices stable</span>
                </li>
              </ul>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="text-sm font-medium text-gray-700 mb-3">Recommended Actions</div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">1.</span>
                  <span>Negotiate change order for timeline extension ($75K)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">2.</span>
                  <span>Lock in material pricing now to avoid Q2 increases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">3.</span>
                  <span>Review labor allocation - consider efficiency improvements</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-indigo-50 border-indigo-200">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <BarChart3 className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-indigo-900 mb-2">Phase 5: Project Intelligence Features</h3>
              <ul className="space-y-1 text-sm text-indigo-800">
                <li>• Real-time cost tracking and budget variance analysis</li>
                <li>• AI-powered predictive modeling for project costs</li>
                <li>• Historical trend analysis across project portfolio</li>
                <li>• Automated alerts for budget overruns and risks</li>
                <li>• What-if scenario modeling and sensitivity analysis</li>
                <li>• Best practice recommendations based on historical data</li>
              </ul>
              <div className="mt-3 text-xs text-indigo-600">
                Part of Integration & Polish package | Prevents $50K+ estimation errors annually
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
