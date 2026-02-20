export const contributions = [
    {
    title: "Integrated CloudBeaver for PostgreSQL Management",
    description:
      "Introduced CloudBeaver to enable secure web based PostgreSQL administration, eliminating manual SSH and container exec workflows while maintaining restricted database access.",
    link: "https://github.com/amfoss/bedrock/pull/5",
    stack: "Docker, PostgreSQL, CloudBeaver",
    status: "Completed",
    date: "Feb 9, 2026"
  },
  {
    title: "Fixed Traefik Router Label Configuration",
    description:
      "Corrected Traefik router label keys in docker-compose to ensure proper entrypoint mapping, TLS routing, and dashboard accessibility aligned with Traefik configuration standards.",
    link: "https://github.com/amfoss/bedrock/pull/4",
    stack: "Docker, Traefik",
    status: "Completed",
    date: "Dec 17, 2025"
  },
  {
    title: "Secured Traefik Dashboard for amFOSS Infrastructure",
    description:
      "Designed and deployed a secured Traefik dashboard with HTTPS and Basic Authentication, enabling visibility into routers, services, middlewares, and TLS certificates without exposing credentials in version control.",
    link: "https://github.com/amfoss/bedrock/pull/4",
    stack: "Docker, Traefik, DevOps",
    status: "Completed",
    date: "Nov 17, 2025"
  },
  {
    title: "Layer5 Website – Added Bluesky Icon",
    description:
      "Integrated Bluesky icon into the website footer and identified deprecated HTML files no longer used by Gatsby/React.",
    link: "https://github.com/layer5io/layer5/pull/6463",
    stack: "React, Gatsby",
    status: "Completed",
    date: "May 2024"
  },
  {
    title: "Enhanced Weather UI in Profile Setup",
    description:
      "Improved UI updates and interaction behavior after weather selection in the profile configuration flow.",
    link: "https://github.com/CCExtractor/ultimate_alarm_clock/pull/733",
    stack: "Flutter",
    status: "Completed",
    date: "Mar 12, 2024"
  },
  {
    title: "Fixed Async Handling in Profile Retrieval",
    description:
      "Added missing await keyword in profile retrieval logic to ensure correct asynchronous execution.",
    link: "https://github.com/CCExtractor/ultimate_alarm_clock/pull/684",
    stack: "Flutter",
    status: "Completed",
    date: "Feb 20, 2024"
  },
  {
    title: "Resolved Theme Inconsistencies in Profile Section",
    description:
      "Fixed dark and light mode inconsistencies affecting unselected profile UI components.",
    link: "https://github.com/CCExtractor/ultimate_alarm_clock/pull/621",
    stack: "Flutter",
    status: "Completed",
    date: "Jan 4, 2024"
  },
  {
    title: "Improved Layout Responsiveness Across Devices",
    description:
      "Replaced hardcoded dimensions with flexible layouts to improve responsiveness across different screen sizes.",
    link: "https://github.com/CCExtractor/ultimate_alarm_clock/pull/619",
    stack: "Flutter",
    status: "Completed",
    date: "Jan 4, 2024"
  },
  {
    title: "Added Preset Timers for Faster Access",
    description:
      "Implemented preset timer options to allow users to quickly start commonly used timers.",
    link: "https://github.com/CCExtractor/ultimate_alarm_clock/pull/615",
    stack: "Flutter",
    status: "Completed",
    date: "Jan 4, 2024"
  },
  {
    title: "Improved Toggle Switch Visibility in Light Mode",
    description:
      "Enhanced toggle switch contrast to ensure better visibility and accessibility in light mode.",
    link: "https://github.com/CCExtractor/ultimate_alarm_clock/pull/613",
    stack: "Flutter",
    status: "Completed",
    date: "Dec 10, 2023"
  }
];