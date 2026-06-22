import "@ant-design/v5-patch-for-react-19";
import "antd/dist/reset.css";
import "./globals.css";
export const metadata = {
  title: "Court Click",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}