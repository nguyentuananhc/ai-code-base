// import { getSession } from "$lib/session";
import { getServerSession } from "next-auth/next";
import User from "@models/user";

async function createCoverRequest(request) {
  const { youtubeUrl, speakerId } = request;

  // const session = await getSession({ request });
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
  const session = await getServerSession(request);
  const filter = { email: session.user.email };
  const sessionUser = await User.findOne(filter);
  const modelCost = 200;

  if (!sessionUser?.email) {
    return new Response("Please Login to create request", { status: 501 });
  }

  if (sessionUser.credit - modelCost < 1) {
    return new Response("Failed to create request", { status: 500 });
  }

  const { youtubeUrl, speakerId } = await request.json();
  try {
    const cover = await createCoverRequest({ youtubeUrl, speakerId });

    if (cover?.data?.request_id) {
      sessionUser.credit = Number(sessionUser.credit) - modelCost;
      await sessionUser.save();
    }
    return new Response(JSON.stringify(cover), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all characters", { status: 500 });
  }
};
