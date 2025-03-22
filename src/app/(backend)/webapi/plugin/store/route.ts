import { NextResponse } from 'next/server';

export const runtime = 'edge';

export const GET = async () => {
  try {
    // Instead of fetching from an external URL that's returning HTML,
    // return a mock empty plugin store response
    const mockPluginStore = {
      plugins: [],
      timestamp: new Date().toISOString(),
      version: "1.0.0"
    };

    return NextResponse.json(mockPluginStore);
  } catch (e) {
    console.error(e);
    return new Response(`failed to fetch plugin store index`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      status: 500,
    });
  }
};
