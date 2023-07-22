export default async function SiteLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div>
          <div className='min-h-screen pt-24'>
            {children}
          </div>
      </div>
    );
  }