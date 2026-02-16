import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "National Directorate of Employment LMS",
  description: "Learning Management System for the National Directorate of Employment",
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
                  <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
                    <div> © {new Date().getFullYear()} National Directorate of Employment. Powered by <span className="font-semibold text-green-800"><a href="https://www.arthuriteintegrated.com" target="_blank" rel="noopener noreferrer">Arthurite Integrated</a></span></div>
                    <div>
                      <Image
                      src="https://atr-logo.s3.us-east-1.amazonaws.com/atr-logo.png"
                      alt="Arthurite Logo"
                      width={24}
                      height={24}/>
                    </div>
                  </div>
                 
                    
                </footer>
              </main>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

