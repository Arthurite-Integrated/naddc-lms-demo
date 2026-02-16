"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Download, FileText, CheckCircle2, QrCode, Filter } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const certificates = [
  {
    id: "CERT-2024-001",
    beneficiary: "John Okafor",
    program: "Digital Marketing Skills",
    issueDate: "2024-08-15",
    expiryDate: "2026-08-15",
    status: "Issued",
    certificateNumber: "NDE-DM-2024-0451",
    qrCode: "QR-NDE-DM-2024-0451",
  },
  {
    id: "CERT-2024-002",
    beneficiary: "Amina Ibrahim",
    program: "Vocational Welding Certification",
    issueDate: "2024-07-22",
    expiryDate: "2027-07-22",
    status: "Issued",
    certificateNumber: "NDE-VW-2024-0452",
    qrCode: "QR-NDE-VW-2024-0452",
  },
  {
    id: "CERT-2024-003",
    beneficiary: "Chukwudi Eze",
    program: "Electrical Installation & Maintenance",
    issueDate: "2024-06-10",
    expiryDate: "2026-06-10",
    status: "Issued",
    certificateNumber: "NDE-EIM-2024-0453",
    qrCode: "QR-NDE-EIM-2024-0453",
  },
  {
    id: "CERT-2024-004",
    beneficiary: "Folake Adeyemi",
    program: "Small Scale Enterprise Startup",
    issueDate: "2024-05-30",
    expiryDate: "2025-05-30",
    status: "Expiring Soon",
    certificateNumber: "NDE-SSE-2024-0454",
    qrCode: "QR-NDE-SSE-2024-0454",
  },
  {
    id: "CERT-2024-005",
    beneficiary: "Mohammed Bello",
    program: "Rural Agriculture Business",
    issueDate: null,
    expiryDate: null,
    status: "Pending",
    certificateNumber: null,
    qrCode: null,
  },
  {
    id: "CERT-2024-006",
    beneficiary: "Ngozi Okonkwo",
    program: "Public Works Infrastructure Training",
    issueDate: "2024-04-15",
    expiryDate: "2025-04-15",
    status: "Expiring Soon",
    certificateNumber: "NDE-PWI-2024-0455",
    qrCode: "QR-NDE-PWI-2024-0455",
  },
]

const certificateTemplates = [
  {
    id: "TMPL-001",
    name: "Standard Vocational Certificate",
    programs: "All Vocational Programs",
    lastUpdated: "2024-08-01",
    active: true,
  },
  {
    id: "TMPL-002",
    name: "Enterprise Development Certificate",
    programs: "SSE & Enterprise Programs",
    lastUpdated: "2024-07-15",
    active: true,
  },
  {
    id: "TMPL-003",
    name: "Special Public Works Certificate",
    programs: "Public Works Programs",
    lastUpdated: "2024-06-20",
    active: true,
  },
  {
    id: "TMPL-004",
    name: "Digital Skills Certificate",
    programs: "Digital Marketing & IT Programs",
    lastUpdated: "2024-08-10",
    active: true,
  },
]

