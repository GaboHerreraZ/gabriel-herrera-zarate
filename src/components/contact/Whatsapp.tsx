import Image from "next/image";
import Link from "next/link";

import wp from "../../../public/svg/whatsapp.svg";

export const Whatsapp = () => {
  return (
    <Link
      href={`https://api.whatsapp.com/send?phone=573116786056&text=Hola+Gabriel+Herrera`}
      target="_blank"
      className="fixed bottom-5 right-10 animate-bounce z-50 text-[#67C15E]"
    >
      <Image src={wp} alt="whatsapp-gabriel-herrera" height={40} />
    </Link>
  );
};
