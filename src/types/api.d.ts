interface ApiResponse<T> {
  result: {
    code: number;
    message: string;
  };
  payload: T;
}

interface ApiError {
  title: string;
  message: string;
}