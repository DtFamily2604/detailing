/* global process */
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_ID); // replace with your form ID

  if (state.succeeded) {
    return <p className="text-green-600 mt-4">Thank you for your request!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="text-left max-w-lg mx-auto">
      <div>
        <label className="block mb-1 font-semibold" htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div className="mt-4">
        <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="mt-4">
        <label className="block mb-1 font-semibold" htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      </div>

      <div className="border border-gray-300 p-4 rounded-xl mt-6 bg-gray-50">
        <h3 className="text-lg font-semibold mb-4 text-center">Quote Details</h3>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="vehicleType">Vehicle Type</label>
          <input
            id="vehicleType"
            type="text"
            name="vehicleType"
            className="w-full border px-4 py-2 rounded"
          />
          <ValidationError prefix="Vehicle Type" field="vehicleType" errors={state.errors} />
        </div>

        <div className="mt-4">
          <label className="block mb-1 font-semibold" htmlFor="servicesNeeded">Services Needed</label>
          <textarea
            id="servicesNeeded"
            name="servicesNeeded"
            rows="4"
            className="w-full border px-4 py-2 rounded"
          />
          <ValidationError prefix="Services Needed" field="servicesNeeded" errors={state.errors} />
        </div>

        <div className="mt-4">
          <label className="block mb-1 font-semibold" htmlFor="preferredDateTime">Preferred Date or Time (Optional)</label>
          <input
            id="preferredDateTime"
            type="text"
            name="preferredDateTime"
            className="w-full border px-4 py-2 rounded"
          />
          <ValidationError prefix="Preferred Date or Time" field="preferredDateTime" errors={state.errors} />
        </div>
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-red-700 text-white px-6 py-3 rounded font-bold w-full mt-6"
      >
        {state.submitting ? "Sending..." : "Send Request"}
      </button>

      {state.errors?.length > 0 && (
        <p className="text-red-600 mt-4">Oops! There was an error submitting the form.</p>
      )}

    </form>
  );
}

export default ContactForm;
