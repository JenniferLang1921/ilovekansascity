import { useRef, useState } from "react";

export default function NewsLetterSignUpForm() {
  const inputRef = useRef(null);

  const subscribeUser = async (e) => {
    e.preventDefault();

    // this is where your mailchimp request is made

    const res = await fetch("/api/form", {
      body: JSON.stringify({
        email: inputRef.current.value,
      }),

      headers: {
        "Content-Type": "application/json",
      },

      method: "POST",
    });
  };

  return (
    <div className="pt-8 md:pt-2">
      <p className="font-bold uppercase">Subscribe to our newsletter</p>
      <p className="py-4">
        The latest news, articles, and resources, sent to your inbox weekly.
      </p>

      <form onSubmit={subscribeUser} className="flex flex-col sm:flex-row">
        <input
          type="email"
          id="email-input"
          name="email"
          placeholder="your email"
          ref={inputRef}
          required
          autoCapitalize="off"
          autoCorrect="off"
          className="w-full p-2 mr-4 rounded-md mb-4 text-slate-800"
        />
        <button
          type="submit"
          value=""
          name="subscribe"
          className="p-2 mb-4 bg-red-800 hover:bg-white"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
