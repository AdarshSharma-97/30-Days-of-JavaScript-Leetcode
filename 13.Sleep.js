//2621.Sleep
async function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("slow");
      console.log("slow promise is done");
    }, millis);
  });
}
