import { Card, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Breadcrumb } from '@/components/app/Breadcrumb';
import { Badge } from '@/components/ui/Badge';
import { Shield, Bell, Globe, Palette } from 'lucide-react';

function ToggleRow({ label, description, defaultChecked = false }) {
  return (
    <div className="flex items-center justify-between py-3">
      <div>
        <p className="text-sm font-medium text-surface-700">{label}</p>
        <p className="text-xs text-surface-400 mt-0.5">{description}</p>
      </div>
      <label className="relative inline-flex items-center cursor-pointer shrink-0">
        <input type="checkbox" className="sr-only peer" defaultChecked={defaultChecked} />
        <div className="w-11 h-6 bg-surface-200 peer-focus:ring-2 peer-focus:ring-primary-500/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-surface-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600" />
      </label>
    </div>
  );
}

export function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <Breadcrumb />
        <h1 className="text-xl sm:text-2xl font-bold text-surface-900 mt-2">Settings</h1>
        <p className="text-sm text-surface-500 mt-1">Manage your application preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <Card>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <CardTitle>General</CardTitle>
              <CardDescription>Basic application settings.</CardDescription>
            </div>
          </div>
          <div className="space-y-4">
            <Input label="App Name" defaultValue="AdminPanel" />
            <Input label="Support Email" defaultValue="support@adminpanel.com" />
            <div>
              <label className="text-sm font-medium text-surface-700 block mb-1.5">Language</label>
              <select className="w-full h-11 px-3 rounded-xl border border-surface-300 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 bg-white">
                <option>English</option>
                <option>Indonesian</option>
                <option>Japanese</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-surface-700 block mb-1.5">Timezone</label>
              <select className="w-full h-11 px-3 rounded-xl border border-surface-300 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 bg-white">
                <option>UTC-5 (Eastern)</option>
                <option>UTC+0 (London)</option>
                <option>UTC+7 (Jakarta)</option>
                <option>UTC+9 (Tokyo)</option>
              </select>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-warning-100 flex items-center justify-center text-warning-600">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Configure notification preferences.</CardDescription>
            </div>
          </div>
          <div className="divide-y divide-surface-100">
            <ToggleRow label="Email Notifications" description="Receive email for important updates." defaultChecked />
            <ToggleRow label="Push Notifications" description="Get push notifications on your devices." defaultChecked />
            <ToggleRow label="Weekly Digest" description="Receive a weekly summary report." />
            <ToggleRow label="Marketing Emails" description="Receive promotional content." />
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-info-100 flex items-center justify-center text-info-600">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>Customize the look and feel.</CardDescription>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-surface-700 mb-2">Theme</p>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Light', active: true },
                  { label: 'Dark', active: false },
                  { label: 'System', active: false },
                ].map(t => (
                  <button
                    key={t.label}
                    className={`py-2 px-3 rounded-xl text-sm font-medium border transition-colors cursor-pointer ${
                      t.active
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-surface-200 text-surface-600 hover:bg-surface-50'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="divide-y divide-surface-100">
              <ToggleRow label="Compact Mode" description="Use compact spacing throughout." />
              <ToggleRow label="Animations" description="Enable UI animations." defaultChecked />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-danger-100 flex items-center justify-center text-danger-600">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <CardTitle>Security</CardTitle>
              <CardDescription>Protect your account.</CardDescription>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-surface-700">Two-Factor Auth</p>
                <p className="text-xs text-surface-400 mt-0.5">Add an extra layer of security.</p>
              </div>
              <Badge variant="success">Enabled</Badge>
            </div>
            <Input label="Current Password" type="password" placeholder="••••••••" />
            <Input label="New Password" type="password" placeholder="••••••••" />
            <Input label="Confirm Password" type="password" placeholder="••••••••" />
            <Button variant="primary" size="sm">Update Password</Button>
          </div>
        </Card>
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-surface-200">
        <Button variant="ghost">Reset to Defaults</Button>
        <Button variant="primary">Save All Changes</Button>
      </div>
    </div>
  );
}
