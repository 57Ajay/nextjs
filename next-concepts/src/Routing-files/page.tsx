// A page is UI that is unique to a route.

export default function Page({
    params,
    searchParams,
  }: {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }) {
    return <h1>My Page</h1>
  }