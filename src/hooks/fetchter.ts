export const fetchData = async (endpoint: string) => {
  const res = await fetch(endpoint, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res?.json();
  return data;
};
