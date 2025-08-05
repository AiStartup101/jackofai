import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, MapPin, Brain, Target, Activity } from "lucide-react";

export default function AnalyticsDashboard() {
  const { data: analyticsData, isLoading } = useQuery({
    queryKey: ['/api/scout/analytics'],
    refetchInterval: 5 * 60 * 1000, // Refresh every 5 minutes
  });

  const analytics = (analyticsData as any)?.analytics;

  if (isLoading || !analytics) {
    return (
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Loading Analytics...
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6 animate-pulse">
                <div className="h-4 bg-slate-200 dark:bg-slate-600 rounded mb-2"></div>
                <div className="h-8 bg-slate-200 dark:bg-slate-600 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            🇮🇳 AI Talent Intelligence Dashboard
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Real-time insights from LinkedIn, freelance platforms, and AI communities across Indian tech hubs
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total AI Talents</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.totalTalents}</div>
              <p className="text-xs text-muted-foreground">
                {analytics.indianTalents} from India
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Opportunities</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.totalOpportunities}</div>
              <p className="text-xs text-muted-foreground">
                Active positions & projects
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg AI Score</CardTitle>
              <Brain className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.averageAIScore}/100</div>
              <p className="text-xs text-muted-foreground">
                Quality index
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Weekly Growth</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+{analytics.recentActivity.talentsLastWeek}</div>
              <p className="text-xs text-muted-foreground">
                New talents this week
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Top Skills & Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Top AI Skills in Demand
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {analytics.topSkills.slice(0, 8).map((skill: string, index: number) => (
                  <Badge 
                    key={skill} 
                    variant={index < 3 ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Top Talent Locations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {analytics.topLocations.map((location: string, index: number) => (
                  <div key={location} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{location}</span>
                    <Badge variant="outline" className="text-xs">
                      #{index + 1}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data Sources Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Talent Discovery Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(analytics.sourcesBreakdown).map(([source, count]) => (
                <div key={source} className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {count as number}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 capitalize">
                    {source.replace(/_/g, ' ')}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Real-time Activity */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                🔍 Active Discovery Systems
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                LinkedIn API • Upwork/Toptal • AI Communities • GitHub Organizations
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                Live Scanning
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}