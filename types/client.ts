export interface Client {
  id: string;

  companyName: string;

  contactName: string;

  email: string;

  phone: string;

  country: string;

  status: "active" | "inactive";

  createdAt: string;
}

export interface CreateClientInput {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  country: string;
}