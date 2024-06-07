import { defineType, defineField } from "sanity";

export const author = defineType({
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
        defineField({
            name: 'authorName',
            title: "Author's Name",
            type: 'string',
            validation: Rule => Rule.required().min(4).max(20)
        }),
        defineField({
            name: 'authorBio',
            title: "Author's Bio",
            type: 'string',
            validation: Rule => Rule.required().min(20).max(120)
        }),
        defineField({
            name: 'authorImage',
            title: "Author's Image",
            type: 'image',
            validation: Rule => Rule.required().error('This field is required!'),
            options: { hotspot: true }
        }),
    ]
})
