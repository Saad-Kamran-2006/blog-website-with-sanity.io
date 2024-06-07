import { defineType, defineField } from 'sanity'


export const post = defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required().min(20).max(80)
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title'
            },
            validation: Rule => Rule.required().error('This field is required!')
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{ type: 'category' }],
            validation: Rule => Rule.required().error('This field is required!')
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
            validation: Rule => Rule.required().min(20).max(120)
        }),
        defineField({
            name: 'summary',
            title: 'summary',
            type: 'array',
            of: [{ type: 'block' }],
            validation: Rule => Rule.required().error('This field is required!')
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            validation: Rule => Rule.required().error('This field is required!')
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{ type: 'author' }],
            validation: Rule => Rule.required().error('This field is required!')
        }),
    ]
})
