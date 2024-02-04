import MainPage from "./mainpage";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-row justify-center py-20">
      <button
        onClick={() => {
          router.push("/mainpage");
        }}
        className="bg-gray-50 text-black px-5 py-2"
      >
        See weather
      </button>
    </div>
  );
}
