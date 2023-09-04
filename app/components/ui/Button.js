import Link from "next/link";
export default function Button({label, href}) {
  return (
    <Link className="w-auto p-4 no-underline bg-sky-500 text-white rounded-md font-bold cursor-pointer" href={href}>
      {label}
    </Link>
  );
}
