export const header_links = [
  {
    to: 'about',
    label: 'Dra. Krishna Sandoval',
  },
  {
    to: 'differentials',
    label: 'Diferenciais',
  },
  {
    to: 'specialties',
    label: 'Especialidades',
  },
  {
    to: 'contact',
    label: 'Contato',
  },
] as const;

export type ContainerId = typeof header_links[number]['to'];
