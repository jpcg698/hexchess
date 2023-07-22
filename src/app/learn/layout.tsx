export default async function SiteLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div>
        <main className="pt-4">
          {children}
        </main>
      </div>
    );
  }