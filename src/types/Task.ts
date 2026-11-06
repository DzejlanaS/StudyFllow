export type Task = {
  id: number;
  title: string;
  description: string;
  subject: string;
  dueDate: string;
  priority: "Low" | "Medium" | "High";
  completed: boolean;
  notes?: string;
};