"use client";

import { useEffect, useState } from "react";
import { Plus, Search } from "lucide-react";
import ClientForm from "@/components/clients/ClientForm";
import { getClients } from "@/services/clientService";
import { Client } from "@/types/client";

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadClients();
  }, []);

  async function loadClients() {
    try {
      setLoading(true);

      const data = await getClients();

      setClients(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const filteredClients = clients.filter((client) =>
    [
      client.companyName,
      client.contactName,
      client.email,
      client.country,
    ]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">
            Clients
          </h1>

          <p className="mt-2 text-neutral-500">
            Manage all Amazon clients.
          </p>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white"
        >
          <Plus size={18} />

          Add Client
        </button>
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3">
        <Search
          size={18}
          className="text-neutral-500"
        />

        <input
          className="w-full outline-none"
          placeholder="Search clients..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      {showForm && <ClientForm />}

      <div className="overflow-hidden rounded-[30px] border border-neutral-200 bg-white">
        <table className="w-full">
          <thead className="bg-neutral-50">
            <tr>
              <th className="px-6 py-4 text-left">
                Company
              </th>

              <th className="px-6 py-4 text-left">
                Contact
              </th>

              <th className="px-6 py-4 text-left">
                Country
              </th>

              <th className="px-6 py-4 text-left">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={4}
                  className="p-8 text-center"
                >
                  Loading...
                </td>
              </tr>
            ) : filteredClients.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="p-8 text-center text-neutral-500"
                >
                  No clients found.
                </td>
              </tr>
            ) : (
              filteredClients.map((client) => (
                <tr
                  key={client.id}
                  className="border-t border-neutral-100 hover:bg-neutral-50"
                >
                  <td className="px-6 py-5 font-semibold">
                    {client.companyName}
                  </td>

                  <td className="px-6 py-5">
                    {client.contactName}
                  </td>

                  <td className="px-6 py-5">
                    {client.country}
                  </td>

                  <td className="px-6 py-5">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                      {client.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}