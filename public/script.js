const links = document.querySelectorAll(".filters a")

links.forEach(item => item.addEventListener('click', (e) => filterProjects(e)))

function filterProjects(e) {
  // select all project divs
  const projects = document.querySelectorAll(".item");

  // Get the value to filter by in the event target's data-filter attribute
  let filter = e.target.dataset.filter;
  if (filter === '*') { 
    projects.forEach(project => project.classList.remove('hide'));
 } else {
    projects.forEach(project => { 
      project.classList.contains(filter)
      ? project.classList.remove('hide')
      : project.classList.add('hide')
   });
  }
}
