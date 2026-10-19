// Revised portfolio datajs
/**
 * Portfolio project content. Review all [REVIEW: ...] fields before publishing.
 * First-person summaries are editorial drafts based on shared project history.
 * Nexcord and Phantom Inbox await repository review.
 * Existing contact values and VTUNova URL are preserved from the supplied file;
 * confirm LinkedIn, email, availability, and live status before publishing.
 */

export const projects = [
  {
    "id": "vtunova",
    "slug": "vtunova",
    "title": "VTUNova",
    "tagline": "Everyday payments, connected through one wallet",
    "shortDesc": "A web platform for airtime, data, electricity, and cable TV payments, with a user wallet and background notifications.",
    "tags": [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Paystack",
      "BullMQ"
    ],
    "status": "Live",
    "year": "[REVIEW: Confirm project year]",
    "role": "Full-Stack Developer",
    "liveUrl": "https://vtunova.cv",
    "sourceUrl": null,
    "accent": "#3b82f6",
    "accentLight": "#dbeafe",
    "coverGradient": "from-blue-950 via-blue-900 to-blue-800",
    "overview": "I built VTUNova to bring everyday recharge and utility payments into one application. The project brought together a React interface, a Node.js/Express API, wallet funding, provider integrations, and transaction notifications.",
    "problem": "Buying airtime, data, and utility services involves more than submitting a form. I wanted one place for users to fund a wallet, make purchases, and understand what happened to each transaction.",
    "challenges": [
      "Handling pending provider responses and network timeouts without treating an uncertain purchase as a confirmed failure.",
      "Working through request identifiers and duplicate-processing checks for purchases and wallet updates.",
      "Getting product-specific events through listeners, background queues, and notification workers, including when a purchase remained pending."
    ],
    "approach": "I used MongoDB to store users and transactions, integrated Paystack for wallet funding, and worked with signed payment webhooks to confirm payment events. For purchases, I worked through request-ID validation and pending transaction handling with the VTpass sandbox. Product-specific events feed BullMQ notification jobs through Redis, with workers handling notification persistence. The frontend uses Axios for API requests. [REVIEW: Confirm the current live purchase flow, wallet debit rules, and duplicate-processing safeguards before describing them as guarantees.]",
    "techStack": [
      {
        "label": "Frontend",
        "value": "React, React Router, Axios, Tailwind CSS, Zustand"
      },
      {
        "label": "Backend",
        "value": "Node.js, Express"
      },
      {
        "label": "Database",
        "value": "MongoDB, Mongoose"
      },
      {
        "label": "Payments",
        "value": "Paystack; VTpass integration developed with sandbox testing"
      },
      {
        "label": "Background processing",
        "value": "Redis, BullMQ, event bus, notification workers"
      },
      {
        "label": "Hosting",
        "value": "Vercel frontend; [REVIEW: Confirm current backend host]"
      }
    ],
    "lessons": [
      "Working through pending purchases taught me to distinguish a timeout from a definitive failure.",
      "Debugging notifications taught me to trace the entire path from an emitted event to a stored notification.",
      "Wallet and payment work pushed me to think carefully about duplicate requests and when a transaction should change a balance."
    ],
    "screenshots": []
  },
  {
    "id": "invoiceflow",
    "slug": "invoiceflow",
    "title": "InvoiceFlow",
    "tagline": "Invoices, inventory, and access built around business workflows",
    "shortDesc": "A business application for invoices, receipts, inventory, and access to subscription plans, with role-based permissions.",
    "tags": [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Role-Based Access"
    ],
    "status": "[REVIEW: Confirm current availability]",
    "year": "[REVIEW: Confirm project year]",
    "role": "Full-Stack Developer",
    "liveUrl": "https://invoice-flow2.vercel.app/",
    "sourceUrl": null,
    "accent": "#6366f1",
    "accentLight": "#e0e7ff",
    "coverGradient": "from-indigo-950 via-indigo-900 to-violet-900",
    "overview": "I built InvoiceFlow to connect invoicing, receipts, inventory, and subscriptions in one application. Different users need different levels of access, so authentication and permissions became an important part of the project.",
    "problem": "Business tools need to keep everyday tasks accessible while limiting sensitive actions to the right people. InvoiceFlow gave me a practical setting for combining those workflows with role-based access.",
    "challenges": [
      "Managing access for owners, inventory managers, accountants, viewers, and administrative roles.",
      "Combining JWT authentication, refresh-token cookies, protected routes, and subscription-based feature access.",
      "Connecting application events to background notifications and working through deployment configuration issues."
    ],
    "approach": "I built the frontend with React and the API with Node.js/Express and MongoDB. Authentication uses access tokens and refresh tokens stored in httpOnly cookies. Role-based checks and protected routes control access, while subscription plans gate features. Paystack handles subscription payments. I also worked on event-driven notifications, transaction caching, and stock-movement analytics. [REVIEW: Confirm the exact permission rules and how invoice actions affect inventory; do not imply an approval workflow or atomic updates without checking the implementation.]",
    "techStack": [
      {
        "label": "Frontend",
        "value": "React, React Router, Tailwind CSS"
      },
      {
        "label": "Backend",
        "value": "Node.js, Express"
      },
      {
        "label": "Database",
        "value": "MongoDB, Mongoose"
      },
      {
        "label": "Authentication and access",
        "value": "JWT, httpOnly refresh-token cookies, role-based access"
      },
      {
        "label": "Subscriptions",
        "value": "Paystack; Basic and Premium feature access"
      },
      {
        "label": "Background processing",
        "value": "Redis, BullMQ, application events"
      },
      {
        "label": "Hosting",
        "value": "[REVIEW: Confirm current deployment]"
      }
    ],
    "lessons": [
      "Working on multiple roles helped me think about permissions across both the interface and API.",
      "Subscription access taught me to distinguish account authentication from the features an account can use.",
      "Deployment issues gave me practice tracing build output, module paths, CORS settings, and email connectivity."
    ],
    "screenshots": []
  },
  {
    "id": "nexcord",
    "slug": "nexcord",
    "title": "Nexcord",
    "tagline": "A Discord-inspired interface built with React",
    "shortDesc": "A frontend project exploring a Discord-inspired interface with React.",
    "tags": [
      "React",
      "Frontend Only",
      "UI Development"
    ],
    "status": "Frontend Only",
    "year": "[REVIEW: Confirm project year]",
    "role": "Frontend Developer",
    "liveUrl": "https://next-cord-social.vercel.app/",
    "sourceUrl": null,
    "accent": "#5865f2",
    "accentLight": "#e8eafd",
    "coverGradient": "from-[#23272a] via-[#2c2f33] to-[#36393f]",
    "overview": "Nexcord is a Discord-inspired frontend I built with React. It showcases interface work; this case study does not claim a messaging backend or real-time chat service.",
    "problem": "[REVIEW: Add what you wanted to practise or improve when you started Nexcord.]",
    "challenges": [
      "[REVIEW: Add a specific layout or interaction challenge from the project.]",
      "[REVIEW: Describe what made the challenge difficult and which alternatives you tried.]"
    ],
    "approach": "[REVIEW: After reviewing the repository, describe the actual component structure, styling tools, state handling, and implemented interactions.]",
    "techStack": [
      {
        "label": "Frontend",
        "value": "React"
      },
      {
        "label": "Styling",
        "value": "[REVIEW: Confirm from repository]"
      },
      {
        "label": "State and routing",
        "value": "[REVIEW: Confirm from repository]"
      },
      {
        "label": "Scope",
        "value": "Frontend only; backend messaging is outside this case study"
      }
    ],
    "lessons": [
      "[REVIEW: Add what the confirmed development challenge taught you and what you would change next time.]"
    ],
    "screenshots": [],
    "isFrontendOnly": true,
    "disclaimer": "A Discord-inspired frontend project. Not affiliated with or endorsed by Discord."
  },
  {
    "id": "phantom-inbox",
    "slug": "phantom-inbox",
    "title": "Phantom Inbox",
    "tagline": "A bulk email tool built for a client",
    "shortDesc": "An unreleased bulk email sender built with PHP and Laravel for a client.",
    "tags": [
      "PHP",
      "Laravel",
      "Bulk Email",
      "Client Project"
    ],
    "status": "Unreleased",
    "year": "[REVIEW: Confirm project year]",
    "role": "Developer — PHP/Laravel",
    "liveUrl": null,
    "sourceUrl": null,
    "accent": "#10b981",
    "accentLight": "#d1fae5",
    "coverGradient": "from-emerald-950 via-emerald-900 to-teal-900",
    "overview": "Phantom Inbox is a bulk email sender I built with PHP and Laravel for a client. It remains unreleased. The project gave me an opportunity to build around a specific client requirement.",
    "problem": "The client needed a tool for sending emails in bulk. [REVIEW: Add the intended workflow and audience without disclosing private client information.]",
    "challenges": [
      "[REVIEW: Add a real technical challenge from building the sender.]",
      "[REVIEW: Explain any confirmed issues with validation, sending, or user feedback; remove topics that do not apply.]"
    ],
    "approach": "[REVIEW: Use the repository to describe the implemented sending workflow and application structure. Confirm the mail provider, database, frontend, and any background processing before listing them.]",
    "techStack": [
      {
        "label": "Backend",
        "value": "PHP, Laravel"
      },
      {
        "label": "Mail transport",
        "value": "[REVIEW: Confirm from repository]"
      },
      {
        "label": "Database",
        "value": "[REVIEW: Confirm from repository]"
      },
      {
        "label": "Frontend",
        "value": "[REVIEW: Confirm from repository]"
      }
    ],
    "lessons": [
      "[REVIEW: Add the lesson you took from the actual implementation and client requirements.]"
    ],
    "screenshots": [],
    "isUnreleased": true,
    "disclaimer": "Unreleased client project. Demo and source links have not been provided."
  }
];

