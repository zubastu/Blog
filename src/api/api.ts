export const api = () => {
  const checkPromise = (promise: Promise<Response>) =>
    promise.then((res) => (res.ok ? res.json() : Promise.reject(res)));

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json: charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  };

  const fetchGet = (url: string) => {
    const promise = fetch(url, {
      method: 'GET',
      headers,
    });
    return checkPromise(promise);
  };

  return {
    fetchGet,
  };
};
