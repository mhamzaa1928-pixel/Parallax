export type UploadStatus =
  | "idle"
  | "uploading"
  | "processing"
  | "completed"
  | "failed";

export interface UploadFile {
  id: string;
  name: string;
  size: number;
  type: string;
  progress: number;
  status: UploadStatus;
}