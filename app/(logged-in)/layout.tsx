import UpgradeRequired from "@/components/common/upgrade-required";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const hasActiveSubscription = false;

  // //todo: remove this

  if (hasActiveSubscription) {
    return <UpgradeRequired />;
  }
  return <>{children}</>;
};

export default Layout;
