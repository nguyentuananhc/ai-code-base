async function getListCharacters() {
  const response = await fetch(
    `${process.env.API_ENDPOINT}api/get_characters`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: new URLSearchParams({
        skip_encrypt_token: process.env.SKIP_ENCRYPT_TOKEN,
      }),
    }
  );
  const jsonData = await response.json();
  return jsonData;
}

export const GET = async (request) => {
  try {
    const characters = await getListCharacters();

    return new Response(JSON.stringify(characters), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all characters", { status: 500 });
  }
};
