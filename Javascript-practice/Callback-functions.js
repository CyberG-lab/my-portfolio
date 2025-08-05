setTimeout(function () {
  console.log("Portfolio loaded! Ready to showcase your projects.");
}, 1000); // Runs after 1 second

setTimeout(() => {
  console.log("This message appears after 2 seconds!");
}, 2000);

const profile = {
  name: "Fabian Melea Developer",
  yellHi() {
    console.log(`HEY ${this.name.toUpperCase()}!`);
  }
};

setTimeout(profile.yellHi, 1500); // This won't work as expected!
setTimeout(() => profile.yellHi(), 1500); // This works correctly!