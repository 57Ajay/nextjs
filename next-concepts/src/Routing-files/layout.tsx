// A layout is UI that is shared between routes.

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }