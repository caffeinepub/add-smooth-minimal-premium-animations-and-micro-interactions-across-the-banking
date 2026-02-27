import { Type, Contrast } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAccessibility } from '@/contexts/AccessibilityContext';

export default function AccessibilityControls() {
  const { fontSize, setFontSize, highContrast, toggleHighContrast } = useAccessibility();

  return (
    <div className="flex items-center gap-2">
      {/* Font Size Control */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Font size settings">
            <Type className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Font Size</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => setFontSize('small')}
            className={fontSize === 'small' ? 'bg-accent' : ''}
          >
            Small
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setFontSize('medium')}
            className={fontSize === 'medium' ? 'bg-accent' : ''}
          >
            Medium
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setFontSize('large')}
            className={fontSize === 'large' ? 'bg-accent' : ''}
          >
            Large
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* High Contrast Toggle */}
      <Button
        variant={highContrast ? 'default' : 'ghost'}
        size="icon"
        onClick={toggleHighContrast}
        aria-label={highContrast ? 'Disable high contrast' : 'Enable high contrast'}
      >
        <Contrast className="h-5 w-5" />
      </Button>
    </div>
  );
}
