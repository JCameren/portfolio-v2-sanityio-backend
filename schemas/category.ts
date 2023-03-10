import { Rule } from "sanity"

export default {
    name: "category",
    type: "document",
    title: "Category",
    fields: [
        {
            name: "categoryName",
            title: "Category Name",
            type: "string"
        },
        {
            name: "description",
            title: "Description",
            type: "string"
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 200,
            },
            validation: (Rule: Rule) => Rule.required(), 
          },
    ]
}