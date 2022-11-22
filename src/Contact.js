import React from 'react';
import { HashLink } from 'react-router-hash-link';

function Contact(props) {
    return (
<section id="contact" class="bg-gray-100">
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div class="lg:col-span-2 lg:py-12">
        <h1 class="-mt-9 text-center sm:text-left sm:mt-0 max-w-xl text-2xl mb-2 font-semibold text-blue-600"> Get in touch </h1>
        <p class="max-w-xl text-lg text-center sm:text-left">
          Think our service is a match? Get in touch and let's integrate the best digital solution for your organization.  
        </p>

        <div class="mt-8">
          <a href="tel:+17325158724" class="text-2xl font-bold text-blue-600">
            (732) 515 8724
          </a>
        </div>
      </div>

      <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="" class="space-y-4">
          <div>
            <label class="sr-only" for="name">Name</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="sr-only" for="email">Email</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label class="sr-only" for="phone">Phone</label>
              <input
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}|[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          <div>
            <label class="sr-only" for="subject"> Subject </label>
          </div>

          <div>
            <label class="sr-only" for="message">Message</label>
            <textarea
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div class="mt-4">
            <button
              type="submit"
              class="inline-flex w-full items-center justify-center bg-blue-600 px-5 py-3 text-white sm:w-auto"
            >
              <span class="font-medium"> Send Inquiry </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ml-3 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    );
}

export default Contact;