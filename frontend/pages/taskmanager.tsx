import { useRouter } from "next/router";
import { useLogout } from "../src/hooks/auth/useLogout";

export default function Taskmanager() {
  const { logout } = useLogout();
  const router = useRouter();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <button
        onClick={() => {
          logout();
          router.push("/login");
        }}
        className="mt-2 border border-solid border-black py-2 px-4 rounded cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}
