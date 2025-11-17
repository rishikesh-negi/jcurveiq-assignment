import LeftSidebar from "./LeftSidebar";
import MainContent from "./MainContent";
import MobileSidebarOpeners from "./mobileSidebarOpeners";
import RightSidebar from "./RightSidebar";

function AppLayout() {
  return (
    <div
      className={`grid h-screen w-screen grid-rows-[7.8rem_1fr] grid-cols-[auto_1fr_36.4rem] text-text-primary max-phone-lg:relative max-phone-lg:grid-cols-1`}>
      <MobileSidebarOpeners />

      <LeftSidebar />
      <MainContent />
      <RightSidebar />
    </div>
  );
}

export default AppLayout;
