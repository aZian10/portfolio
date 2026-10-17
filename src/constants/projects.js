export const projects = {
  number: '02',
  eyebrow: 'Featured Projects',
  title: 'Projects I have built',
  description: 'Selected projects from my public GitHub repositories.',
  viewLabel: 'View project',
  items: [
    {
      name: 'PowerFit',
      description:
        'A responsive fitness management interface built as a frontend exercise, using sample data.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/aZian10/powerfit-frontend',
    },
    {
      name: 'Apache Kafka Order Demo',
      description:
        'A Docker Compose demo that sends and reads online store order events with Kafka in KRaft mode.',
      technologies: ['Apache Kafka', 'Docker Compose', 'PowerShell'],
      github: 'https://github.com/aZian10/apache-kafka-demo',
    },
    {
      name: 'Superstore Sales Data Pipeline',
      description:
        'An end-to-end data pipeline using PostgreSQL, layered data models, tests, and Apache Airflow.',
      technologies: ['Python', 'PostgreSQL', 'Apache Airflow'],
      github: 'https://github.com/aZian10/superstore-sales-data-pipeline',
    },
  ],
}