export default function CertificationsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null)

  const filteredCerts = certificates.filter(
    (cert) =>
      cert.beneficiary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.program.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.certificateNumber?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const issuedCount = certificates.filter((c) => c.status === "Issued").length
  const pendingCount = certificates.filter((c) => c.status === "Pending").length
  const expiringCount = certificates.filter((c) => c.status === "Expiring Soon").length

  return (
    <main className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Certifications & Credentials</h1>
        <p className="text-muted-foreground">Manage certificate issuance, verification, and templates</p>
      </div>

      <Tabs defaultValue="issued" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="issued">All Certificates</TabsTrigger>
          <TabsTrigger value="templates">Certificate Templates</TabsTrigger>
          <TabsTrigger value="verification">Verification</TabsTrigger>
        </TabsList>

        <TabsContent value="issued" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Issued Certificates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{issuedCount}</div>
                <p className="text-xs text-muted-foreground">Active certifications</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Expiring Soon</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600">{expiringCount}</div>
                <p className="text-xs text-muted-foreground">Within 6 months</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Pending Issuance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">{pendingCount}</div>
                <p className="text-xs text-muted-foreground">Awaiting approval</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Certificate Records</CardTitle>
                  <CardDescription>Issue, verify, and manage all beneficiary certificates</CardDescription>
                </div>
                <Button>Issue New Certificate</Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search by beneficiary, program, or certificate number..."
                    className="w-full pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-2">
                {filteredCerts.map((cert) => (
                  <Card key={cert.id} className="p-4 cursor-pointer hover:bg-accent" onClick={() => setSelectedCert(cert)}>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-semibold">{cert.beneficiary}</p>
                          <Badge
                            variant={
                              cert.status === "Issued"
                                ? "default"
                                : cert.status === "Pending"
                                  ? "secondary"
                                  : "outline"
                            }
                            className={cert.status === "Expiring Soon" ? "bg-yellow-600" : ""}
                          >
                            {cert.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{cert.program}</p>
                        {cert.certificateNumber && (
                          <p className="text-xs text-muted-foreground mt-1">Cert: {cert.certificateNumber}</p>
                        )}
                      </div>
                      <div className="text-right">
                        {cert.issueDate && (
                          <p className="text-sm text-muted-foreground">
                            Issued: {new Date(cert.issueDate).toLocaleDateString()}
                          </p>
                        )}
                        {cert.expiryDate && (
                          <p className="text-sm text-muted-foreground">
                            Expires: {new Date(cert.expiryDate).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                      {cert.status === "Issued" && (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              ⋮
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View Certificate</DropdownMenuItem>
                            <DropdownMenuItem>Download Certificate</DropdownMenuItem>
                            <DropdownMenuItem>View QR Code</DropdownMenuItem>
                            <DropdownMenuItem>Send to Email</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">Revoke Certificate</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {selectedCert && (
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Certificate Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Beneficiary</p>
                    <p className="font-semibold">{selectedCert.beneficiary}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Program</p>
                    <p className="font-semibold">{selectedCert.program}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Certificate Number</p>
                    <p className="font-semibold font-mono">{selectedCert.certificateNumber || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <Badge className={selectedCert.status === "Expiring Soon" ? "bg-yellow-600" : ""}>
                      {selectedCert.status}
                    </Badge>
                  </div>
                  {selectedCert.issueDate && (
                    <div>
                      <p className="text-sm text-muted-foreground">Issue Date</p>
                      <p className="font-semibold">{new Date(selectedCert.issueDate).toLocaleDateString()}</p>
                    </div>
                  )}
                  {selectedCert.expiryDate && (
                    <div>
                      <p className="text-sm text-muted-foreground">Expiry Date</p>
                      <p className="font-semibold">{new Date(selectedCert.expiryDate).toLocaleDateString()}</p>
                    </div>
                  )}
                </div>
                {selectedCert.qrCode && (
                  <div className="flex items-center gap-4 pt-4 border-t">
                    <div className="w-32 h-32 bg-white border-2 border-dashed flex items-center justify-center">
                      <div className="text-center text-xs text-muted-foreground">
                        <QrCode className="h-8 w-8 mx-auto mb-1" />
                        {selectedCert.qrCode}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">QR Code for Verification</p>
                      <p className="text-xs text-muted-foreground mb-3">Scan to verify certificate authenticity</p>
                      <Button size="sm" variant="outline">
                        Download QR Code
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Certificate Templates</h2>
              <p className="text-sm text-muted-foreground">Manage certificate templates for different programs</p>
            </div>
            <Button>Create New Template</Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {certificateTemplates.map((template) => (
              <Card key={template.id} className="relative">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-2">
                        {template.name}
                        {template.active && <Badge variant="default">Active</Badge>}
                      </CardTitle>
                      <CardDescription className="mt-2">{template.programs}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-gray-100 border-2 border-dashed flex items-center justify-center rounded">
                    <div className="text-center">
                      <FileText className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Certificate Preview</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">Last updated: {template.lastUpdated}</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      Edit
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      Preview
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="verification" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Certificate Verification</CardTitle>
              <CardDescription>Verify certificate authenticity using QR code or certificate number</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="max-w-md space-y-4">
                <div>
                  <label className="text-sm font-medium">Certificate Number</label>
                  <Input placeholder="Enter certificate number (e.g., NDE-DM-2024-0451)" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium">Or scan QR Code</label>
                  <div className="mt-1 w-32 h-32 bg-gray-100 border-2 border-dashed flex items-center justify-center rounded">
                    <div className="text-center text-xs text-muted-foreground">
                      <QrCode className="h-8 w-8 mx-auto mb-1" />
                      Scan QR
                    </div>
                  </div>
                </div>
                <Button className="w-full">Verify Certificate</Button>
              </div>

              <div className="pt-6 border-t space-y-2">
                <h3 className="font-semibold">Recent Verifications</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded border border-green-200">
                    <div>
                      <p className="font-medium">NDE-DM-2024-0451</p>
                      <p className="text-xs text-muted-foreground">John Okafor - Digital Marketing</p>
                    </div>
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded border border-green-200">
                    <div>
                      <p className="font-medium">NDE-VW-2024-0452</p>
                      <p className="text-xs text-muted-foreground">Amina Ibrahim - Vocational Welding</p>
                    </div>
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}
