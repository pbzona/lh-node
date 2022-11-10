const isRunningInReplit = () => {
  // Detects whether running this server in replit
  return !!(process.env.REPL_OWNER && process.env.REPL_SLUG);
};

exports.getServerURL = (port) => {
  if (isRunningInReplit()) {
    return `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`;
  }

  return `http://localhost:${port}`;
};