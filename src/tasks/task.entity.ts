export class Task {
  id:                 string;
  name_task:          string;
  deadline:           string;
  date_completed?:     string;
  state:              boolean;
  associated_persons: AssociatedPerson[];
}

export interface AssociatedPerson {
  full_name: string;
  age:       number;
  skills:    string[];
}


