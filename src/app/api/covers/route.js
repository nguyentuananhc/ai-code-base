// import { getSession } from "$lib/session";
import { getServerSession } from "next-auth/next";
import User from "@models/user";
import Request from "@models/request";

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
    return new Response(
      JSON.stringify({
        error_code: "100",
        error_message: "Please Login to create request",
      }),
      {
        status: 200,
      }
    );
  }

  if (sessionUser.credit - modelCost < 1) {
    return new Response(
      JSON.stringify({
        error_code: "100",
        error_message: "Not enough credits to hand out request",
      }),
      {
        status: 200,
      }
    );
  }

  const { youtubeUrl, speakerId } = await request.json();
  try {
    const cover = await createCoverRequest({ youtubeUrl, speakerId });

    if (cover?.data?.request_id) {
      sessionUser.credit = Number(sessionUser.credit) - modelCost;
      await sessionUser.save();
      // save request
      const newRequest = new Request({
        requestId: cover.data.request_id,
        token: cover.data.token,
        creator: sessionUser._id,
        songTitle: cover.data.song_title,
      });
      await newRequest.save();
    }
    return new Response(JSON.stringify(cover), { status: 200 });
  } catch (error) {
    return new Response("Failed to create request", { status: 500 });
  }
};

export const GET = async (request) => {
  try {
    const session = await getServerSession(request);
    const filter = { email: session.user.email };
    const sessionUser = await User.findOne(filter);
    const listRequest = await Request.find({ creator: sessionUser._id });
    return new Response(JSON.stringify(listRequest), { status: 200 });
  } catch (error) {
    return new Response("Failed to create request", { status: 500 });
  }
};
