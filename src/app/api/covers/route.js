async function createCoverRequest({ youtubeUrl, speakerId }) {
  const response = await fetch(
    `${process.env.API_ENDPOINT}/api/process_youtube`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: new URLSearchParams({
        skip_encrypt_token: process.env.SKIP_ENCRYPT_TOKEN,
        youtube_url: youtubeUrl,
        speaker_id: speakerId,
      }),
    }
  );
  const jsonData = await response.json();
  return jsonData;
}

export const POST = async (request) => {
  const { youtubeUrl, speakerId } = await request.json();
  try {
    const cover = await createCoverRequest({ youtubeUrl, speakerId });

    return new Response(JSON.stringify(cover), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all characters", { status: 500 });
  }
};
