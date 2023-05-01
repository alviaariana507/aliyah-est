import UserAuthForm from "@/components/UserAuthForm";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aliyah est | SignIn",
};

export default function SignInPage() {
  return (
    <div className="container absolute inset-0 mx-auto flex h-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full max-w-lg flex-col justify-center space-y-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <LargeHeading>Welcome back!</LargeHeading>
          <Paragraph>Please sign in using your Credentials Data.</Paragraph>
        </div>
        <UserAuthForm />
      </div>
    </div>
  );
}
