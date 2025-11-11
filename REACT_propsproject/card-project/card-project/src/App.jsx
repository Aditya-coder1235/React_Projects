import "./App.css";
import Card from "./card";

function App() {
    const jobOpenings = [
        {
            brandLogo: "https://logo.clearbit.com/google.com",
            companyName: "Google",
            datePosted: "5 days ago",
            post: "Software Engineer",
            tag1: "Full Time",
            tag2: "Junior Level",
            pay: "$75/hr",
            location: "Bangalore, India",
        },
        {
            brandLogo: "https://logo.clearbit.com/amazon.com",
            companyName: "Amazon",
            datePosted: "2 weeks ago",
            post: "Data Scientist",
            tag1: "Full Time",
            tag2: "Mid Level",
            pay: "$85/hr",
            location: "Hyderabad, India",
        },
        {
            brandLogo: "https://logo.clearbit.com/apple.com",
            companyName: "Apple",
            datePosted: "10 days ago",
            post: "iOS Developer",
            tag1: "Part Time",
            tag2: "Senior Level",
            pay: "$95/hr",
            location: "Cupertino, USA",
        },
        {
            brandLogo: "https://logo.clearbit.com/microsoft.com",
            companyName: "Microsoft",
            datePosted: "3 days ago",
            post: "Cloud Engineer",
            tag1: "Full Time",
            tag2: "Mid Level",
            pay: "$80/hr",
            location: "Seattle, USA",
        },
        {
            brandLogo: "https://logo.clearbit.com/meta.com",
            companyName: "Meta",
            datePosted: "1 week ago",
            post: "Frontend Developer",
            tag1: "Full Time",
            tag2: "Junior Level",
            pay: "$70/hr",
            location: "London, UK",
        },
        {
            brandLogo: "https://logo.clearbit.com/netflix.com",
            companyName: "Netflix",
            datePosted: "4 days ago",
            post: "Backend Engineer",
            tag1: "Contract",
            tag2: "Senior Level",
            pay: "$110/hr",
            location: "Los Gatos, USA",
        },
        {
            brandLogo: "https://logo.clearbit.com/tesla.com",
            companyName: "Tesla",
            datePosted: "6 weeks ago",
            post: "Machine Learning Engineer",
            tag1: "Full Time",
            tag2: "Senior Level",
            pay: "$120/hr",
            location: "Palo Alto, USA",
        },
        {
            brandLogo: "https://logo.clearbit.com/nvidia.com",
            companyName: "Nvidia",
            datePosted: "8 days ago",
            post: "AI Researcher",
            tag1: "Full Time",
            tag2: "Mid Level",
            pay: "$100/hr",
            location: "Santa Clara, USA",
        },
        {
            brandLogo: "https://logo.clearbit.com/adobe.com",
            companyName: "Adobe",
            datePosted: "2 weeks ago",
            post: "UI/UX Designer",
            tag1: "Part Time",
            tag2: "Junior Level",
            pay: "$60/hr",
            location: "New Delhi, India",
        },
        {
            brandLogo: "https://logo.clearbit.com/openai.com",
            companyName: "OpenAI",
            datePosted: "3 weeks ago",
            post: "Research Engineer",
            tag1: "Full Time",
            tag2: "Senior Level",
            pay: "$130/hr",
            location: "San Francisco, USA",
        },
    ];

    return (
        <div className="container">
            {jobOpenings.map((e, idx) => {
                return (
                    <div key={idx}>
                        <Card
                            company={e.companyName}
                            logo={e.brandLogo}
                            posted={e.datePosted}
                            post={e.post}
                            tag1={e.tag1}
                            tag2={e.tag2}
                            pay={e.pay}
                            location={e.location}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default App;
