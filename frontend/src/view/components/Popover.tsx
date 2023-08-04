import * as RdxPopover from '@radix-ui/react-popover';
import { cn } from '../../app/utils/cn';

function PopoverRoot({ children }: { children: React.ReactNode }) {
  return (
    <RdxPopover.Root>
      {children}
    </RdxPopover.Root>
  )
}

function PopoverTrigger({ children }: { children: React.ReactNode }) {
  return (
    <RdxPopover.Trigger
      asChild
    >
      {children}
    </RdxPopover.Trigger>
  )
}

interface PopoverContentProps {
  children: React.ReactNode
  className?: string
}

interface PopoverContentProps {
  children: React.ReactNode
  className?: string
  onSelect?(): void
}

function PopoverContent({ children, className }: PopoverContentProps) {
  return (
    <RdxPopover.Portal>
      <RdxPopover.Content
        className={cn(
          'z-[99] p-4 rounded-2xl bg-white space-y-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]',
          'data-[side=bottom]:animate-slideDownAndFade',
          'data-[side=top]:animate-slideUpAndFade',
          className,
        )}
      >
        {children}
      </RdxPopover.Content>
    </RdxPopover.Portal>
  )
}

export const Popover = {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Content: PopoverContent,
}
