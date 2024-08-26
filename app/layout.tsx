
import Footer from '@layout/Footer';
import Header from '@layout/Header';
/**
 * Using force dynamic so changes in business assets (e.g. services) are immediately reflected.
 * If you prefer having it reflected only after redeploy (not recommended) please remove it
 * **/
export const revalidate = 0;

export default function RootLayout(layoutProps: any) {
  const { children } = layoutProps;
  const fly = false;
  return (
    <html lang="en">
      <head>
        <title>Devo</title>
        <meta
          name="description"
          content="Devo's personal site"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://www.devo-l.com/favicon.ico" />
      </head>
      {fly ? (
        <body className="parallax-background">
          <Header />
          <main className="bg-transparent min-h-[600px]">{children}</main>
          <Footer />
        </body>
      ) : (
        <body className="">
          <main className="max-w-full-content mx-auto bg-white pt-32">
            <h1>
              Page not available. Please add an environment variable called
              NEXT_PUBLIC_WIX_CLIENT_ID, containing the client ID, to your
              deployment provider.
            </h1>
          </main>
        </body>
      )}
    </html>
  );
}