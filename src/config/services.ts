export interface Service {
  name: string;
  description: string;
  icon: string;
  color: string;
}

export const services: Service[] = [
  {
    name: "Web Design and Development",
    description:
      "We can redesign your landing page, build you a full-stack application, and anything in-between",
    icon: "terminal",
    color: "purple",
  },
  {
    name: "Low-code/No-code Solutions",
    description:
      "Don't want to worry about maintaining your codebase?  We provide low-code/no-code tool consulting.",
    icon: "code2",
    color: "blue",
  },
  {
    name: "Third-party API Integration",
    description:
      "Programatically send emails with Mailchimp or create a Slackbot that connects to your project management tooling.",
    icon: "cable",
    color: "pink",
  },
];
