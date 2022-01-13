const GET_WITH_CRED = {
  method: "GET",
  withCredentials: true,
  credentials: "include",
};

const POST_WITH_CRED = (content_type) => {
  return {
    method: "POST",
    withCredentials: true,
    credentials: "include",
    headers: {
      "Content-Type": content_type,
    },
  };
};

module.exports.GET_WITH_CRED = GET_WITH_CRED;
module.exports.POST_WITH_CRED = POST_WITH_CRED;