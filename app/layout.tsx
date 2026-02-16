import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "National Directorate of Employment LMS",
  description: "Learning Management System for the National Directorate of Employment",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <SidebarProvider>
            <div className="flex min-h-screen">
              <DashboardSidebar />
              <main className="flex-1 overflow-y-auto">
                {children}
                <footer className="border-t py-4 px-6 text-center text-sm text-gray-500">
                  © {new Date().getFullYear()} National Directorate of Employment. Powered by Arthurite Integrated.
                </footer>
              </main>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'
