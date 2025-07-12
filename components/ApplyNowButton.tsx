// components/ApplyNowButton.tsx
import React from "react";
import Link from "next/link";

interface ApplyNowButtonProps {
  href: string;
  text?: string;
}

const ApplyNowButton: React.FC<ApplyNowButtonProps> = ({
  href,
  text = "Apply Now",
}) => {
  return (
    <Link  className="inline-block px-6 py-3 text-white font-semibold rounded-xl shadow-md bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300" href={href}>
        {text}
    </Link>
  );
};

export default ApplyNowButton;
