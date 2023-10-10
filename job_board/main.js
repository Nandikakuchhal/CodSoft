const jobs = [
    {
        title: "Title",
        image: "https://img.favpng.com/21/1/18/web-development-computer-icons-icon-design-png-favpng-xwSFznQB5gYcBFxuxhKX1u6dK.jpg",
        details:
        "Responsible for designing, developing and maintaing Software systems and applications.",
        openPosition: "2",
        link: "#",
    },
    {
     
        title: "Title",
        image: "https://img.favpng.com/21/1/18/web-development-computer-icons-icon-design-png-favpng-xwSFznQB5gYcBFxuxhKX1u6dK.jpg",
        details:
        "Responsible for designing, developing and maintaing Software systems and applications.",
        openPosition: "3",
        link: "#",
    },
    {
        
        title: "Title",
        image: "https://img.favpng.com/21/1/18/web-development-computer-icons-icon-design-png-favpng-xwSFznQB5gYcBFxuxhKX1u6dK.jpg",
        details:
        "Responsible for designing, developing and maintaing Software systems and applications.",
        openPosition: "4",
        link: "#",
    },
    {
        
        title: "Title",
        image: "https://img.favpng.com/21/1/18/web-development-computer-icons-icon-design-png-favpng-xwSFznQB5gYcBFxuxhKX1u6dK.jpg",
        details:
        "Responsible for designing, developing and maintaing Software systems and applications.",
        openPosition: "2",
        link: "#",
    },
    {
        
        title: "Title",
        image: "https://img.favpng.com/21/1/18/web-development-computer-icons-icon-design-png-favpng-xwSFznQB5gYcBFxuxhKX1u6dK.jpg",
        details:
        "Responsible for designing, developing and maintaing Software systems and applications.",
        openPosition: "1",
        link: "#",
    },
    
];
const jobHeading = document.querySelector(".jobs-list-container h2");

const jobsHeading = document.querySelector(".jobs-list-container .jobs");
const jobSearch = document.querySelector(".jobs-list-container .job-search");
if (jobs.length == 1 ){
   jobHeading.innerHTML = `${jobs.length} job`;
} else {
    jobHeading.innerHTML = `${jobs.length} jobs`;
    jobs.forEach(job => {
        jobcontainer.innerHTML = "";
        if (job.title.toLowerCase().includes(searchTerm.toLowerCase())){
        let jobcard = document.createElement("div");
        jobcard.classList.add("job");
        let image = document.createElement("img");
        image.scr =job.image;

        let title = document.createElement("h3");
        title.innerHTML = job.title;
        title.classList.add("job-title");
     let details = document.createElement("div");
     details.innerHTML = job.details;
     details.classList.add("details");

      let detailsbtn = document.createElement("a");
      detailsbtn.href = job.link;
      detailsbtn.innerHTML = "More Details";
      detailsbtn.classList.add("details-btn");

     let openPosition = document.createElement("span");
     openPosition.classList.ass("open-positions");

     if (job.openPosition == 1) {
        openPosition.innerHTML = `${job.openPositions} open position`;

     }else {
        openPosition.innerHTML = `${job.openPositions} open positions`;
     }
       jobcard.appendChild(image);
       jobcard.appendChild(title);
       jobcard.appendChild(details);
       jobcard.appendChild(detailsbtn);
       jobcard.appendChild(openPosition);

       jobContainer.appendChild(jobcard);
    }
    });
};
createJobListingCard();
jobSearch.addEventListener("input", (e) => {
    searchTerm = e.target.value;

    createJobListingCard();

});

