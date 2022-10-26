const getTokenFromAPI = async () => {
  try {
    const token = await fetch(
      'https://opentdb.com/api_token.php?command=request',
    );
    const tokenJson = await token.json();
    return tokenJson.token;
  } catch (err) {
    console.err(err);
  }
};

export default getTokenFromAPI;
