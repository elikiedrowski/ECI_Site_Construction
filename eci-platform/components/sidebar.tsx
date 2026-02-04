"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  FileText,
  Users,
  Building2,
  Database,
  BarChart3,
  ChevronRight,
  ChevronLeft,
  Menu
} from "lucide-react"

const navigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Proposals",
    href: "/proposals",
    icon: FileText,
    children: [
      { name: "Library", href: "/proposals" },
      { name: "RFP Analysis", href: "/proposals/rfp-analysis" },
      { name: "Content Generator", href: "/proposals/generator" },
      { name: "Analytics", href: "/proposals/analytics" },
      { name: "New Proposal", href: "/proposals/wizard" },
    ],
  },
  {
    name: "ECI CRM",
    href: "/crm",
    icon: Building2,
  },
  {
    name: "Resources",
    href: "/resources",
    icon: Users,
  },
  {
    name: "Data Aggregation",
    href: "/data",
    icon: Database,
  },
  {
    name: "Project Intelligence",
    href: "/intelligence",
    icon: BarChart3,
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [expandedItems, setExpandedItems] = useState<string[]>(["Proposals"])

  const toggleExpanded = (itemName: string) => {
    setExpandedItems(prev => 
      prev.includes(itemName) 
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    )
  }

  // Auto-expand parent menu if we're on a child page
  useEffect(() => {
    navigation.forEach((item) => {
      if (item.children) {
        const isOnChildPage = item.children.some(child => pathname === child.href)
        if (isOnChildPage && !expandedItems.includes(item.name)) {
          setExpandedItems(prev => [...prev, item.name])
        }
      }
    })
  }, [pathname])

  return (
    <div className={cn(
      "flex h-screen flex-col border-r bg-white transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Logo/Header */}
      <div className="flex h-16 items-center justify-between border-b bg-white px-4">
        <div className="flex flex-1 items-center min-w-0">
          <div
            className={cn(
              "text-sm font-semibold tracking-tight text-gray-900",
              isCollapsed && "sr-only"
            )}
          >
            ECI Platform
          </div>
          {isCollapsed && (
            <div className="text-sm font-semibold tracking-tight text-gray-900">ECI</div>
          )}
        </div>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex-shrink-0 rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
          const isExpanded = expandedItems.includes(item.name)
          const hasChildren = !!item.children
          
          return (
            <div key={item.name}>
              {hasChildren ? (
                <button
                  onClick={() => {
                    if (!isCollapsed) {
                      toggleExpanded(item.name)
                    }
                  }}
                  className={cn(
                    "w-full group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  )}
                  title={isCollapsed ? item.name : undefined}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <>
                      <span className="flex-1 text-left">{item.name}</span>
                      <ChevronRight className={cn(
                        "h-4 w-4 transition-transform",
                        isExpanded && "rotate-90"
                      )} />
                    </>
                  )}
                </button>
              ) : (
                <Link
                  href={item.badge ? "#" : item.href}
                  className={cn(
                    "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                    item.badge && "cursor-not-allowed opacity-60"
                  )}
                  title={isCollapsed ? item.name : undefined}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <>
                      <span className="flex-1">{item.name}</span>
                      {item.badge && (
                        <span className="text-xs text-gray-400">{item.badge}</span>
                      )}
                    </>
                  )}
                </Link>
              )}
              
              {item.children && isExpanded && !isCollapsed && (
                <div className="mt-1 space-y-1 pl-11">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className={cn(
                        "block rounded-md px-3 py-1.5 text-sm",
                        pathname === child.href
                          ? "text-gray-900 font-medium"
                          : "text-gray-600 hover:text-gray-900"
                      )}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </nav>

      {/* User Profile */}
      <div className="border-t p-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold flex-shrink-0">
            TJ
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">Ted Johnson</p>
              <p className="text-xs text-gray-500 truncate">CEO, ECI Construction</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
