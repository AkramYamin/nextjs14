import SideNav from '@/app/ui/dashboard/sidenav';


// XXX - this is a layout, this component is takes its children add add something to them
// In this case, it splits the page into the side nav and the rest of the page, the children is beeing put in the 
// rest of the page
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}