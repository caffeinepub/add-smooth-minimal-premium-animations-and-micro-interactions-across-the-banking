import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Wifi, WifiOff } from "lucide-react";
import { useEffect, useState } from "react";

export default function OfflineIndicator() {
  const [, setIsOnline] = useState(navigator.onLine);
  const [showAlert, setShowAlert] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowAlert(false);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowAlert(true);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!showAlert) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-md animate-slide-in-left">
      <Alert variant="destructive" className="border-2 shadow-xl">
        <WifiOff className="h-5 w-5" />
        <AlertTitle className="font-bold">You're Offline</AlertTitle>
        <AlertDescription>
          Limited functionality available. Some features may not work until you
          reconnect.
        </AlertDescription>
      </Alert>
    </div>
  );
}
