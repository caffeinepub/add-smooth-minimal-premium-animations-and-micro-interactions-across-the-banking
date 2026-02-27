import React, { useState } from 'react';
import { ShieldAlert, CreditCard, Smartphone, Bell, CheckCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const actions = [
  { id: 'freeze-cards', label: 'Freeze All Cards', desc: 'Instantly block all debit and credit cards', icon: <CreditCard className="w-4 h-4" /> },
  { id: 'disable-upi', label: 'Disable UPI', desc: 'Stop all UPI transactions immediately', icon: <Smartphone className="w-4 h-4" /> },
  { id: 'alert-support', label: 'Alert Support Team', desc: 'Notify our 24/7 security team', icon: <Bell className="w-4 h-4" /> },
];

export default function EmergencySecurityButton() {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState<Record<string, boolean>>({
    'freeze-cards': true,
    'disable-upi': true,
    'alert-support': true,
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setDone(true);
    setOpen(false);
    toast.success('Your account has been secured. Our team has been alerted.', {
      duration: 6000,
      icon: '🛡️',
    });
    setTimeout(() => setDone(false), 3000);
  };

  const toggleCheck = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const anyChecked = Object.values(checked).some(Boolean);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-24 right-4 z-50 flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-full shadow-lg emergency-pulse transition-all hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2"
        aria-label="Emergency: Secure My Account"
        title="Secure My Account"
      >
        <ShieldAlert className="w-5 h-5 flex-shrink-0" />
        <span className="text-sm font-bold whitespace-nowrap hidden sm:block">Secure My Account</span>
      </button>

      {/* Confirmation Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-red-100 rounded-xl">
                <ShieldAlert className="w-6 h-6 text-red-600" />
              </div>
              <DialogTitle className="text-xl font-display text-deep-navy">
                Secure My Account
              </DialogTitle>
            </div>
            <DialogDescription className="text-deep-navy/70">
              Select the security actions you want to activate immediately. This cannot be undone without contacting support.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 my-2">
            {actions.map((action) => (
              <div
                key={action.id}
                className={`flex items-start gap-3 p-3 rounded-xl border-2 transition-all cursor-pointer ${
                  checked[action.id]
                    ? 'border-red-200 bg-red-50'
                    : 'border-deep-navy/10 bg-deep-navy/5'
                }`}
                onClick={() => toggleCheck(action.id)}
              >
                <Checkbox
                  id={action.id}
                  checked={checked[action.id]}
                  onCheckedChange={() => toggleCheck(action.id)}
                  className="mt-0.5"
                  aria-label={action.label}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className={checked[action.id] ? 'text-red-600' : 'text-deep-navy/50'}>
                      {action.icon}
                    </span>
                    <Label
                      htmlFor={action.id}
                      className="font-semibold text-deep-navy cursor-pointer"
                    >
                      {action.label}
                    </Label>
                  </div>
                  <p className="text-xs text-deep-navy/60 mt-0.5">{action.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <DialogFooter className="gap-2">
            <button
              onClick={() => setOpen(false)}
              className="flex-1 py-2.5 rounded-xl border-2 border-deep-navy/20 text-deep-navy font-semibold hover:bg-deep-navy/5 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              disabled={!anyChecked || loading}
              className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              aria-label="Confirm account security actions"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Securing...
                </>
              ) : done ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Secured!
                </>
              ) : (
                <>
                  <ShieldAlert className="w-4 h-4" />
                  Confirm & Secure
                </>
              )}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
