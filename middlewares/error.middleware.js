// this middle ware use to format response so use on the app it self

const errorMiddleware = (req, res, error, next) => {
  try {
    // check for needed error and make massage you need to add
    let error = { ...err };

    // Check for errors
    if (error.name === 'CastError') {
      const message = 'Resource not found';
      error = new Error(message);
      error.statusCode = 404;
    }

    // Mongoose duplicate key
    if (err.code === 11000) {
      const message = 'Duplicate field value entered';
      error = new Error(message);
      error.statusCode = 400;
    }

    // Mongoose validation error
    if (err.name === 'ValidationError') {
      const message = Object.values(err.errors).map((val) => val.message);
      error = new Error(message.join(', '));
      error.statusCode = 400;
    }

    res
      .status(error.statusCode || 500)
      .json({ success: false, error: error.message || 'Server Error' });
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;
