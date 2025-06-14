
export default function DsbLayout({ children }: { children: React.ReactNode }) {
  return (
    <div aria-label="Dashboard">
      {/* <Sidebar /> */}
      <main>{children}</main>
    </div>
  );
}
