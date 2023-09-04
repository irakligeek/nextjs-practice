"use client";
import { useRouter } from "next/navigation";
import { useReducer, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

function formReducer(state, action) {
  switch (action.type) {
    case "is_error":
      return {
        ...state,
        errorMsg: [...state.errorMsg, action.errorMsg],
      };
    case "is_email_error":
      return {
        ...state,
        email_error: action.hasError,
        errorMsg: [...state.errorMsg, action.errorMsg],
      };
    case "is_name_error":
      return {
        ...state,
        name_error: action.hasError,
        errorMsg: [...state.errorMsg, action.errorMsg],
      };
    case "is_loading":
      return {
        ...state,
        loading: action.isLoading,
      };

    case "is_success":
      return {
        ...state,
        success: action.isSuccess,
      };

    case "reset":
      return {
        ...state,
        name_error: false,
        email_error: false,
        errorMsg: [],
        loading: false,
        success: false,
      };

    default:
      throw Error("Unknown action");
  }
}

export default function NewsletterForm() {
  const [formData, setFormData] = useState(false);
  const [formState, dispatchFormState] = useReducer(formReducer, {
    email_error: false,
    name_error: false,
    errorMsg: [],
    loading: false,
    success: false,
  });

  const router = useRouter();

  const submitForm = async (e) => {
    e.preventDefault();
    dispatchFormState({ type: "is_loading", isLoading: true });

    //Reset error messages
    //dispatchFormState({ type: "reset" });

    //Do basic validation
    if (!formData.name && !formData.email) {
      dispatchFormState({ type: "is_loading", isLoading: false });
      dispatchFormState({
        type: "is_name_error",
        errorMsg: "Name can not be empty",
        hasError: true,
      });
      dispatchFormState({
        type: "is_email_error",
        errorMsg: "Email can not be empty",
        hasError: true,
      });
      return;
    }
    if (!formData.name) {
      dispatchFormState({ type: "is_loading", isLoading: false });
      dispatchFormState({
        type: "is_name_error",
        errorMsg: "Name can not be empty",
        hasError: true,
      });
      return;
    }
    if (!formData.email) {
      dispatchFormState({ type: "is_loading", isLoading: false });
      dispatchFormState({
        type: "is_email_error",
        errorMsg: "Email can not be empty",
        hasError: true,
      });
      return;
    }

    const res = await fetch("/api/submit-newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!res.ok) {
      console.log("something went wrong sending POST request");
      dispatchFormState({ type: "is_loading", isLoading: false });
      dispatchFormState({
        type: "is_error",
        errorMsg: "Something went wrong, please try again later",
      });
      return;
    }
    //Success
    const json = await res.json();
    dispatchFormState({ type: "is_success", isSuccess: true });
    dispatchFormState({ type: "is_loading", isLoading: false });
    setFormData(false);

    //Redirect to original page
    setTimeout(() => router.back(), 3500);
  };

  const emailErrorClass = formState?.email_error ? "border-red-500" : "";
  const nameErrorClass = formState?.name_error ? "border-red-500" : "";

  return (
    <form
      className="bg-white rounded px-8 pt-6 pb-8 max-w-5xl w-full"
      onSubmit={submitForm}
    >
      {formState?.errorMsg &&
        formState.errorMsg.map((msg, index) => (
          <p key={index} className="text-red-500 mb-3 text-sm">
            {msg}
          </p>
        ))}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 pl-2 text-gray-700 outline outline-white focus:outline-sky-500 focus:outline-2 ${nameErrorClass}`}
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          onChange={(e) => {
            const name = e.target.value;
            dispatchFormState({ type: "is_name_error", hasError: false });
            setFormData({ ...formData, name: name });
          }}
          value={formData?.name || ""}
          onFocus={() =>
            dispatchFormState({ type: "is_name_error", hasError: false })
          }
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 
            text-gray-700 leading-tight pl-2 
              outline outline-white focus:outline-sky-500 focus:outline-2 ${emailErrorClass}`}
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          onChange={(e) => {
            const email = e.target.value;
            dispatchFormState({ type: "is_email_error", hasError: false });
            setFormData({ ...formData, email: email });
          }}
          value={formData?.email || ""}
          onFocus={() =>
            dispatchFormState({ type: "is_email_error", hasError: false })
          }
        />
      </div>
      <div className="mb-4">
        <button
          className="bg-sky-400 hover:bg-sky-500 transition-all text-white font-bold py-2 px-4 
          rounded focus:outline-none focus:shadow-outline cursor-pointer"
          type="submit"
        >
          {formState.loading && (
            <span className="inline-block pr-2 ">
              <FontAwesomeIcon icon={faCircleNotch} spin />
            </span>
          )}
          {formState.loading ? "Submittig..." : "Submit"}
        </button>
      </div>
      {formState.success && (
        <p className="text-green-600">
          Thanks for signing up! <br />
          You will be now redirected to Home page
        </p>
      )}
    </form>
  );
}
