import type { CollectionConfig } from 'payload'

export const Patrols: CollectionConfig = {
  slug: 'patrols',
  labels: {
    singular: 'Zastęp',
    plural: 'Zastępy',
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'leader',
      type: 'text',
      required: true,
    },
    {
      name: 'points',
      type: 'number',
      defaultValue: 0,
    },
  ],
}
