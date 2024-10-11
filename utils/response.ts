interface Response<T> {
  code: number;
  msg?: string;
  data?: T;
}
export function successResponse<T = unknown>(data: T): Response<T> {
  return {
    code: 0,
    msg: 'ok',
    data,
  };
}

export function badRequest(msg?: string): Response<string> {
  return {
    code: 1001,
    msg,
    data: '',
  };
}
