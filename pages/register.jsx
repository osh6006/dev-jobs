import DefaultButton from "../components/common/defaultButton";

const Enter = () => {
  return (
    <section className="my-0 mx-auto w-full">
      <form className="m-auto my-5 rounded-xl bg-white p-10 dark:bg-very_dark_blue desktop:w-[95%]">
        <div className="mb-6 grid gap-6 tablet:grid-cols-2 desktop:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block font-bold text-light_violet"
            >
              Your name
            </label>
            <input
              type="text"
              id="first_name"
              className="block w-full rounded-lg border p-2.5 focus:outline-none focus:ring-2 focus:ring-violet  dark:border-dark_grey dark:bg-very_dark_blue dark:text-white dark:placeholder-gray"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="  mb-2 block font-bold text-light_violet"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              className=" block w-full rounded-lg border p-2.5 focus:outline-none focus:ring-2 focus:ring-violet  dark:border-dark_grey dark:bg-very_dark_blue dark:text-white dark:placeholder-gray"
              placeholder="Flowbite"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block font-bold text-light_violet"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              className="block w-full rounded-lg border p-2.5 focus:outline-none focus:ring-2 focus:ring-violet  dark:border-dark_grey dark:bg-very_dark_blue dark:text-white dark:placeholder-gray"
              placeholder="010-1234-5678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="mb-2 block font-bold text-light_violet"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="block w-full rounded-lg border p-2.5 focus:outline-none focus:ring-2 focus:ring-violet  dark:border-dark_grey dark:bg-very_dark_blue dark:text-white dark:placeholder-gray"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="mb-2 block font-bold text-light_violet"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="  block w-full rounded-lg border p-2.5 focus:outline-none focus:ring-2 focus:ring-violet  dark:border-dark_grey dark:bg-very_dark_blue dark:text-white dark:placeholder-gray"
            placeholder="•••••••••"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirm_password"
            className="mb-2 block font-bold text-light_violet"
          >
            Confirm password
          </label>
          <input
            type="password"
            id="confirm_password"
            className=" block w-full rounded-lg border p-2.5 focus:outline-none focus:ring-2 focus:ring-violet  dark:border-dark_grey dark:bg-very_dark_blue dark:text-white dark:placeholder-gray"
            placeholder="•••••••••"
            required
          />
        </div>
        <div className="mb-6 flex items-center">
          <div className="flex h-5 items-center">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="focus:ring-3 h-4 w-4 rounded border border-violet bg-dark_grey accent-violet focus:ring-violet dark:border-violet dark:bg-violet dark:ring-offset-violet dark:focus:ring-violet"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="text-sm text-gray-900 ml-2 font-medium dark:text-white "
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
