"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings as SettingsIcon, Plus, Trash2, Edit2, Save, X } from "lucide-react"

const systemSettings = {
  organization: "National Directorate of Employment",
  fiscalYear: "2024-2025",
  country: "Nigeria",
  defaultCurrency: "NGN",
  timezone: "Africa/Lagos",
}

const programCategories = [
  { id: 1, name: "Vocational Skills", status: "Active", programs: 15 },
  { id: 2, name: "Digital & IT Skills", status: "Active", programs: 8 },
  { id: 3, name: "Small Scale Enterprises", status: "Active", programs: 12 },
  { id: 4, name: "Rural Employment", status: "Active", programs: 5 },
  { id: 5, name: "Special Public Works", status: "Active", programs: 2 },
]

const trainingCenters = [
  { id: 1, name: "Lagos Tech Hub", location: "Lagos", accreditation: "Active", capacity: 200 },
  { id: 2, name: "Kano Skills Center", location: "Kano", accreditation: "Active", capacity: 150 },
  { id: 3, name: "Port Harcourt Training Center", location: "Rivers", accreditation: "Active", capacity: 100 },
  { id: 4, name: "Abuja Business Center", location: "Abuja", accreditation: "Pending", capacity: 180 },
  { id: 5, name: "Ibadan Agricultural Institute", location: "Oyo", accreditation: "Active", capacity: 120 },
]

const userRoles = [
  { id: 1, name: "Administrator", permissions: ["Full Access"], users: 3 },
  { id: 2, name: "Program Manager", permissions: ["Manage Programs", "View Reports"], users: 8 },
  { id: 3, name: "Training Center Manager", permissions: ["Manage Beneficiaries", "Submit Reports"], users: 15 },
  { id: 4, name: "Data Officer", permissions: ["View Analytics", "Export Data"], users: 5 },
  { id: 5, name: "Viewer", permissions: ["View Reports"], users: 12 },
]

