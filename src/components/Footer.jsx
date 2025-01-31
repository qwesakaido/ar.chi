export function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-h-[900px] max-w-[1440px] justify-start gap-10 px-[40px] py-[34px] font-['Futura'] font-bold md:max-xl:justify-between md:max-xl:gap-5 md:max-xl:w-1/2 md:max-xl:h-1/2 sm:max-md:gap-5 sm:max-md:w-1/2 sm:max-md:h-1/2">
        <a
          className="text-[16px] text-[#444444] transition delay-150 hover:text-green-700"
          href="https://facebook.com"
        >
          Facebook
        </a>
        <a
          className="text-[16px] text-[#444444] transition delay-150 hover:text-green-700"
          href="https://vk.com"
        >
          Vkontakte
        </a>
        <a
          className="text-[16px] text-[#444444] transition delay-150 hover:text-green-700"
          href="https://behance.net"
        >
          Behance
        </a>
      </div>
    </footer>
  );
}
