export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="w-full min-h-screen ">{children}</main>;
}
