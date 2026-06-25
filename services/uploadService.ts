import { supabase } from "@/lib/supabase";

export async function uploadAmazonReport(
  file: File,
  clientId: string,
  amazonAccountId: string
) {
  const filePath = `${clientId}/${Date.now()}-${file.name}`;

  const { error: storageError } = await supabase.storage
    .from("amazon-reports")
    .upload(filePath, file);

  if (storageError) {
    throw new Error(storageError.message);
  }

  const { data, error } = await supabase
    .from("upload_files")
    .insert({
      session_id: null,
      file_name: file.name,
      report_type: "unknown",
      storage_path: filePath,
      size: file.size,
      status: "uploaded",
    })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}