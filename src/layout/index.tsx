import { Toaster } from "@/components/ui/toaster";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <main className="container max-w-[1024px] flex flex-col items-center mx-auto py-12">
        {children}
      </main>
      <Toaster />
    </div>
  );
}
