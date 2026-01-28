"use client";
import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import SubmitBtn from "./submit-btn";
export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const refrence = useRef<HTMLFormElement>(null);
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:shreshthaagarwal1234@gmail.com">
          shreshthaagarwal1234@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        /// <reference path="" />
        ref={refrence}
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          refrence.current?.reset();

          toast.success("Email sent successfully!");
        }}
        className="mt-10 flex flex-col"
      >
        <input
          required
          className="h-14 px-4 rounded-lg borderBlack"
          name="senderEmail"
          type="email"
          placeholder="Your email"
        />
        <textarea
          required
          maxLength={5000}
          placeholder="Your mesage"
          name="message"
          id=""
          className="h-52 my-3 rounded-lg borderBlack p-4 "
        ></textarea>
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
