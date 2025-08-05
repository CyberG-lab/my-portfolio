const project = {
  title: "JavaScript Portfolio",
  showDetails: function () {
    console.log(`Project: ${this.title}`);
    return `Project: ${this.title}`;
  }
};

// Call the method
documentation
project.showDetails();