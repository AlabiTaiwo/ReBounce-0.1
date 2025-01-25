menuBar = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="tabler-icon tabler-icon-menu-3 "
  >
    <path d="M10 6h10"></path>
    <path d="M4 12h16"></path>
    <path d="M7 12h13"></path>
    <path d="M4 18h10"></path>
  </svg>
);

barCode = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="tabler-icon tabler-icon-barcode "
  >
    <path d="M4 7v-1a2 2 0 0 1 2 -2h2"></path>
    <path d="M4 17v1a2 2 0 0 0 2 2h2"></path>
    <path d="M16 4h2a2 2 0 0 1 2 2v1"></path>
    <path d="M16 20h2a2 2 0 0 0 2 -2v-1"></path>
    <path d="M5 11h1v2h-1z"></path>
    <path d="M10 11l0 2"></path>
    <path d="M14 11h1v2h-1z"></path>
    <path d="M19 11l0 2"></path>
  </svg>
);

CloseBar = (
  <svg
    className="h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    viewBox="0 0 24 24"
    stroke="white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

Location = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="23"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="tabler-icon tabler-icon-location-down "
  >
    <path d="M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.328 9.217"></path>
    <path d="M19 16v6"></path>
    <path d="M22 19l-3 3l-3 -3"></path>
  </svg>
);

menubar =
  (
    <svg
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      viewBox="0 0 24 24"
      stroke="white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ) /
  (
    <svg
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      viewBox="0 0 24 24"
      stroke="white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  );

SignIn = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="black dark:white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="tabler-icon tabler-icon-login-2 "
  >
    <path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2"></path>
    <path d="M3 12h13l-3 -3"></path>
    <path d="M13 15l3 -3"></path>
  </svg>
);

FirstName = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`${
      isValid
        ? "dark:stroke-[rgba(81,247,66,0.12)] stroke-[rgba(81,247,66,0.12)]"
        : "dark:stroke-[rgba(255_255_255/0.121)] stroke-black"
    }tabler-icon tabler-icon-id `}
  >
    <path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path>
    <path d="M9 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
    <path d="M15 8l2 0"></path>
    <path d="M15 12l2 0"></path>
    <path d="M7 16l10 0"></path>
  </svg>
);

LastName = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`${
      isValid
        ? "dark:stroke-[rgba(81,247,66,0.12)] stroke-[rgba(81,247,66,0.12)]"
        : "dark:stroke-[rgba(255_255_255/0.121)] stroke-black"
    } tabler-icon tabler-icon-id `}
  >
    <path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path>
    <path d="M9 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
    <path d="M15 8l2 0"></path>
    <path d="M15 12l2 0"></path>
    <path d="M7 16l10 0"></path>
  </svg>
);

ProfileName = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`${
      isValid
        ? "dark:stroke-[rgba(81,247,66,0.12)] stroke-[rgba(81,247,66,0.12)]"
        : "dark:stroke-[rgba(255_255_255/0.121)] stroke-black"
    } tabler-icon tabler-icon-id-badge-2 `}
  >
    <path d="M7 12h3v4h-3z"></path>
    <path d="M10 6h-6a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1 -1v-12a1 1 0 0 0 -1 -1h-6"></path>
    <path d="M10 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>
    <path d="M14 16h2"></path>
    <path d="M14 12h4"></path>
  </svg>
);

Email = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`${
      isValid
        ? "dark:stroke-[rgba(81,247,66,0.12)] stroke-[rgba(81,247,66,0.12)]"
        : "dark:stroke-[rgba(255_255_255/0.121)] stroke-black"
    } tabler-icon tabler-icon-mail-opened `}
  >
    <path d="M3 9l9 6l9 -6l-9 -6l-9 6"></path>
    <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"></path>
    <path d="M3 19l6 -6"></path>
    <path d="M15 13l6 6"></path>
  </svg>
);

Phone = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="white"
    stroke="none"
    className={`${
      isValid
        ? "dark:stroke-[rgba(81,247,66,0.12)] stroke-[rgba(81,247,66,0.12)]"
        : "dark:stroke-[rgba(255_255_255/0.121)] stroke-black"
    } tabler-icon tabler-icon-phone-filled `}
  >
    <path d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z"></path>
  </svg>
);

