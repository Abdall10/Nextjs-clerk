import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return( 
  <div className="flex items-center justify-center flex-col">
    <h1 className="text-4xl font-bold mt-20 py-3">This is SignIn page</h1>
    <SignIn />
  </div>
)
}