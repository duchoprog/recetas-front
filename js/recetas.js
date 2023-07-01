const createRecipe = async (recipeParams) => {
  let returnable;
  await fetch("http://localhost:8000/openai-api", {
    //await fetch("http://localhost:8000/cohere", {
    method: "POST",
    body: JSON.stringify({
      lista: recipeParams,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      returnable = data;
    })
    .catch((err) => {
      console.log(err.message);
    });
  return returnable;
};
