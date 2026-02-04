interface Env {}

interface ErrorPayload {
  message: string;
  stack?: string;
  status?: number;
  statusText?: string;
  url?: string;
  formData?: Record<string, unknown>;
  timestamp: string;
  userAgent?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const payload: ErrorPayload = await context.request.json();

    console.error('[FORM_SUBMISSION_ERROR]', JSON.stringify({
      timestamp: payload.timestamp,
      message: payload.message,
      stack: payload.stack,
      status: payload.status,
      statusText: payload.statusText,
      url: payload.url,
      formData: payload.formData,
      userAgent: payload.userAgent,
    }, null, 2));

    return new Response(JSON.stringify({ logged: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (err) {
    console.error('[LOG_ERROR_ENDPOINT_FAILURE]', err);
    return new Response(JSON.stringify({ logged: false }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
};

export const onRequestOptions: PagesFunction<Env> = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
