import type { SVGProps } from "react";

import WhatsAppIcon from "@/components/WhatsAppIcon";

type SocialIconProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
};

type SocialLink = {
  label: string;
  href: string;
  icon: (props: SocialIconProps) => JSX.Element;
  className: string;
  event?: string;
};

const FacebookIcon = ({ size = 20, ...props }: SocialIconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false" {...props}>
    <path
      fill="currentColor"
      d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.438H7.078v-3.49h3.047V9.414c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.971H15.83c-1.49 0-1.955.93-1.955 1.886v2.263h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z"
    />
  </svg>
);

const InstagramIcon = ({ size = 20, ...props }: SocialIconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false" {...props}>
    <defs>
      <linearGradient id="instagram-gradient" x1="4" x2="20" y1="20" y2="4" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F58529" />
        <stop offset="0.35" stopColor="#DD2A7B" />
        <stop offset="0.7" stopColor="#8134AF" />
        <stop offset="1" stopColor="#515BD4" />
      </linearGradient>
    </defs>
    <path
      fill="url(#instagram-gradient)"
      d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.6a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
    />
  </svg>
);

const LinkedInIcon = ({ size = 20, ...props }: SocialIconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false" {...props}>
    <path
      fill="currentColor"
      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.047c.477-.9 1.637-1.85 3.37-1.85 3.602 0 4.267 2.371 4.267 5.455v6.286h-.002ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.552V9h3.567v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"
    />
  </svg>
);

const YouTubeIcon = ({ size = 22, ...props }: SocialIconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false" {...props}>
    <path
      fill="currentColor"
      d="M23.499 6.203a3.006 3.006 0 0 0-2.116-2.128C19.515 3.57 12 3.57 12 3.57s-7.515 0-9.383.505A3.006 3.006 0 0 0 .501 6.203C0 8.084 0 12 0 12s0 3.916.501 5.797a3.006 3.006 0 0 0 2.116 2.128C4.485 20.43 12 20.43 12 20.43s7.515 0 9.383-.505a3.006 3.006 0 0 0 2.116-2.128C24 15.916 24 12 24 12s0-3.916-.501-5.797ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z"
    />
  </svg>
);

const GoogleBusinessIcon = ({ size = 20, ...props }: SocialIconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false" {...props}>
    <path fill="#4285F4" d="M21.6 12.227c0-.709-.064-1.39-.182-2.045H12v3.868h5.382a4.6 4.6 0 0 1-1.995 3.018v2.51h3.232c1.89-1.741 2.981-4.305 2.981-7.351Z" />
    <path fill="#34A853" d="M12 22c2.7 0 4.964-.895 6.619-2.423l-3.232-2.509c-.895.6-2.04.955-3.387.955-2.605 0-4.81-1.759-5.596-4.123H3.064v2.59A9.997 9.997 0 0 0 12 22Z" />
    <path fill="#FBBC05" d="M6.404 13.9A6.009 6.009 0 0 1 6.091 12c0-.659.114-1.3.313-1.9V7.51h-3.34A9.997 9.997 0 0 0 2 12c0 1.614.386 3.14 1.064 4.49l3.34-2.59Z" />
    <path fill="#EA4335" d="M12 5.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C16.96 2.99 14.695 2 12 2a9.997 9.997 0 0 0-8.936 5.51l3.34 2.59C7.19 7.736 9.395 5.977 12 5.977Z" />
  </svg>
);

const BlogspotIcon = ({ size = 20, ...props }: SocialIconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false" {...props}>
    <path
      fill="currentColor"
      d="M19.94 10.15h-.93c-.53 0-.96-.43-.96-.96A5.19 5.19 0 0 0 12.86 4H7.69A5.69 5.69 0 0 0 2 9.69v4.62A5.69 5.69 0 0 0 7.69 20h8.62A5.69 5.69 0 0 0 22 14.31v-2.16c0-1.1-.9-2-2.06-2ZM7.6 8h5.02a1.25 1.25 0 1 1 0 2.5H7.6A1.25 1.25 0 1 1 7.6 8Zm8.75 8H7.6a1.25 1.25 0 1 1 0-2.5h8.75a1.25 1.25 0 1 1 0 2.5Z"
    />
  </svg>
);

