import { defineType, defineField } from "sanity";

export const category = defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
        defineField({
            name: 'categoryName',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required().min(4).max(20)
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
            validation: Rule => Rule.required().min(20).max(60)
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            validation: Rule => Rule.required().error('This field is required!'),
            options: { hotspot: true }
        }),
    ]
})