export default function SettingsPage() {
  const [editingCategory, setEditingCategory] = useState<number | null>(null)
  const [editingCenter, setEditingCenter] = useState<number | null>(null)
  const [newCategoryName, setNewCategoryName] = useState("")
  const [newCenterName, setNewCenterName] = useState("")

  return (
    <main className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">System Settings</h1>
        <p className="text-muted-foreground">Configure NDE LMS system, programs, centers, and user management</p>
      </div>

      <Tabs defaultValue="system" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="system">System Config</TabsTrigger>
          <TabsTrigger value="programs">Programs</TabsTrigger>
          <TabsTrigger value="centers">Training Centers</TabsTrigger>
          <TabsTrigger value="roles">User Roles</TabsTrigger>
          <TabsTrigger value="reporting">Reporting</TabsTrigger>
        </TabsList>

        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Configuration</CardTitle>
              <CardDescription>Core settings for the NDE Learning Management System</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Organization Name</label>
                  <Input value={systemSettings.organization} readOnly className="bg-gray-50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Fiscal Year</label>
                  <Input value={systemSettings.fiscalYear} readOnly className="bg-gray-50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Country</label>
                  <Input value={systemSettings.country} readOnly className="bg-gray-50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Default Currency</label>
                  <Input value={systemSettings.defaultCurrency} readOnly className="bg-gray-50" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium">Timezone</label>
                  <Input value={systemSettings.timezone} readOnly className="bg-gray-50" />
                </div>
              </div>

              <div className="pt-4 border-t space-y-4">
                <h3 className="font-semibold">Enrollment Settings</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Enrollment Period Start</label>
                    <Input type="date" defaultValue="2024-01-01" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Enrollment Period End</label>
                    <Input type="date" defaultValue="2024-12-31" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Certificate Validity (Years)</label>
                    <Input type="number" defaultValue="2" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Renewal Notice (Days)</label>
                    <Input type="number" defaultValue="180" />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t space-y-4">
                <h3 className="font-semibold">Compliance Settings</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 border rounded">
                    <input type="checkbox" id="data-collection" defaultChecked className="w-4 h-4" />
                    <label htmlFor="data-collection" className="text-sm font-medium cursor-pointer flex-1">
                      Enable Data Collection & Analytics
                    </label>
                  </div>
                  <div className="flex items-center gap-3 p-3 border rounded">
                    <input type="checkbox" id="backup" defaultChecked className="w-4 h-4" />
                    <label htmlFor="backup" className="text-sm font-medium cursor-pointer flex-1">
                      Enable Automatic Daily Backups
                    </label>
                  </div>
                  <div className="flex items-center gap-3 p-3 border rounded">
                    <input type="checkbox" id="audit" defaultChecked className="w-4 h-4" />
                    <label htmlFor="audit" className="text-sm font-medium cursor-pointer flex-1">
                      Enable Audit Trail Logging
                    </label>
                  </div>
                </div>
              </div>

              <Button className="w-full md:w-auto">Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="programs" className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Program Categories</h2>
              <p className="text-sm text-muted-foreground">Manage program categories and classifications</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Category
            </Button>
          </div>

          <div className="space-y-2">
            {programCategories.map((category) => (
              <Card key={category.id} className="p-4">
                {editingCategory === category.id ? (
                  <div className="flex gap-2">
                    <Input
                      value={newCategoryName}
                      onChange={(e) => setNewCategoryName(e.target.value)}
                      placeholder="Category name"
                      className="flex-1"
                    />
                    <Button
                      size="sm"
                      onClick={() => {
                        setEditingCategory(null)
                        setNewCategoryName("")
                      }}
                    >
                      <Save className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setEditingCategory(null)
                        setNewCategoryName("")
                      }}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <p className="font-semibold">{category.name}</p>
                      <p className="text-sm text-muted-foreground">{category.programs} active programs</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{category.status}</Badge>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => {
                          setEditingCategory(category.id)
                          setNewCategoryName(category.name)
                        }}
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          <Card className="p-4 bg-blue-50 border-blue-200">
            <p className="text-sm text-blue-900">
              <strong>Note:</strong> Programs within a category inherit category settings. Deleting a category will require reassigning its programs.
            </p>
          </Card>
        </TabsContent>

        <TabsContent value="centers" className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Training Centers</h2>
              <p className="text-sm text-muted-foreground">Manage and accredit training centers</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Register Center
            </Button>
          </div>

          <div className="space-y-2">
            {trainingCenters.map((center) => (
              <Card key={center.id} className="p-4">
                {editingCenter === center.id ? (
                  <div className="space-y-3">
                    <Input
                      value={newCenterName}
                      onChange={(e) => setNewCenterName(e.target.value)}
                      placeholder="Center name"
                    />
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => {
                          setEditingCenter(null)
                          setNewCenterName("")
                        }}
                      >
                        <Save className="h-4 w-4 mr-1" />
                        Save
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setEditingCenter(null)
                          setNewCenterName("")
                        }}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="font-semibold">{center.name}</p>
                      <p className="text-sm text-muted-foreground">{center.location}</p>
                      <p className="text-xs text-muted-foreground mt-1">Capacity: {center.capacity} beneficiaries</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={center.accreditation === "Active" ? "default" : "secondary"}
                      >
                        {center.accreditation}
                      </Badge>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => {
                          setEditingCenter(center.id)
                          setNewCenterName(center.name)
                        }}
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="roles" className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">User Roles & Permissions</h2>
              <p className="text-sm text-muted-foreground">Manage user roles and access control</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Role
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {userRoles.map((role) => (
              <Card key={role.id} className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold">{role.name}</h3>
                  <Badge variant="outline">{role.users} users</Badge>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-xs text-muted-foreground font-semibold">Permissions:</p>
                  {role.permissions.map((perm) => (
                    <div key={perm} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      {perm}
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Edit2 className="h-3 w-3 mr-1" />
                    Edit
                  </Button>
                  {role.id !== 1 && (
                    <Button size="sm" variant="outline" className="flex-1 text-red-600">
                      <Trash2 className="h-3 w-3 mr-1" />
                      Delete
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-4 bg-amber-50 border-amber-200">
            <p className="text-sm text-amber-900">
              <strong>Important:</strong> The Administrator role cannot be modified or deleted. All users must have at least one role assigned.
            </p>
          </Card>
        </TabsContent>

        <TabsContent value="reporting" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reporting & Export Configuration</CardTitle>
              <CardDescription>Configure default report templates and export settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold">Default Report Templates</h3>
                <div className="space-y-2">
                  {[
                    { name: "Monthly Enrollment Report", frequency: "Monthly", lastRun: "2024-08-01" },
                    { name: "Employment Outcomes Report", frequency: "Quarterly", lastRun: "2024-07-01" },
                    { name: "Training Center Performance", frequency: "Monthly", lastRun: "2024-08-05" },
                    { name: "Beneficiary Progress Report", frequency: "On-Demand", lastRun: "2024-08-10" },
                  ].map((report, idx) => (
                    <Card key={idx} className="p-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-sm">{report.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {report.frequency} • Last run: {report.lastRun}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                          <Button size="sm" variant="outline">
                            Run
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t space-y-4">
                <h3 className="font-semibold">Export Formats</h3>
                <div className="space-y-2">
                  {["Excel (.xlsx)", "PDF (.pdf)", "CSV (.csv)", "JSON (.json)"].map((format) => (
                    <div key={format} className="flex items-center gap-3 p-3 border rounded">
                      <input type="checkbox" id={format} defaultChecked className="w-4 h-4" />
                      <label htmlFor={format} className="text-sm font-medium cursor-pointer flex-1">
                        {format}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t space-y-4">
                <h3 className="font-semibold">Automated Report Scheduling</h3>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Send Monthly Reports To:</label>
                    <Input placeholder="Enter email addresses (comma separated)" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Report Send Time</label>
                    <Input type="time" defaultValue="09:00" />
                  </div>
                </div>
              </div>

              <Button className="w-full md:w-auto">Save Reporting Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}
