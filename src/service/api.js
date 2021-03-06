export const getAllBooks = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_SERVER}/books`);

  if (!response.ok) {
    throw new Error("Erro");
  }

  return response.json();
};
