export const templates = [
    {
        id: "blank",
        label: "Blank Document",
        imageUrl: "/blank-document.svg",
        initialContent: ""
    },
    {
        id: "software-proposal",
        label: "Software development proposal",
        imageUrl: "/software-proposal.svg",
        initialContent: `
            <h1>Software Development Proposal</h1>
            <h2>Project Overview</h2>
            <p>We propose to develop a software solution that meets your business needs by leveraging modern technologies and agile development practices.</p>

            <h2>Objectives</h2>
            <ul>
            <li>Deliver a scalable, secure, and high-performing application.</li>
            <li>Meet deadlines with iterative milestones.</li>
            </ul>

            <h2>Technology Stack</h2>
            <ul>
            <li>Frontend: React, TypeScript</li>
            <li>Backend: Node.js, Express</li>
            <li>Database: PostgreSQL</li>
            </ul>

            <h2>Timeline</h2>
            <table>
            <tr><th>Milestone</th><th>Completion Date</th></tr>
            <tr><td>Planning</td><td>Week 1</td></tr>
            <tr><td>Development</td><td>Week 2–6</td></tr>
            <tr><td>Testing & Deployment</td><td>Week 7–8</td></tr>
            </table>

            <h2>Budget</h2>
            <p>Estimated cost: $XX,XXX</p>
            <p>Thank you for considering our proposal.</p>
    `
    },
    {
        id: "project-proposal",
        label: "Project proposal",
        imageUrl: "/project-proposal.svg",
        initialContent: `
            <h1>Project Proposal</h1>

            <h2>Title</h2>
            <p>Improving Operational Efficiency with Automation</p>

            <h2>Purpose</h2>
            <p>To propose the development of a system that automates repetitive tasks, reducing costs and improving productivity.</p>

            <h2>Scope</h2>
            <ul>
            <li>Research current workflows</li>
            <li>Identify automation opportunities</li>
            <li>Implement custom automation tools</li>
            </ul>

            <h2>Deliverables</h2>
            <ul>
            <li>Analysis report</li>
            <li>Automation scripts</li>
            <li>Final implementation report</li>
            </ul>

            <h2>Budget & Timeline</h2>
            <p>Estimated budget: $XX,XXX<br />Timeline: 3 months</p>

            <p>Submitted by: [Your Name]</p>
    `
    },
    {
        id: "business-letter",
        label: "Business letter",
        imageUrl: "/business-letter.svg",
        initialContent: `
            <p>[Your Company Name]<br>
            [Street Address]<br>
            [City, State ZIP Code]<br>
            [Email] | [Phone Number]</p>

            <br>

            <p>[Date]</p>

            <br>

            <p>[Recipient Name]<br>
            [Their Company Name]<br>
            [Street Address]<br>
            [City, State ZIP Code]</p>

            <br>

            <p>Dear [Recipient Name],</p>

            <p>We are writing to formally propose a potential partnership between our companies. We believe this collaboration can be mutually beneficial and contribute to the long-term growth of both organizations.</p>

            <p>Our team is confident that by working together, we can leverage our strengths to create value, reduce costs, and improve overall efficiency in the areas of shared interest.</p>

            <p>Please let us know a convenient time to discuss this opportunity further. We would be happy to provide more details and address any questions you may have.</p>

            <p>Thank you for considering this proposal. We look forward to your positive response.</p>

            <p>Sincerely,<br>
            [Your Name]<br>
            [Your Title]</p>
    `
    },
    {
        id: "resume",
        label: "Resume",
        imageUrl: "/resume.svg",
        initialContent: `
            <h1>John Doe</h1>
            <p><strong>Email:</strong> john.doe@example.com<br />
            <strong>Phone:</strong> (123) 456-7890<br />
            <strong>LinkedIn:</strong> linkedin.com/in/johndoe</p>

            <h2>Objective</h2>
            <p>Seeking a full-time software engineering role to contribute my coding and problem-solving skills to innovative projects.</p>

            <h2>Skills</h2>
            <ul>
            <li>JavaScript, TypeScript, Python</li>
            <li>React, Node.js, MongoDB</li>
            <li>Git, Docker, CI/CD</li>
            </ul>

            <h2>Experience</h2>
            <p><strong>Software Engineer</strong>, ABC Corp<br />
            <em>Jan 2022 – Present</em></p>
            <ul>
            <li>Developed scalable REST APIs</li>
            <li>Improved frontend performance by 40%</li>
            </ul>

            <h2>Education</h2>
            <p><strong>B.Tech in Computer Science</strong>, XYZ University<br />
            <em>2018 – 2022</em></p>
    `
    },
    {
        id: "cover-letter",
        label: "Cover letter",
        imageUrl: "/cover-letter.svg",
        initialContent: `
            <p>[Your Name]<br />
            [Your Address]<br />
            [Email] | [Phone]</p>

            <p>[Date]</p>

            <p>[Hiring Manager Name]<br />
            [Company Name]<br />
            [Company Address]</p>

            <p>Dear [Hiring Manager Name],</p>

            <p>I am excited to apply for the [Job Title] position at [Company Name]. With my background in [Your Background] and strong skills in [Your Key Skills], I am confident in my ability to contribute to your team's success.</p>

            <p>I would appreciate the opportunity to discuss my qualifications in further detail.</p>

            <p>Thank you for your time and consideration.</p>

            <p>Sincerely,<br />
            [Your Name]</p>
    `
    },
    {
        id: "letter",
        label: "Letter",
        imageUrl: "/letter.svg",
        initialContent: `
            <p>[Your Name]<br />
            [Your Address]<br />
            [City, State ZIP Code]<br />
            [Email] | [Phone Number]</p>

            <p>[Date]</p>

            <p>[Recipient Name]<br />
            [Recipient Address]<br />
            [City, State ZIP Code]</p>

            <p>Dear [Recipient Name],</p>

            <p>I hope this letter finds you well. I wanted to take a moment to write to you about [reason for writing]. Your support and friendship have meant a great deal to me.</p>

            <p>Looking forward to hearing from you soon.</p>

            <p>Warm regards,<br />
            [Your Name]</p>
    `
    }
];
