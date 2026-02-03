"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
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
    badge: "Coming Soon",
  },
  {
    name: "Resources",
    href: "/resources",
    icon: Users,
    badge: "Coming Soon",
  },
  {
    name: "Data Aggregation",
    href: "/data",
    icon: Database,
    badge: "Coming Soon",
  },
  {
    name: "Project Intelligence",
    href: "/intelligence",
    icon: BarChart3,
    badge: "Coming Soon",
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

  return (
    <div className={cn(
      "flex h-screen flex-col border-r bg-white transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Logo/Header */}
      <div className="flex h-16 items-center border-b px-4 justify-between">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {isCollapsed ? (
            <Image
              src="/eci-logo-compact.svg"
              alt="ECI Logo"
              width={40}
              height={40}
              className="flex-shrink-0"
            />
          ) : (
            <Image
              src="/eci-logo.svg"
              alt="ECI Site Construction Management"
              width={120}
              height={50}
              className="flex-shrink-0"
              priority
            />
          )}
        </div>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
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
