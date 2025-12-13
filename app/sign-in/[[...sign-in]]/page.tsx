import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="container  flex items-center justify-center py-15 mt-10 min-h-[80vh]">
      <SignIn />
    </div>
  );
}
