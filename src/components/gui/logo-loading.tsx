export default function LogoLoading() {
  return (
    <div className="flex gap-2 items-center">
      <div className="w-12 h-12 bg-black dark:bg-white items-center justify-center flex rounded-lg text-white dark:text-black">
        <svg
          className="w-8 h-8"
          width="32"
          height="33"
          viewBox="0 0 32 33"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 0.400024C7.17638 0.400024 0 7.57335 0 16.3999C0 25.2182 7.17638 32.4 16 32.4C24.8235 32.4 32 25.2267 32 16.3999C32 7.57335 24.8235 0.400024 16 0.400024ZM21.9476 27.4141L21.8674 27.5173C21.0305 28.5421 20.0066 28.878 19.2942 28.9727C19.1073 28.9985 18.9203 29.0072 18.7245 29.0072C16.7835 29.0072 14.8247 27.6896 13.0617 25.1836C11.6282 23.1427 10.3817 20.4216 9.55368 17.5194C8.08456 12.3439 8.25373 7.62496 9.98105 5.48938C10.818 4.46456 11.8419 4.12871 12.5542 4.03403C14.5754 3.75832 16.641 4.93816 18.5108 7.4354C20.0599 9.50231 21.3956 12.3527 22.2861 15.4785C23.7373 20.5766 23.5948 25.244 21.9476 27.4141Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div>
        <h1 className="text-2xl font-semibold">LibSQL Studio</h1>
      </div>
    </div>
  );
}
