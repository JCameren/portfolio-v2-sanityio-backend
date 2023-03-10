import { Rule } from "sanity"

export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'username',
      title: 'Username',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().email(),
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(8),
    },
    {
      name: 'bio',
      title: "Bio",
      type: 'string'
    },
    {
      name: 'profilePicture',
      title: 'Profile Picture',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}