export const getData = async (userId = "Shanmukha1217") => {
  const response = await fetch(`https://api.github.com/users/${userId}`);
  return response.json();
};
