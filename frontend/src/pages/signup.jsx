import { useCallback } from "react";

export default function Signup() {
  const handleClick = useCallback(() => {}, []);

  return (
    <main className="h-screen w-screen grid place-items-center">
      <button
        className="px-5 py-3 rounded-xl bg-neutral-950 text-gray-50 hover:bg-neutral-900"
        onClick={handleClick}
      >
        Sign In
      </button>
    </main>
  );
}
