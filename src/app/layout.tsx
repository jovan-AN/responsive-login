import "../global/styles/globals.css";
import type { Metadata } from "next";
import { ReactNode, Suspense } from "react";
import { ThemeRegistry } from "@/components";
import { StoreProvider } from "@/store/StoreProvider";

export const metadata: Metadata = {
  title: "My Pet Cloud",
  description: "A place where you can take care of your pet.",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <ThemeRegistry options={{ key: "mui" }}>
            {
              <>
                <Suspense>
                  <main>{children}</main>
                </Suspense>
              </>
            }
          </ThemeRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
