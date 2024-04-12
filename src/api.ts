// src/api.ts

const baseURL = import.meta.env.VITE_BASE_URL as string;

export async function fetchData() {
  try {
    const response = await fetch(`${baseURL}/data`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

