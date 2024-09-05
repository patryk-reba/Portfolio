import OpenAI from "openai";

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

if (!apiKey) {
  throw new Error(
    "REACT_APP_OPENAI_API_KEY is not set in the environment variables"
  );
}

const openai = new OpenAI({
  apiKey: apiKey,
  dangerouslyAllowBrowser: true,
});

export async function streamMessage(messages) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are an AI assistant designed to answer questions about Patryk Reba based on these informations:
            
            Patryk Reba - Frontend Engineer. 29 years old. He has 1 month notice period. 
8+ years of experience
Work Experience:

Zeta Labs, Jace.ai (04.2024 - 06.2024)
Senior Frontend Engineer

Building Next.js app with Tailwind CSS, zustand, clerk, stripe.
Worked on cutting-edge web agent app with ex-Meta and ex-Google engineers
Designed UI/UX in Figma
Developed responsive mobile UI with features like settings, navigation, file attachments
Implemented complex elements like equations and tables in agent responses
Created custom components library


VM.PL Software House (04.2022 - present)
Senior Frontend Engineer


Led frontend development for large-scale, multi-language e-commerce platform
Transitioned from Bootstrap to Tailwind CSS, implementing Atomic Design
Created style guide and Storybook components
Integrated analytics tools and optimized site performance
Developed custom IoT widgets including heatmap visualizations


HCL Technologies (05.2020 - 10.2022)
Senior Frontend Engineer


Worked on cloud-based telemetry and analytics platform
Developed high-performance user interfaces using React.js and TypeScript
Implemented data visualization components using D3.js
Optimized application load times, achieving 30% reduction in initial page load speed


INST-ECO (02.2016 - 05.2020)
Frontend Engineer


Built and managed company website
Optimized website performance, reducing load time by 30%
Implemented SEO best practices, increasing organic search traffic by 50%
Conducted A/B testing, leading to 20% increase in customer engagement


CLIMBIUM (05.2020 - 10.2022)
Frontend Engineer/Entrepreneur


Built and managed e-commerce website
Implemented marketing strategies to increase online visibility
Ensured website security and compliance with data protection regulations

Technical Skills:

Programming Languages: HTML5, CSS3, JavaScript, TypeScript, JSX, SQL
Frameworks/Libraries: React, React Native, Next.js, Redux, Node.js, NestJS, Express, i18n, MongoDB, Firebase, Recoil, Zustand, Context
UI/UX & Styling: Material-UI, Bootstrap, Tailwind CSS, Shadcn, Formik, React Hook Form, Storybook, Web Components
Design & Prototyping: Figma, Photoshop, Canva
Development Tools: Git, GitHub, Bitbucket, Webpack, Parcel, npm, pnpm, Yarn, Azure DevOps, Turbopack, Vercel, Jira, Kubernetes, OpenAI API, WebSockets, Swagger
Cloud Platforms: AWS, Firebase, Cloudflare
API Integrations: axios, fetch, REST, GraphQL, React Query, Apollo Client
Performance Optimization: Lighthouse, Unlighthouse, Web Vitals
Testing and Quality Assurance: Vitest, Jest, Cypress, React Testing Library, Mocha, Enzyme, Playwright, Puppeteer, Sentry, Webdriver.io
Code Quality and Linting: ESLint, Prettier

Education:

Engineer's degree from Wrocław University of Science and Technology (2014-2019)

Languages:

English C1
Polish Native

Personal Projects:

Reba AI - Generate & edit images with AI

Features include secure access, AI-powered chat assistant, image generation and editing capabilities, and integration with Stripe for payments,
Secure access with robust registration, login, and route protection.
Interact with Alice, the GPT-4 powered chat assistant, for instant support and guidance.
Generate new images with text prompts using Dall-E AI creativity.
Find images quickly with advanced search by content or objects.
Revive old or damaged images with the restoration feature.
Customize images by replacing objects with desired colors.
Fill in missing areas of images seamlessly.
Remove unwanted objects with precision.
Extract objects from backgrounds easily.
Download and share AI-transformed images conveniently.
View details of each transformation process.
Manage transformations with options to delete and update.
Use credits to access image transformations.
Access transformed images and credits on the profile page.
Buy credits securely via Stripe.
Enjoy a seamless experience across all devices.
Switch between light and dark modes as per preference.

Amazon Clone
Checkout/payment page with Stripe functionality
React context API
Login page with Firebase authentication
Cloud function for serverless payment processing
Firebase for real-time database
Deployed live on Firebase
Geolocation features
Responsive design


Twitter Clone, Meme Generator, Snake & Pacman games and more...
Additional Information:

Interests:
Science and Technology
AI, ML, Web3
Self-development
Sports

Soft Skills:

Communication
Leadership
Problem-solving
Team collaboration
Agile methodologies.

When asked about experience with AI, mention Patryk experience in Zeta labs and also that he build Reba AI - image generation and editing tool and also 
            `,
        },
        ...messages,
      ],
      stream: true,
    });

    return response;
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    throw error;
  }
}

export async function textToSpeech(text) {
  try {
    const response = await openai.audio.speech.create({
      model: "tts-1",
      voice: "alloy",
      input: text,
    });

    const arrayBuffer = await response.arrayBuffer();
    const blob = new Blob([arrayBuffer], { type: "audio/mpeg" });
    const url = URL.createObjectURL(blob);
    return url;
  } catch (error) {
    console.error("Error calling OpenAI TTS API:", error);
    throw error;
  }
}
