import { useForm } from "react-hook-form";

export default function Signup() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main className="h-screen w-screen grid place-items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap gap-2">
        <input
          className="px-5 py-3 border border-neutral-700 rounded-xl focus:outline-none focus:ring focus:ring-indigo-500 ring-offset-1"
          type="text"
          placeholder="Enter your name"
          {...register("username", { required: true })}
        />
        <button
          className="px-5 py-3 rounded-xl bg-neutral-950 text-gray-50 hover:bg-neutral-900"
          type="submit"
        >
          Sign In
        </button>
      </form>
    </main>
  );
}
