import createHttpError from 'http-errors';

export const errorHandler = (err, _req, res, _next) => {
  if (createHttpError.isHttpError(err)) {
    res.status(err.statusCode).json({
      message: err.message,
    });

    return;
  }

  res.status(500).json({
    message: 'Something went wrong',
  });
};
