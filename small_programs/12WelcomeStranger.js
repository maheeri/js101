function greetings(arr, obj) {
  let fullName = arr.join(" ");
  return `Hello ${fullName}! Nice to have a ${obj.title} ${obj.occupation} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.