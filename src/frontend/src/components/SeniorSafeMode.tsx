import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  AlertOctagon,
  CheckCircle,
  Heart,
  PiggyBank,
  Type,
  Volume2,
} from "lucide-react";
import React, { useState } from "react";
import { useAccessibility } from "../contexts/AccessibilityContext";
import { useLifeStage } from "../contexts/LifeStageContext";
import MotionReveal from "./motion/MotionReveal";

export default function SeniorSafeMode() {
  const { lifeStage } = useLifeStage();
  const isSeniorMode = lifeStage === "senior";
  const { fontSize, setFontSize, highContrast, toggleHighContrast } =
    useAccessibility();
  const [freezeSuccess, setFreezeSuccess] = useState(false);

  const handleFreeze = () => {
    setFreezeSuccess(true);
    setTimeout(() => setFreezeSuccess(false), 5000);
  };

  return (
    <section
      className={`py-16 px-4 relative overflow-hidden ${
        isSeniorMode
          ? "bg-gradient-to-br from-purple-50 to-ice-blue/30"
          : "bg-gradient-to-br from-ice-blue/20 to-sage-green/20"
      }`}
      style={{ fontSize: isSeniorMode ? "1.1rem" : undefined }}
    >
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/assets/generated/senior-safe-mode.dim_800x500.png)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <MotionReveal>
          <div className="text-center mb-12">
            <div className="section-badge bg-purple-50 text-purple-700 mb-4">
              <Heart className="w-3.5 h-3.5" />
              Senior Banking
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-navy mb-3 gold-underline inline-block">
              Simple. Safe. Secure.
            </h2>
            <p className="text-[#000000] mt-6 max-w-xl mx-auto text-lg">
              Banking designed with care for our senior citizens — large text,
              easy navigation, and complete security.
            </p>
          </div>
        </MotionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Accessibility Controls */}
          <MotionReveal delay={100}>
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="p-2 bg-blue-50 rounded-xl">
                  <Type className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="font-display font-semibold text-deep-navy text-lg">
                  Display Settings
                </h3>
              </div>
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <Label
                      htmlFor="large-font"
                      className="text-base font-medium text-deep-navy"
                    >
                      Large Font
                    </Label>
                    <p className="text-sm text-[#000000]">
                      Increase text size for easier reading
                    </p>
                  </div>
                  <Switch
                    id="large-font"
                    checked={fontSize === "large"}
                    onCheckedChange={(checked) =>
                      setFontSize(checked ? "large" : "medium")
                    }
                    aria-label="Toggle large font size"
                  />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <Label
                      htmlFor="high-contrast"
                      className="text-base font-medium text-deep-navy"
                    >
                      High Contrast
                    </Label>
                    <p className="text-sm text-[#000000]">
                      Improve visibility with stronger colors
                    </p>
                  </div>
                  <Switch
                    id="high-contrast"
                    checked={highContrast}
                    onCheckedChange={toggleHighContrast}
                    aria-label="Toggle high contrast mode"
                  />
                </div>
              </div>
              <div className="mt-4 p-3 bg-ice-blue/60 rounded-xl text-sm text-[#000000]">
                Current:{" "}
                <strong>
                  {fontSize === "large"
                    ? "Large"
                    : fontSize === "small"
                      ? "Small"
                      : "Normal"}
                </strong>{" "}
                font{highContrast && ", High Contrast"}
              </div>
            </div>
          </MotionReveal>

          {/* Voice Navigation */}
          <MotionReveal delay={150}>
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="p-2 bg-purple-50 rounded-xl">
                  <Volume2 className="w-5 h-5 text-purple-500" />
                </div>
                <h3 className="font-display font-semibold text-deep-navy text-lg">
                  Voice Navigation
                </h3>
              </div>
              <p className="text-[#000000] text-base leading-relaxed mb-4">
                Navigate the entire app using your voice. Just say commands
                like:
              </p>
              <div className="space-y-2">
                {[
                  '"Check my balance"',
                  '"Transfer money"',
                  '"Pay bill"',
                  '"Call support"',
                ].map((cmd) => (
                  <div
                    key={cmd}
                    className="flex items-center gap-2 bg-purple-50 rounded-lg px-3 py-2"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-purple-700">
                      {cmd}
                    </span>
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="mt-4 w-full btn-navy py-3 rounded-xl text-base font-semibold"
              >
                🎙️ Enable Voice Navigation
              </button>
            </div>
          </MotionReveal>

          {/* Pension Tracking */}
          <MotionReveal delay={200}>
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="p-2 bg-amber-50 rounded-xl">
                  <PiggyBank className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="font-display font-semibold text-deep-navy text-lg">
                  Pension Tracker
                </h3>
              </div>
              <div className="space-y-3">
                <div className="bg-deep-navy rounded-xl p-4 text-center">
                  <div className="text-xs text-white mb-1 font-medium">
                    Total Pension Balance
                  </div>
                  <div className="text-3xl font-bold font-display text-gold">
                    ₹12,45,000
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-sage-green/60 rounded-xl p-3 text-center">
                    <div className="text-xs text-[#000000] mb-1">
                      Monthly Payout
                    </div>
                    <div className="text-xl font-bold text-deep-navy">
                      ₹18,500
                    </div>
                  </div>
                  <div className="bg-ice-blue/60 rounded-xl p-3 text-center">
                    <div className="text-xs text-[#000000] mb-1">
                      Next Credit
                    </div>
                    <div className="text-xl font-bold text-deep-navy">
                      Mar 1
                    </div>
                  </div>
                </div>
                <div className="text-sm text-[#000000] bg-amber-50 rounded-lg p-2.5">
                  📅 Your pension is credited on the 1st of every month.
                </div>
              </div>
            </div>
          </MotionReveal>

          {/* Emergency Freeze */}
          <MotionReveal delay={250} className="sm:col-span-2 lg:col-span-3">
            <div className="glass-card-navy rounded-2xl p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500/20 rounded-xl flex-shrink-0">
                    <AlertOctagon className="w-7 h-7 text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-xl mb-1">
                      Emergency Account Freeze
                    </h3>
                    <p className="text-white text-base">
                      Instantly freeze all cards, disable UPI, and alert our
                      security team with one click.
                    </p>
                  </div>
                </div>
                {freezeSuccess ? (
                  <div className="flex items-center gap-2 bg-green-500/20 text-green-400 px-5 py-3 rounded-xl font-semibold text-base">
                    <CheckCircle className="w-5 h-5" />
                    Account Secured!
                  </div>
                ) : (
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <button
                        type="button"
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold text-base transition-all flex items-center gap-2 flex-shrink-0 shadow-lg"
                        aria-label="Emergency account freeze"
                      >
                        <AlertOctagon className="w-5 h-5" />
                        Freeze Account
                      </button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Freeze Your Account?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This will immediately freeze all your cards, disable
                          UPI transactions, and alert our security team. You can
                          unfreeze by calling our helpline.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={handleFreeze}
                          className="bg-red-600 hover:bg-red-700 text-white"
                        >
                          Yes, Freeze Now
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                )}
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
