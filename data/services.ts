export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Depression',
    description: 'Comprehensive mental health support and treatment options',
    icon: 'brain'
  },
  {
    id: '2',
    title: 'Anxiety',
    description: 'Expert care for anxiety disorders and stress management',
    icon: 'heart'
  },
  {
    id: '3',
    title: 'Allergies',
    description: 'Diagnosis and treatment for seasonal and chronic allergies',
    icon: 'flower'
  },
  {
    id: '4',
    title: 'Heart Health',
    description: 'Preventive care and management for cardiovascular conditions',
    icon: 'pulse'
  },
  {
    id: '5',
    title: 'Diabetes',
    description: 'Comprehensive diabetes management and education',
    icon: 'activity'
  },
  {
    id: '6',
    title: 'Women\'s Health',
    description: 'Specialized care for women\'s health needs and wellness',
    icon: 'users'
  }
]
