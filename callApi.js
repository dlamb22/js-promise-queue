const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function CallApi(url) {
  try {
    const response = await fetch(url);
    const data = response.json();
    await sleep(10000);
    return data;
  } catch (error) {
    console.error(error);
  }
}
