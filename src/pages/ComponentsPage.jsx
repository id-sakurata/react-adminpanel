import { useState } from 'react';
import { Card, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Alert } from '@/components/ui/Alert';
import { Input } from '@/components/ui/Input';
import { Avatar } from '@/components/ui/Avatar';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Tabs } from '@/components/ui/Tabs';
import { Skeleton } from '@/components/ui/Skeleton';
import { Breadcrumb } from '@/components/app/Breadcrumb';
import { CounterBasic, CounterIcon } from '@/components/cards/CounterBasic';
import { CounterColored } from '@/components/cards/CounterColored';
import { CounterGradient } from '@/components/cards/CounterGradient';
import { CounterTrend } from '@/components/cards/CounterTrend';
import { CounterProgress } from '@/components/cards/CounterProgress';
import { CounterGlass } from '@/components/cards/CounterGlass';
import { CounterMini } from '@/components/cards/CounterMini';
import { CounterChart } from '@/components/cards/CounterChart';
import {
  Search, Mail, Eye, Users, DollarSign, ShoppingBag,
  Activity, TrendingUp, HardDrive, Zap, Package, BarChart3
} from 'lucide-react';

export function ComponentsPage() {
  const [activeSection, setActiveSection] = useState('buttons');
  const [showAlert, setShowAlert] = useState(true);

  const sections = [
    { key: 'buttons', label: 'Buttons' },
    { key: 'forms', label: 'Forms' },
    { key: 'alerts', label: 'Alerts' },
    { key: 'badges', label: 'Badges' },
    { key: 'cards', label: 'Cards' },
    { key: 'counters', label: 'Counters' },
    { key: 'avatars', label: 'Avatars' },
    { key: 'progress', label: 'Progress' },
    { key: 'loading', label: 'Loading' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <Breadcrumb />
        <h1 className="text-xl sm:text-2xl font-bold text-surface-900 mt-2">Components</h1>
        <p className="text-sm text-surface-500 mt-1">Showcase of all available UI components.</p>
      </div>

      <Tabs tabs={sections} active={activeSection} onChange={setActiveSection} className="overflow-x-auto" />

      {activeSection === 'buttons' && (
        <div className="space-y-6">
          <Card>
            <CardTitle>Button Variants</CardTitle>
            <CardDescription>All available button styles.</CardDescription>
            <div className="flex flex-wrap gap-3 mt-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="success">Success</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="info">Info</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </Card>

          <Card>
            <CardTitle>Button Sizes</CardTitle>
            <div className="flex flex-wrap items-center gap-3 mt-4">
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="md">Medium</Button>
              <Button variant="primary" size="lg">Large</Button>
            </div>
          </Card>

          <Card>
            <CardTitle>Buttons with Icons</CardTitle>
            <div className="flex flex-wrap gap-3 mt-4">
              <Button variant="primary"><Mail className="w-4 h-4" /> Send Email</Button>
              <Button variant="success"><Package className="w-4 h-4" /> Create Order</Button>
              <Button variant="outline"><Search className="w-4 h-4" /> Search</Button>
              <Button variant="danger" size="sm"><Eye className="w-4 h-4" /> Delete</Button>
            </div>
          </Card>

          <Card>
            <CardTitle>Disabled State</CardTitle>
            <div className="flex flex-wrap gap-3 mt-4">
              <Button variant="primary" disabled>Disabled</Button>
              <Button variant="outline" disabled>Disabled Outline</Button>
            </div>
          </Card>
        </div>
      )}

      {activeSection === 'forms' && (
        <div className="space-y-6">
          <Card>
            <CardTitle>Input Fields</CardTitle>
            <div className="space-y-4 mt-4 max-w-md">
              <Input label="Default Input" placeholder="Enter text..." />
              <Input label="With Icon" placeholder="Search..." icon={<Search className="w-4 h-4" />} />
              <Input label="Email" type="email" placeholder="john@example.com" icon={<Mail className="w-4 h-4" />} />
              <Input label="With Error" placeholder="Enter value" error="This field is required" />
              <Input label="Disabled" placeholder="Disabled input" disabled />
            </div>
          </Card>

          <Card>
            <CardTitle>Textarea</CardTitle>
            <div className="mt-4 max-w-md space-y-1.5">
              <label className="text-sm font-medium text-surface-700">Message</label>
              <textarea
                className="w-full px-3 py-3 rounded-xl border border-surface-300 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 resize-none h-24 placeholder:text-surface-400"
                placeholder="Write your message..."
              />
            </div>
          </Card>

          <Card>
            <CardTitle>Checkboxes & Radio</CardTitle>
            <div className="mt-4 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-surface-700">Checkboxes</label>
                {['Option A', 'Option B', 'Option C'].map(opt => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-surface-300 text-primary-600 focus:ring-primary-500" />
                    <span className="text-sm text-surface-700">{opt}</span>
                  </label>
                ))}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-surface-700">Radio Buttons</label>
                {['Choice 1', 'Choice 2', 'Choice 3'].map(opt => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="radio-demo" className="w-4 h-4 border-surface-300 text-primary-600 focus:ring-primary-500" />
                    <span className="text-sm text-surface-700">{opt}</span>
                  </label>
                ))}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-surface-700">Toggle Switch</label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-surface-200 peer-focus:ring-2 peer-focus:ring-primary-500/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-surface-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600" />
                  <span className="ml-3 text-sm text-surface-700">Enable notifications</span>
                </label>
              </div>
            </div>
          </Card>
        </div>
      )}

      {activeSection === 'alerts' && (
        <div className="space-y-4">
          <Alert variant="info" title="Information">
            This is an informational alert message.
          </Alert>
          <Alert variant="success" title="Success">
            Operation completed successfully.
          </Alert>
          <Alert variant="warning" title="Warning">
            Please review your changes before proceeding.
          </Alert>
          <Alert variant="danger" title="Error">
            Something went wrong. Please try again.
          </Alert>
          {showAlert && (
            <Alert variant="info" title="Dismissible Alert" dismissible onDismiss={() => setShowAlert(false)}>
              Click the X button to dismiss this alert.
            </Alert>
          )}
          {!showAlert && (
            <Button variant="outline" size="sm" onClick={() => setShowAlert(true)}>
              Show Dismissed Alert
            </Button>
          )}
        </div>
      )}

      {activeSection === 'badges' && (
        <Card>
          <CardTitle>Badge Variants</CardTitle>
          <div className="flex flex-wrap gap-3 mt-4">
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="secondary">Secondary</Badge>
          </div>
          <CardTitle className="mt-6">With Dot Indicator</CardTitle>
          <div className="flex flex-wrap gap-3 mt-4">
            <Badge variant="success" dot>Active</Badge>
            <Badge variant="danger" dot>Offline</Badge>
            <Badge variant="warning" dot>Pending</Badge>
            <Badge variant="info" dot>Processing</Badge>
          </div>
        </Card>
      )}

      {activeSection === 'cards' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardTitle>Standard Card</CardTitle>
              <CardDescription>A basic card component with title and description.</CardDescription>
              <p className="text-sm text-surface-600 mt-3">Card body content goes here. Can contain any elements.</p>
            </Card>

            <Card hover>
              <CardTitle>Hoverable Card</CardTitle>
              <CardDescription>This card has a hover effect.</CardDescription>
              <p className="text-sm text-surface-600 mt-3">Hover over this card to see the effect.</p>
            </Card>

            <Card>
              <div className="flex items-center gap-3 mb-3">
                <Avatar name="Sarah Johnson" size="md" />
                <div>
                  <p className="font-medium text-surface-900">Sarah Johnson</p>
                  <p className="text-xs text-surface-400">Product Manager</p>
                </div>
              </div>
              <p className="text-sm text-surface-600">Profile card example with avatar, name, and role information.</p>
              <div className="mt-4 flex gap-2">
                <Button variant="primary" size="sm">Follow</Button>
                <Button variant="outline" size="sm">Message</Button>
              </div>
            </Card>
          </div>

          <Card>
            <CardTitle>Action Card</CardTitle>
            <CardDescription>Card with action buttons in the footer.</CardDescription>
            <p className="text-sm text-surface-600 mt-3 mb-4">
              This is an example of a card with action buttons. You can use any combination of buttons.
            </p>
            <div className="flex gap-2 pt-4 border-t border-surface-100">
              <Button variant="primary" size="sm">Approve</Button>
              <Button variant="danger" size="sm">Reject</Button>
              <Button variant="ghost" size="sm">Skip</Button>
            </div>
          </Card>
        </div>
      )}

      {activeSection === 'counters' && (
        <div className="space-y-6">
          <h3 className="font-semibold text-surface-900">Basic & Icon Counters</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <CounterBasic label="Total Users" value="1,245" />
            <CounterBasic label="Revenue" value="$24.5K" />
            <CounterIcon label="Orders" value="856" icon={<ShoppingBag className="w-5 h-5" />} iconBg="bg-info-100 text-info-600" />
            <CounterIcon label="Products" value="142" icon={<Package className="w-5 h-5" />} iconBg="bg-success-100 text-success-600" />
          </div>

          <h3 className="font-semibold text-surface-900">Colored Counters</h3>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            <CounterColored label="Primary" value="892" icon={<Users className="w-5 h-5" />} color="primary" />
            <CounterColored label="Success" value="156" icon={<Activity className="w-5 h-5" />} color="success" />
            <CounterColored label="Danger" value="23" icon={<Zap className="w-5 h-5" />} color="danger" />
            <CounterColored label="Warning" value="45" icon={<TrendingUp className="w-5 h-5" />} color="warning" />
            <CounterColored label="Info" value="67" icon={<BarChart3 className="w-5 h-5" />} color="info" />
          </div>

          <h3 className="font-semibold text-surface-900">Gradient Counters</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <CounterGradient label="Revenue" value="$24.5K" icon={<DollarSign className="w-5 h-5" />} gradient="primary" />
            <CounterGradient label="Users" value="1,245" icon={<Users className="w-5 h-5" />} gradient="success" />
            <CounterGradient label="Orders" value="856" icon={<ShoppingBag className="w-5 h-5" />} gradient="danger" />
            <CounterGradient label="Growth" value="+18%" icon={<TrendingUp className="w-5 h-5" />} gradient="purple" />
          </div>

          <h3 className="font-semibold text-surface-900">Trend Counters</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <CounterTrend label="Revenue" value="$8,245" trend={12.5} icon={<DollarSign className="w-5 h-5" />} />
            <CounterTrend label="Users" value="384" trend={8.2} icon={<Users className="w-5 h-5" />} />
            <CounterTrend label="Orders" value="250" trend={-4.1} icon={<ShoppingBag className="w-5 h-5" />} />
            <CounterTrend label="Conversion" value="3.2%" trend={1.8} icon={<TrendingUp className="w-5 h-5" />} />
          </div>

          <h3 className="font-semibold text-surface-900">Progress Counters</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <CounterProgress label="Storage" value={75} color="primary" icon={<HardDrive className="w-4 h-4" />} />
            <CounterProgress label="Bandwidth" value={42} color="info" icon={<Zap className="w-4 h-4" />} />
            <CounterProgress label="CPU" value={89} color="danger" icon={<Activity className="w-4 h-4" />} />
            <CounterProgress label="Memory" value={56} color="success" icon={<BarChart3 className="w-4 h-4" />} />
          </div>

          <h3 className="font-semibold text-surface-900">Chart Counters</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <CounterChart label="Revenue" value="$24,500" data={[42, 38, 51, 48, 55, 62, 58, 71, 65, 74, 82, 78]} color="#3b82f6" />
            <CounterChart label="Users" value="1,245" data={[12, 15, 18, 21, 19, 23, 26, 29, 31, 34, 38, 42]} color="#22c55e" />
            <CounterChart label="Orders" value="856" data={[45, 52, 48, 61, 55, 70, 65, 78, 82, 90, 95, 88]} color="#06b6d4" />
          </div>

          <h3 className="font-semibold text-surface-900">Glass & Mini Counters</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <CounterGlass label="Views" value="12.4K" icon={<Eye className="w-5 h-5" />} />
            <CounterGlass label="Clicks" value="3.8K" icon={<Zap className="w-5 h-5" />} />
            <CounterMini label="Sessions" value="3,842" icon={<Activity className="w-4 h-4" />} iconColor="text-success-500" />
            <CounterMini label="Bounce" value="24.5%" icon={<BarChart3 className="w-4 h-4" />} iconColor="text-warning-500" />
          </div>
        </div>
      )}

      {activeSection === 'avatars' && (
        <Card>
          <CardTitle>Avatar Sizes</CardTitle>
          <div className="flex items-end gap-4 mt-4">
            <Avatar name="John Doe" size="sm" />
            <Avatar name="Jane Smith" size="md" />
            <Avatar name="Bob Wilson" size="lg" />
            <Avatar name="Alice Brown" size="xl" />
          </div>
          <CardTitle className="mt-6">Avatar Group</CardTitle>
          <div className="flex -space-x-2 mt-4">
            {['Sarah Johnson', 'Michael Chen', 'Emma Wilson', 'James Brown', 'Olivia Davis'].map(name => (
              <Avatar key={name} name={name} size="md" className="ring-2 ring-white" />
            ))}
            <div className="w-10 h-10 rounded-full bg-surface-200 flex items-center justify-center text-xs font-medium text-surface-500 ring-2 ring-white">
              +5
            </div>
          </div>
        </Card>
      )}

      {activeSection === 'progress' && (
        <Card>
          <CardTitle>Progress Bars</CardTitle>
          <div className="space-y-6 mt-4">
            <div>
              <p className="text-sm text-surface-600 mb-2">Primary - 75%</p>
              <ProgressBar value={75} color="primary" />
            </div>
            <div>
              <p className="text-sm text-surface-600 mb-2">Success - 100%</p>
              <ProgressBar value={100} color="success" />
            </div>
            <div>
              <p className="text-sm text-surface-600 mb-2">Warning - 45%</p>
              <ProgressBar value={45} color="warning" />
            </div>
            <div>
              <p className="text-sm text-surface-600 mb-2">Danger - 20%</p>
              <ProgressBar value={20} color="danger" />
            </div>
            <div>
              <p className="text-sm text-surface-600 mb-2">Info - 60% (Large)</p>
              <ProgressBar value={60} color="info" size="lg" />
            </div>
            <div>
              <p className="text-sm text-surface-600 mb-2">Small - 85%</p>
              <ProgressBar value={85} color="primary" size="sm" />
            </div>
          </div>
        </Card>
      )}

      {activeSection === 'loading' && (
        <div className="space-y-6">
          <Card>
            <CardTitle>Skeleton Loading</CardTitle>
            <div className="space-y-4 mt-4">
              <div className="flex items-center gap-3">
                <Skeleton className="w-10 h-10 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-48" />
                </div>
              </div>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </Card>

          <Card>
            <CardTitle>Card Skeleton</CardTitle>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="border border-surface-200 rounded-xl p-4 space-y-3">
                  <Skeleton className="w-full h-32 rounded-lg" />
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-4/5" />
                  <div className="flex gap-2 pt-2">
                    <Skeleton className="h-8 w-20 rounded-lg" />
                    <Skeleton className="h-8 w-20 rounded-lg" />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
