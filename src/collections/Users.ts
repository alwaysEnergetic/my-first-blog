import type { CollectionConfig } from 'payload/types'
import TestComponent from '../components/TestComponent.jsx'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'test',
      type: 'ui',
      admin: {
         components: {
           Field: TestComponent
         }
      }
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Description',
    },
    {
      name:'age',
      type: 'number',
      admin: {
        position: 'sidebar'
      }
    }
  ],
}
