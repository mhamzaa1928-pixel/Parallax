import { supabase } from "@/lib/supabase";

export interface ClientRow {
  id: string;
  company_name: string;
  contact_name: string;
  email: string;
  phone: string;
  country: string;
  status: string;
  created_at: string;
}

export async function findAllClients(): Promise<ClientRow[]> {
  const { data, error } = await supabase
    .from("clients")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw error;
  }

  return (data ?? []) as ClientRow[];
}

export async function insertClient(input: {
  company_name: string;
  contact_name: string;
  email: string;
  phone: string;
  country: string;
}) {
  const { data, error } = await supabase
    .from("clients")
    .insert(input)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data as ClientRow;
}

export async function deleteClient(id: string) {
  const { error } = await supabase
    .from("clients")
    .delete()
    .eq("id", id);

  if (error) {
    throw error;
  }
}