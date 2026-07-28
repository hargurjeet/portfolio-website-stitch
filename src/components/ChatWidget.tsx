"use client";

import dynamic from "next/dynamic";

const DynamicInnerChatWidget = dynamic(
  () => import("./InnerChatWidget"),
  { ssr: false }
);

export default function ChatWidget() {
  return <DynamicInnerChatWidget />;
}
