const getChecksum = (file) => {
  // Get the checksum of a file for comparison against prev version
}

const getChecksumDir = (dir) => {
  // Get the checksum of a directory for comparison against prev version
}

const checkSdkKeyFormat = (sdkKey) => {
  const format = /^sdk-[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
  return format.test(sdkKey);
}