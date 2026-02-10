import { faker } from '@faker-js/faker'

export type ProjectType = 'Recreation' | 'Sports Complex' | 'Aquatic' | 'Playground' | 'Other'
export type ProposalStatus = 'Won' | 'Lost' | 'Pending'

export interface Proposal {
  id: string
  title: string
  client: string
  projectType: ProjectType
  budget: number
  submissionDate: Date
  status: ProposalStatus
  fee: number
  feePercentage: number
  durationMonths: number
  tags: string[]
}

const projectTypes: ProjectType[] = ['Recreation', 'Sports Complex', 'Aquatic', 'Playground']
const statuses: ProposalStatus[] = ['Won', 'Lost', 'Pending']

const commonTags = [
  'LEED Certified',
  'Public Sector',
  'Private Sector',
  'Fast Track',
  'Design-Build',
  'Municipal',
  'Prevailing Wage',
  'Safety Focus'
]

export function generateMockProposals(count: number = 20): Proposal[] {
  faker.seed(123) // Consistent data for POC
  
  return Array.from({ length: count }, (_, i) => {
    const projectType = faker.helpers.arrayElement(projectTypes)
    const budget = faker.number.int({ min: 500000, max: 15000000 })
    const feePercentage = faker.number.float({ min: 8, max: 15, fractionDigits: 1 })
    const fee = Math.round((budget * feePercentage) / 100)
    
    return {
      id: `prop-${i + 1}`,
      title: `${faker.company.name()} ${projectType} ${faker.helpers.arrayElement(['Center', 'Complex', 'Facility', 'Development'])}`,
      client: faker.company.name(),
      projectType,
      budget,
      submissionDate: faker.date.between({ from: '2020-01-01', to: '2026-01-31' }),
      status: i < 3 ? 'Pending' : faker.helpers.arrayElement(statuses),
      fee,
      feePercentage,
      durationMonths: faker.number.int({ min: 6, max: 36 }),
      tags: faker.helpers.arrayElements(commonTags, { min: 2, max: 4 })
    }
  })
}

export const mockProposals = generateMockProposals(24)
