"use client";

import useAlert from "@/hooks/useAlert";
import useAuth from "@/hooks/useAuth";

export default function Options() {
  useAlert();
  useAuth();

  return <></>;
}
