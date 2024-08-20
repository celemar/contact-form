"use client";

import { contactFormSchema, TContactFormSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import SucessMessage from "./SucessMessage";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<TContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: TContactFormSchema) => {
    // submit to server logic
    // ...
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };
  return (
    <section className="flex min-h-screen flex-col items-center justify-center p-4">
      {isSubmitSuccessful && (
        <SucessMessage/>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-2xl p-6 md:p-10 text-[#2B4246] lg:w-[52%] lg:max-w-[730px] relative"
      >
        <h1 className="w-full pb-8 font-bold text-3xl">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="required-asterisk">
              First Name{" "}
            </label>
            <input
              {...register("firstName")}
              id="firstName"
              aria-invalid={errors.firstName ? "true" : "false"}
              type="text"
              className={`w-full mt-2 py-3 rounded-md border pl-6 ${
                errors.firstName ? "border-red" : "border-gray-500"
              } custom-focus bg-white`}
            />
            {errors.firstName && (
              <p className="text-red text-sm md:text-base pt-2">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className="required-asterisk">
              Last Name{" "}
            </label>
            <input
              {...register("lastName")}
              id="lastName"
              aria-invalid={errors.lastName ? "true" : "false"}
              type="text"
              className={`w-full mt-2 py-3 rounded-md border pl-6 ${
                errors.lastName ? "border-red" : "border-gray-500"
              } custom-focus`}
            />
            {errors.lastName && (
              <p className="text-red text-sm md:text-base pt-2">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="email" className="required-asterisk">
            Email Address{" "}
          </label>
          <input
            {...register("email")}
            id="email"
            aria-invalid={errors.email ? "true" : "false"}
            type="email"
            className={`w-full mt-2 py-3 rounded-md border pl-6 ${
              errors.email ? "border-red" : "border-gray-500"
            } custom-focus`}
          />
          {errors.email && (
            <p className="text-red text-sm md:text-base pt-2">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="mt-6 md:mt-7 mb-7">
          <fieldset aria-invalid={errors.queryType ? "true" : "false"}>
            <legend className="block mb-4 required-asterisk">
              Query Type{" "}
            </legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center pl-6 py-[.6rem] space-x-2 border border-gray-500 rounded-md text-lg custom-bg">
                <input
                  {...register("queryType")}
                  id="general"
                  value="general"
                  type="radio"
                  className="outline-green-500"
                />
                <label htmlFor="general" className="select-none">
                  General Enquiry
                </label>
              </div>
              <div className="flex items-center pl-6 py-[.6rem] space-x-2 border border-gray-500 rounded-md text-lg custom-bg">
                <input
                  {...register("queryType")}
                  id="support"
                  value="support"
                  type="radio"
                  className="outline-green-500"
                />
                <label htmlFor="support" className="select-none">
                  Support Request
                </label>
              </div>
            </div>
          </fieldset>
          {errors.queryType && (
            <p
              id="queryType-error"
              className="text-red text-sm md:text-base pt-2"
            >
              {errors.queryType.message}
            </p>
          )}
        </div>

        <div className="mb-8">
          <label htmlFor="message" className="required-asterisk">
            Message{" "}
          </label>
          <textarea
            {...register("message")}
            id="message"
            aria-invalid={errors.message ? "true" : "false"}
            className={`w-full mt-2 p-2 rounded-md border  resize-none
          h-[240px] md:h-[105px] px-6 ${
            errors.message ? "border-red" : "border-grey-500"
          } custom-focus`}
          ></textarea>
          {errors.message && (
            <p className="text-red text-sm md:text-base pt-2">
              {errors.message.message}
            </p>
          )}
        </div>
        <div className="flex items-center">
          <input
            {...register("consent")}
            id="consent"
            aria-invalid={errors.consent ? "true" : "false"}
            type="checkbox"
            className="w-[25px] h-[25px] md:w-[18px] md:h-[18px] outline-green-500"
          />
          <label
            htmlFor="consent"
            className="pl-3 select-none required-asterisk"
          >{isSubmitSuccessful 
          ? 'I hereby consent to being contacted by the team ' 
          :'I consent to being contacted by the team '}
      
          </label>
        </div>
        {errors.consent && (
          <p className="text-red text-sm md:text-base pt-2">
            {errors.consent.message}
          </p>
        )}
        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full mt-10 font-bold bg-green-600 hover:bg-[#063f36] text-white py-4 rounded-md text-sm md:text-lg"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
