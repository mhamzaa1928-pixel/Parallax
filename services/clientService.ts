import { supabase } from "@/lib/supabase";
import { Client, CreateClientInput } from "@/types/client";

export async function getClients(): Promise<Client[]> {
  const { data, error } = await supabase
    .from("clients")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return (data ?? []).map((row) => ({
    id: row.id,
    companyName: row.company_name,
    contactName: row.contact_name,
    email: row.email,
    phone: row.phone,
    country: row.country,
    status: row.status,
    createdAt: row.created_at,
  }));
}

export async function createClient(
  input: CreateClientInput
) {
  const { data, error } = await supabase
    .from("clients")
    .insert({
      company_name: input.companyName,
      contact_name: input.contactName,
      email: input.email,
      phone: input.phone,
      country: input.country,
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}