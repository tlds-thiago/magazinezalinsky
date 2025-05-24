import { cn } from "@/lib/utils";

type AdSlotProps = {
  id: string;
  className?: string;
};

export function AdSlot({ id, className }: AdSlotProps) {
  return (
    <div 
      id={id}
      className={cn(
        "ad-slot bg-muted border border-dashed border-border rounded-lg flex justify-center items-center min-h-[250px] my-6 text-muted-foreground",
        className
      )}
      data-ad-slot={id}
    >
      <span>Espaço reservado para anúncios</span>
    </div>
  );
}

export default AdSlot;
