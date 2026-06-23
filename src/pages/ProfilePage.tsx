import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { Avatar } from '@/components/ui/Avatar';
import { Breadcrumb } from '@/components/app/Breadcrumb';
import { Mail, Phone, MapPin, Calendar, Shield, Edit3, Camera } from 'lucide-react';

export function ProfilePage() {
  return (
    <div className="space-y-6">
      <Breadcrumb />

      {/* Profile Header */}
      <Card padding="p-0" className="overflow-hidden">
        <div className="h-32 sm:h-40 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 relative">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 left-10 w-20 h-20 bg-white/20 rounded-full" />
            <div className="absolute bottom-2 right-16 w-32 h-32 bg-white/10 rounded-full" />
          </div>
        </div>
        <div className="px-4 sm:px-6 pb-6 -mt-12 sm:-mt-14 relative">
          <div className="flex flex-col sm:flex-row sm:items-end gap-4">
            <div className="relative">
              <Avatar name="John Doe" size="xl" className="ring-4 ring-white" />
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-primary-700">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-surface-900">John Doe</h1>
              <p className="text-sm text-surface-500">Administrator</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="primary">Admin</Badge>
                <Badge variant="success">Verified</Badge>
              </div>
            </div>
            <Button variant="outline" size="sm" className="self-start sm:self-auto">
              <Edit3 className="w-4 h-4" /> Edit Profile
            </Button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Info */}
        <Card>
          <h2 className="font-semibold text-surface-900 mb-4">Contact Info</h2>
          <div className="space-y-4">
            {[
              { icon: Mail, label: 'Email', value: 'john@example.com' },
              { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
              { icon: MapPin, label: 'Location', value: 'New York, USA' },
              { icon: Calendar, label: 'Joined', value: 'January 15, 2024' },
              { icon: Shield, label: 'Role', value: 'Administrator' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-surface-100 flex items-center justify-center text-surface-400 shrink-0">
                  <item.icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-surface-400">{item.label}</p>
                  <p className="text-sm font-medium text-surface-700">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Edit Form */}
        <Card className="lg:col-span-2">
          <h2 className="font-semibold text-surface-900 mb-4">Edit Profile</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="First Name" defaultValue="John" />
            <Input label="Last Name" defaultValue="Doe" />
            <Input label="Email" type="email" defaultValue="john@example.com" />
            <Input label="Phone" type="tel" defaultValue="+1 (555) 123-4567" />
            <div className="sm:col-span-2">
              <Input label="Address" defaultValue="123 Main St, New York, NY 10001" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-surface-700 block mb-1.5">Bio</label>
              <textarea
                className="w-full px-3 py-3 rounded-xl border border-surface-300 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 resize-none h-24 placeholder:text-surface-400"
                defaultValue="Full-stack developer and admin enthusiast."
              />
            </div>
            <div className="sm:col-span-2 flex gap-3">
              <Button variant="primary">Save Changes</Button>
              <Button variant="ghost">Cancel</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
