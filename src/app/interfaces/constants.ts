export interface Constants {
  albums: string;
  comments: string;
  errorMessages: ErrorMessages,
  photos: string;
  posts: string;
  todos: string;
  url: string;
  users: string;
}

interface ErrorMessages {
  default: string;
  form: FormErrors;
}

interface FormErrors {
  default: string;
  email: string;
  name: string;
  password: string;
}