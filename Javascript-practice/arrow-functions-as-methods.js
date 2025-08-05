const project = {
  title: "JavaScript Portfolio",
  showDetails: () => {
    // 'this' does NOT refer to the project object here
    console.log(`Project: ${this.title}`);
  }
};

project.showDetails(); // Likely prints 'Project: undefined'

