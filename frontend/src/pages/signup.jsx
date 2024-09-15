import { useForm } from "react-hook-form";
import { GoogleIcon } from "../assets/Google";

export default function Signup() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main className="h-screen w-screen flex justify-center items-center flex-col gap-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 p-4 md:w-96"
      >
        <input
          className="px-5 py-3 block w-full border border-neutral-700 rounded-xl focus:outline-none focus:ring focus:ring-indigo-500 ring-offset-1"
          type="text"
          placeholder="Enter your name"
          {...register("username", { required: true })}
        />
        <input
          className="px-5 py-3 block w-full border border-neutral-700 rounded-xl focus:outline-none focus:ring focus:ring-indigo-500 ring-offset-1"
          type="password"
          placeholder="Enter a password..."
          {...register("password", { required: true, minLength: 4 })}
        />
        <button
          className="px-5 py-3 rounded-xl bg-neutral-950 text-gray-50 hover:bg-neutral-900"
          type="submit"
        >
          Sign In
        </button>
      </form>
      <p>or continue with</p>
      <button className="px-5 py-3 w-fit rounded-xl bg-gray-50 text-neutral-900 hover:bg-neutral-900 flex gap-2 items-center">
        <GoogleIcon /> Google
      </button>
    </main>
  );
}
