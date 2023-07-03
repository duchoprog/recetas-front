const createRecipe = async (recipeParams) => {
  let returnable;
  await fetch("https://recetas-back-pe-a3b73f302958.herokuapp.com/openai-api", {
    //await fetch("http://localhost:8000/openai-api", {
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
      console.log(data.completion);
      returnable = data.completion;
    })
    .catch((err) => {
      console.log(err.message);
    });
  return returnable;
};