Age = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`${
      isValid
        ? "dark:stroke-[rgba(81,247,66,0.12)] stroke-[rgba(81,247,66,0.12)]"
        : "dark:stroke-[rgba(255_255_255/0.121)] stroke-black"
    } tabler-icon tabler-icon-calendar-check `}
  >
    <path d="M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"></path>
    <path d="M16 3v4"></path>
    <path d="M8 3v4"></path>
    <path d="M4 11h16"></path>
    <path d="M15 19l2 2l4 -4"></path>
  </svg>
);

Password = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`${
      isValid
        ? "dark:stroke-[rgba(81,247,66,0.12)] stroke-[rgba(81,247,66,0.12)]"
        : "dark:stroke-[rgba(255_255_255/0.121)] stroke-black"
    } tabler-icon tabler-icon-lock-code `}
  >
    <path d="M11.5 21h-4.5a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2"></path>
    <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
    <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
    <path d="M20 21l2 -2l-2 -2"></path>
    <path d="M17 17l-2 2l2 2"></path>
  </svg>
);

TagAndcategories = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="tabler-icon tabler-icon-tag "
  >
    <path d="M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
    <path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z"></path>
  </svg>
);

Location = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="white"
    stroke="none"
    class="tabler-icon tabler-icon-location-filled "
  >
    <path d="M20.891 2.006l.106 -.006l.13 .008l.09 .016l.123 .035l.107 .046l.1 .057l.09 .067l.082 .075l.052 .059l.082 .116l.052 .096c.047 .1 .077 .206 .09 .316l.005 .106c0 .075 -.008 .149 -.024 .22l-.035 .123l-6.532 18.077a1.55 1.55 0 0 1 -1.409 .903a1.547 1.547 0 0 1 -1.329 -.747l-.065 -.127l-3.352 -6.702l-6.67 -3.336a1.55 1.55 0 0 1 -.898 -1.259l-.006 -.149c0 -.56 .301 -1.072 .841 -1.37l.14 -.07l18.017 -6.506l.106 -.03l.108 -.018z"></path>
  </svg>
);

AgeRating18plus = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="tabler-icon tabler-icon-rating-18-plus "
  >
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
    <path d="M11.5 10.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"></path>
    <path d="M11.5 13.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"></path>
    <path d="M7 15v-6"></path>
    <path d="M15.5 12h3"></path>
    <path d="M17 10.5v3"></path>
  </svg>
);

AgeRating12Plus = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="tabler-icon tabler-icon-rating-12-plus "
  >
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
    <path d="M7 15v-6"></path>
    <path d="M15.5 12h3"></path>
    <path d="M17 10.5v3"></path>
    <path d="M10 10.5a1.5 1.5 0 0 1 3 0c0 .443 -.313 .989 -.612 1.393l-2.388 3.107h3"></path>
  </svg>
);

AgeRating14Plus = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="tabler-icon tabler-icon-rating-14-plus "
  >
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
    <path d="M7 15v-6"></path>
    <path d="M15.5 12h3"></path>
    <path d="M17 10.5v3"></path>
    <path d="M12.5 15v-6m-2.5 0v4h3"></path>
  </svg>
);

AgeRating16Plus = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="tabler-icon tabler-icon-rating-16-plus "
  >
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
    <path d="M11.5 13.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"></path>
    <path d="M7 15v-6"></path>
    <path d="M15.5 12h3"></path>
    <path d="M17 10.5v3"></path>
    <path d="M10 13.5v-3a1.5 1.5 0 0 1 1.5 -1.5h1"></path>
  </svg>
);

AgeRating21Plus = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="tabler-icon tabler-icon-rating-21-plus "
  >
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
    <path d="M13 15v-6"></path>
    <path d="M15.5 12h3"></path>
    <path d="M17 10.5v3"></path>
    <path d="M7 10.5a1.5 1.5 0 0 1 3 0c0 .443 -.313 .989 -.612 1.393l-2.388 3.107h3"></path>
  </svg>
);

TicketRefund = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="tabler-icon tabler-icon-receipt-refund "
  >
    <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"></path>
    <path d="M15 14v-2a2 2 0 0 0 -2 -2h-4l2 -2m0 4l-2 -2"></path>
  </svg>
);

ArrowLeft = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="tabler-icon tabler-icon-caret-left "
  >
    <path d="M14 6l-6 6l6 6v-12"></path>
  </svg>
);
