
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/health") {
      return Response.json({
        ok: true,
        message: "COROS Running Coach API aktif"
      });
    }

    if (url.pathname === "/api/ai-coach") {
      return Response.json(
        {
          error: "AI endpoint belum terhubung ke handler"
        },
        { status: 501 }
      );
    }

    return new Response(
      "Endpoint tidak ditemukan",
      { status: 404 }
    );
  }
};
