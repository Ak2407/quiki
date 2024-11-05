"use client";

import { CheckCircle, Mail } from "lucide-react";
import { Input } from "../../../../components/ui/input";
import AuthAction from "./AuthAction";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../../../components/ui/form";
import { signIn } from "next-auth/react";
import { SignInSchema } from "../../../../../schemas";

const EmailForm = () => {
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
    },
  });

  const resendSignIn = async (values: z.infer<typeof SignInSchema>) => {
    const validatedFields = SignInSchema.safeParse(values);

    if (!validatedFields.success) {
      throw new Error("Invalid fields");
    }
    const res = await signIn("resend", {
      email: values.email,
      redirect: false,
    });
    return res;
  };

  const [isPending, startTransition] = useTransition();
  const [emailSent, setEmailSent] = useState(false);

  const handleFormSubmit = async (values: z.infer<typeof SignInSchema>) => {
    startTransition(async () => {
      try {
        const res = await resendSignIn(values);

        if (res) {
          setEmailSent(true);
        } else {
          alert("Something went wrong");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    });
  };

  return (
    <div>
      {emailSent ? (
        <div className="bg-cyan-100 text-cyan-700 border-green-200 px-2 text-center sm:px-0 py-2 flex flex-row gap-2 items-center justify-center rounded-md">
          <CheckCircle className="h-5 w-5 hidden sm:block" />
          <h1>Check your Inbox for verification mail</h1>
        </div>
      ) : (
        <Form {...form}>
          <form
            className="flex flex-col gap-8 w-full"
            onSubmit={form.handleSubmit(handleFormSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="w-full relative">
                      <Mail className="h-5 w-5 absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
                      <Input
                        {...field}
                        type="email"
                        placeholder="Email"
                        className="pl-11 ring-0 focus-visible:ring-offset-0 focus-visible:ring-0 text-md py-6 rounded-[12px] bg-gray-100 text-slate-700"
                        disabled={isPending}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <AuthAction text="Get started" type="submit" disabled={isPending} />
          </form>
        </Form>
      )}
    </div>
  );
};

export default EmailForm;
