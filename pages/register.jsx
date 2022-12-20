import DefaultButton from "../components/common/defaultButton";

const Enter = () => {
  return (
    <section className="my-0 mx-auto w-full">
      <form className="m-auto p-10 desktop:w-1/2">
        <div className="mb-6 grid gap-6 tablet:grid-cols-2 desktop:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="text-sm  mb-2 block font-medium dark:text-white"
            >
              Your name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border-gray-300   focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 dark:text-white"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="  mb-2 block font-medium dark:text-white"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              className="bg-gray-50 border-gray-300   focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 dark:text-white"
              placeholder="Flowbite"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className=" text-gray-900 mb-2 block font-medium dark:text-white"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              className="bg-gray-50 border-gray-300 text-gray-900  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 dark:text-white"
              placeholder="010-1234-5678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="mb-2 block font-medium dark:text-white"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 dark:text-white"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="text-sm text-gray-900 mb-2 block font-medium dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 dark:text-white"
            placeholder="•••••••••"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirm_password"
            className="text-sm text-gray-900 mb-2 block font-medium dark:text-white"
          >
            Confirm password
          </label>
          <input
            type="password"
            id="confirm_password"
            className="bg-gray-50 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 dark:text-white"
            placeholder="•••••••••"
            required
          />
        </div>
        <div className="mb-6 flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="border-gray-300 bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 h-4 w-4 rounded border"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="text-sm text-gray-900 dark:text-gray-300 ml-2 font-medium"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              terms and conditions
            </a>
            .
          </label>
        </div>
        <DefaultButton type="submit" text="Register">
          Submit
        </DefaultButton>
      </form>
    </section>
  );
};

export default Enter;
