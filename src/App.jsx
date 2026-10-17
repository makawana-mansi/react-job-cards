
import Card from './Componets/Card'


const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://www.google.com/favicon.ico",
      name: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://www.microsoft.com/favicon.ico",
      name: "Microsoft",
      datePosted: "2 days ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$55/hour",
      location: "Bengaluru, India"
    },
    {
      brandLogo: "https://www.amazon.com/favicon.ico",
      name: "Amazon",
      datePosted: "1 week ago",
      post: "Web Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$35/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
      name: "Meta",
      datePosted: "3 days ago",
      post: "UI Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$60/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://www.apple.com/favicon.ico",
      name: "Apple",
      datePosted: "10 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$50/hour",
      location: "Bengaluru, India"
    },
    {
      brandLogo: "https://www.netflix.com/favicon.ico",
      name: "Netflix",
      datePosted: "2 weeks ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hour",
      location: "Remote, India"
    },
    {
      brandLogo: "https://www.ibm.com/favicon.ico",
      name: "IBM",
      datePosted: "4 days ago",
      post: "Backend Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$40/hour",
      location: "Pune, India"
    },
    {
      brandLogo: "https://www.oracle.com/favicon.ico",
      name: "Oracle",
      datePosted: "5 weeks ago",
      post: "Database Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$42/hour",
      location: "Ahmedabad, India"
    },
    {
      brandLogo: "https://www.adobe.com/favicon.ico",
      name: "Adobe",
      datePosted: "8 days ago",
      post: "UI/UX Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$48/hour",
      location: "Noida, India"
    },
    {
      brandLogo: "https://www.nvidia.com/favicon.ico",
      name: "NVIDIA",
      datePosted: "10 weeks ago",
      post: "AI Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hour",
      location: "Gurugram, India"
    }
  ];
  return (
    <div className="parent">
      {jobOpenings.map(function (i, index) {
        return <div key={index}>
          <Card Cname={i.name} post={i.post} datePosted={i.datePosted} tag1={i.tag1} tag2={i.tag2} pay={i.pay} brandLogo={i.brandLogo} />
        </div>
      })}
    </div>
  )

}


export default App