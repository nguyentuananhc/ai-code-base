import Request from "@models/request";

export const GET = async (request, { params }) => {
  // get the request id from the url
  const requestId = params.id;
  const filter = { requestId };
  const coverRequest = await Request.findOne(filter);
  // get query params from query string
  // const url = new URL(request.url);
  // const token = url.searchParams.get("token");

  try {
    const cover = await getCoverRequest({
      token: coverRequest.token,
      requestId,
    });
    return new Response(
      JSON.stringify({
        ...cover,
        data: { ...cover.data, songTitle: coverRequest.songTitle },
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(error, {
      status: 500,
    });
  }
};

async function getCoverRequest({ token, requestId }) {
  const response = await fetch(`${process.env.API_ENDPOINT}/api/get_result`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: new URLSearchParams({
      skip_encrypt_token: process.env.SKIP_ENCRYPT_TOKEN,
      token: token,
      request_id: requestId,
    }),
  });
  const jsonData = await response.json();
  return jsonData;
}

// export const GET = async (request, { params }) => {
//   try {
//     const cover = await getCoverRequest({
//       token: params?.token,
//       requestId: params.id,
//     });
//     return new Response(JSON.stringify(cover), { status: 200 });
//   } catch (error) {
//     return new Response("Failed to fetch request", {
//       status: 500,
//     });
//   }
// };
