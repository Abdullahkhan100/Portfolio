import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
    reset,
  } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/alllxexa", userInfo);
      toast.success("Your message has been sent");
      reset(); // Clear the form fields after successful submission
      setIsSubmitted(true); // Set the form as submitted
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl font-bold mb-4">Contact me</h1>
      <span>Please fill out the form below to contact me</span>
      <div className="flex flex-col items-center justify-center mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
        >
          <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
          <div className="flex flex-col mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              {...register("name", { required: true })}
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight"
              type="text"
              placeholder="Enter Your Full Name"
              name="name"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              {...register("email", { required: true })}
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight"
              type="email"
              placeholder="Enter Your Email Address"
              name="email"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              {...register("message", { required: true })}
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight"
              placeholder="Type Your Message Here"
              name="message"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
          <button
            type="submit"
            className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
            disabled={isSubmitting || (isSubmitted && !isDirty)}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