const GovUkIcon = ({ size = 30, ...props }: SocialIconProps) => (
  <svg viewBox="0 0 42 24" width={size} height={size} aria-hidden="true" focusable="false" {...props}>
    <path
      fill="currentColor"
      d="M7.09 2.08 12 0l4.91 2.08-.73 6.12H7.82l-.73-6.12Zm2.18 1.55.32 2.65h4.82l.32-2.65L12 2.48 9.27 3.63ZM5.6 9.48h12.8v2H5.6v-2Zm.9 3.08h11v7.42H15.7v-5.62h-2.5v5.62h-2.4v-5.62H8.3v5.62H6.5v-7.42Zm14.72.16c0-3.4 2.36-5.4 5.17-5.4 1.51 0 2.55.5 3.23 1.1l-1.29 1.62c-.5-.42-1.02-.64-1.83-.64-1.58 0-2.78 1.22-2.78 3.24 0 2.08.98 3.28 2.96 3.28.43 0 .87-.1 1.12-.31v-1.67h-1.75v-2.02h3.96v4.82c-.76.73-2.08 1.28-3.6 1.28-2.94 0-5.19-1.82-5.19-5.3Zm10.44-5.16h2.38v5.76c0 1.9.61 2.6 1.77 2.6 1.17 0 1.82-.7 1.82-2.6V7.56H40v5.5c0 3.4-1.36 4.96-4.19 4.96-2.82 0-4.15-1.56-4.15-4.96v-5.5Z"
    />
  </svg>
);

const socialLinks: SocialLink[] = [
  {
    label: "WhatsApp",
    href: "https://wa.me/447424822813",
    icon: WhatsAppIcon,
    className: "text-[#25D366] hover:border-[#25D366]/50 hover:bg-[#25D366]/10",
    event: "whatsapp_click",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/talentpull.uk.marketing",
    icon: FacebookIcon,
    className: "text-[#1877F2] hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/talentpull_marketing_agency",
    icon: InstagramIcon,
    className: "hover:border-[#DD2A7B]/50 hover:bg-[#DD2A7B]/10",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/talentpull-uk/",
    icon: LinkedInIcon,
    className: "text-[#0A66C2] hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10",
  },
  {
    label: "Google Business Profile",
    href: "https://share.google/tg4O0yuAGcAE37jHo",
    icon: GoogleBusinessIcon,
    className: "hover:border-[#4285F4]/50 hover:bg-white/[0.06]",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@talentpullmarketingagencyuk",
    icon: YouTubeIcon,
    className: "text-[#FF0000] hover:border-[#FF0000]/50 hover:bg-[#FF0000]/10",
  },
  {
    label: "Blogspot",
    href: "https://talentpull-uk.blogspot.com/",
    icon: BlogspotIcon,
    className: "text-[#F57D00] hover:border-[#F57D00]/50 hover:bg-[#F57D00]/10",
  },
  {
    label: "GOV.UK Companies House",
    href: "https://find-and-update.company-information.service.gov.uk/company/16624016",
    icon: GovUkIcon,
    className: "text-white hover:border-white/40 hover:bg-white/[0.08]",
  },
];

const SocialLinks = () => (
  <div className="flex flex-wrap gap-2.5" aria-label="Talentpull social links">
    {socialLinks.map(({ label, href, icon: Icon, className, event = "social_click" }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        data-track-event={event}
        data-track-label={label}
        data-track-location="footer"
        className={`flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-accent/90 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/45 sm:h-11 sm:w-11 ${className}`}
      >
        <Icon />
      </a>
    ))}
  </div>
);

export default SocialLinks;
