const links = document.querySelectorAll(".filters a")
console.log({links})

links.forEach(item => item.addEventListener('click', (e) => filterProjects(e)))//filterProjects(e)))

function filterProjects(e) {
  // select all project divs
  const projects = document.querySelectorAll(".item");
  console.log({projects})
  // Get the value to filter by in the event target's data-filter attribute
  let filter = e.target.dataset.filter;
  console.log({filter})
  
 if (filter === '*') { 
  projects.forEach(project => project.classList.remove('hide'));
 } else {
   projects.forEach(project => { 
    //console.log(project.classList)
    //console.log(project.classList.contains(filter))
    project.classList.contains(filter)
    ? project.classList.remove('hide')
    : project.classList.add('hide')
   });
  }
}
