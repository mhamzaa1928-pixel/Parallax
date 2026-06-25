"use client";

import { Trash2 } from "lucide-react";
import { deleteClient } from "@/repositories/clientRepository";

type DeleteClientDialogProps = {
  clientId: string;
  companyName: string;
  onDeleted: () => void;
};

export default function DeleteClientDialog({
  clientId,
  companyName,
  onDeleted,
}: DeleteClientDialogProps) {
  async function handleDelete() {
    const confirmed = window.confirm(
      `Delete "${companyName}"?\n\nThis action cannot be undone.`
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteClient(clientId);

      onDeleted();

      alert("Client deleted successfully.");
    } catch (error) {
      console.error(error);

      alert("Unable to delete client.");
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="flex items-center gap-2 rounded-xl border border-red-200 px-3 py-2 text-red-600 transition hover:bg-red-50"
    >
      <Trash2 size={16} />

      Delete
    </button>
  );
}