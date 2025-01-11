interface ApiResponse<T> {
  result: {
    code: number;
    message: string;
  };
  payload: T;
}
