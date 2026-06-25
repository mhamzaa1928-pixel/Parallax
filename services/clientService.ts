import {
  findAllClients,
  insertClient,
} from "@/repositories/clientRepository";
import { Client, CreateClientInput } from "@/types/client";

export async function getClients(): Promise<Client[]> {
  const rows = await findAllClients();

  return rows.map((row) => ({
    id: row.id,
    companyName: row.company_name,
    contactName: row.contact_name,
    email: row.email,
    phone: row.phone,
    country: row.country,
    status: row.status as "active" | "inactive",
    createdAt: row.created_at,
  }));
}

export async function createClient(input: CreateClientInput): Promise<Client> {
  const row = await insertClient({
    company_name: input.companyName,
    contact_name: input.contactName,
    email: input.email,
    phone: input.phone,
    country: input.country,
  });

  return {
    id: row.id,
    companyName: row.company_name,
    contactName: row.contact_name,
    email: row.email,
    phone: row.phone,
    country: row.country,
    status: row.status as "active" | "inactive",
    createdAt: row.created_at,
  };
}