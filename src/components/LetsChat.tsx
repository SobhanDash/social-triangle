"use client";

import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const LetsChat = ({letsChatRef}:any) => {
  const [chatDetails, setChatDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
  });

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setChatDetails({ ...chatDetails, [name]: value });
  };

  const isEmpty = (str: String): boolean => {
    if (str.replace("/s/g", "").trim().length === 0) {
      return true;
    }
    return false;
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
      const { fname, lname, email, message } = chatDetails;
      if (
        !isEmpty(fname) &&
        !isEmpty(lname) &&
        emailRegex.test(email) &&
        !isEmpty(message)
      ) {
        const { data } = await axios.post(
          "/api/sendEmail",
          {
            fname,
            lname,
            email,
            message,
          }
        );

        if (data.success) {
          toast.success("Message sent!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setChatDetails({ fname: "", lname: "", email: "", message: "" });
        }
      } else if (isEmpty(fname)) {
        toast.error("First name cannot be empty!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (isEmpty(lname)) {
        toast.error("Last name cannot be empty!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (!emailRegex.test(email)) {
        toast.error("Invalid email!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error("Message cannot be empty!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error: any) {
      toast.error(error.response.data.error, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div
      ref={letsChatRef}
      className={`min-h-[100vh] w-full py-20 px-6 sm:px-12 md:px-20 text-white
        flex justify-center items-center
        bg-mainBg bg-cover bg-center bg-no-repeat`}
    >
      <div
        className={`grid grid-cols-12 justify-start items-start gap-y-8 md_link:gap-x-8`}
      >
        <div
          className={`col-span-12 md_link:col-span-7 flex flex-col justify-start items-start gap-y-6`}
        >
          <p className={`text-3xl font-semibold`}>Let&apos;s Chat</p>
          <p className={`w-full md_link:w-[80%] lg:w-[70%] lg1:w-[80%]`}>
            If you&apos;re a B2B organization or individual who is looking to
            build an organic presence on LinkedIn, Instagram and/or YouTube to
            drive high-intent traffic & leads, let&apos;s have a conversation.
          </p>

          <div
            className={`w-full md_link:w-[80%] lg:w-[70%] lg1:w-[80%] flex flex-col justify-start items-start gap-y-4`}
          >
            <p>Here&apos;s what you can expect:</p>
            <ul className={`px-4`}>
              <li className={`list-disc`}>
                A discovery call with one of our team members
              </li>
              <li className={`list-disc`}>
                We&apos;ll discuss your needs, goals, and if we are right for
                you
              </li>
              <li className={`list-disc`}>
                We&apos;ll create a customized proposal for you and your team
              </li>
            </ul>
          </div>

          <p className={`w-full md_link:w-[80%] lg:w-[70%] lg1:w-[80%]`}>
            Bonus: We provide a 1 social media profile review at no cost for all
            first-time conversations.
          </p>
        </div>

        <div className={`col-span-12 md_link:col-span-5`}>
          <form
            onSubmit={onSubmitHandler}
            className={`w-full sm1:w-[70%] md_link:w-full lg1:w-[90%] md_link:mx-auto flex flex-col justify-start items-start gap-6`}
          >
            <div
              className={`w-full flex flex-col justify-start items-start gap-4`}
            >
              <p>
                Name <span>{`(required)`}</span>
              </p>
              <div className={`w-full grid grid-cols-12 gap-y-4 sm1:gap-x-4`}>
                <div
                  className={`col-span-12 sm1:col-span-6 flex flex-col justify-start items-start gap-y-2`}
                >
                  <label htmlFor="fname">First Name</label>
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    placeholder="First Name"
                    value={chatDetails.fname}
                    onChange={onChangeHandler}
                    className={`w-full text-black py-2 px-4 outline-none`}
                  />
                </div>

                <div
                  className={`col-span-12 sm1:col-span-6 flex flex-col justify-start items-start gap-y-2`}
                >
                  <label htmlFor="lname">Last Name</label>
                  <input
                    type="text"
                    name="lname"
                    id="lname"
                    value={chatDetails.lname}
                    onChange={onChangeHandler}
                    placeholder="Last Name"
                    className={`w-full text-black py-2 px-4 outline-none`}
                  />
                </div>
              </div>
            </div>

            <div
              className={`w-full flex flex-col justify-start items-start gap-2`}
            >
              <label htmlFor="email">
                Email <span>{`(required)`}</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={chatDetails.email}
                onChange={onChangeHandler}
                className={`w-full text-black py-2 px-4 outline-none`}
              />
            </div>

            <div
              className={`w-full flex flex-col justify-start items-start gap-2`}
            >
              <label htmlFor="message">
                Message <span>{`(required)`}</span>
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                value={chatDetails.message}
                onChange={onChangeHandler}
                className={`h-[100px] w-full text-black py-2 px-4 resize-none outline-none`}
              />
            </div>

            <button
              type="submit"
              className={`py-3 px-6 text-white rounded-lg bg-[#5E17EB]`}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LetsChat;