export const otherWork = [
  {
    "id": "techcabal-clone",
    "title": "TechCabal Clone",
    "desc": "[REVIEW: Confirm the project scope and technology stack before publishing.]",
    "url": null
  }
];

export const skills = {
  "Frontend": [
    "React",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind CSS"
  ],
  "Backend": [
    "Node.js",
    "Express",
    "PHP",
    "Laravel",
    "REST APIs"
  ],
  "Database": [
    "MongoDB",
    "MySQL"
  ],
  "Tooling": [
    "Git",
    "GitHub",
    "Vite",
    "Postman",
    "Redis",
    "BullMQ"
  ],
  "Other": [
    "Payment Integration",
    "Background Jobs / Queues",
    "Role-Based Access",
    "Email Systems"
  ]
};

export const social = {
  "github": "https://github.com/michael1342",
  "linkedin": "https://linkedin.com/in/michael-anazodo",
  "twitter": null,
  "email": "michaelanazodo2024@gmail.com"
};

export const resumeUrl = "Michael-Anazodo-Resume.pdf";

export const about = {
  "bio": [
    "I'm Michael, a software engineer who enjoys building useful web applications and figuring out what happens behind the interface.",
    "My projects have taken me from React interfaces to APIs, payments, permissions, and background jobs. I like learning by building, investigating what breaks, and improving my approach along the way.",
    "Outside programming, I enjoy anime."
  ],
  "location": "Lagos, Nigeria",
  "availableForWork": true
};

