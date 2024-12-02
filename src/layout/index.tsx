/* Components */
import { Toaster } from "@/components/ui/toaster";

/* Layout Components */
import { Header } from "./components/Header";

type LayoutProps = {
  hideHeader?: boolean;
  children: React.ReactNode;
};

export function Layout({ hideHeader, children }: LayoutProps) {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      {!hideHeader && <Header />}
      <main className="container max-w-[1024px] flex flex-col items-center mx-auto py-12">
        {children}
      </main>
      <Toaster />
    </div>
  );
}
