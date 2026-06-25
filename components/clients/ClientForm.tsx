"use client";

import { useState } from "react";
import { Building2, Mail, Phone, Globe } from "lucide-react";
import { createClient } from "@/services/clientService";

export default function ClientForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    country: "",
  });

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    try {
      setLoading(true);

      await createClient(form);

      alert("Client created successfully.");

      setForm({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        country: "",
      });
    } catch (error) {
      console.error(error);
      alert("Unable to create client.");
    } finally {
      setLoading(false);
    }
  }

  function updateField(
    key: keyof typeof form,
    value: string
  ) {
    setForm((previous) => ({
      ...previous,
      [key]: value,
    }));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm"
    >
      <h2 className="text-3xl font-bold">
        Add Client
      </h2>

      <p className="mt-2 text-neutral-500">
        Create a new Amazon client.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Input
          icon={<Building2 size={18} />}
          placeholder="Company Name"
          value={form.companyName}
          onChange={(value) =>
            updateField("companyName", value)
          }
        />

        <Input
          icon={<Building2 size={18} />}
          placeholder="Contact Name"
          value={form.contactName}
          onChange={(value) =>
            updateField("contactName", value)
          }
        />

        <Input
          icon={<Mail size={18} />}
          placeholder="Email Address"
          value={form.email}
          onChange={(value) =>
            updateField("email", value)
          }
        />

        <Input
          icon={<Phone size={18} />}
          placeholder="Phone Number"
          value={form.phone}
          onChange={(value) =>
            updateField("phone", value)
          }
        />

        <Input
          icon={<Globe size={18} />}
          placeholder="Country"
          value={form.country}
          onChange={(value) =>
            updateField("country", value)
          }
        />
      </div>

      <button
        disabled={loading}
        className="mt-8 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Creating..." : "Create Client"}
      </button>
    </form>
  );
}

type InputProps = {
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

function Input({
  icon,
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 px-4 py-3">
      <div className="text-neutral-500">{icon}</div>

      <input
        className="w-full outline-none"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}