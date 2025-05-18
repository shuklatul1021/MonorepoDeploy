import { prismaclient } from "db/client";
export const dynamic = 'force-dynamic'
//or
//export const revalidation = 60

export default async function Home() {
  const user = await prismaclient.user.findMany()
  return (
    <div>
        {JSON.stringify(user)}
    </div>
  );
}
