import { z } from 'zod';

const ArticleSchema = z.object({
  id: z.number({
    required_error: 'id is required',
    invalid_type_error: 'id must be a number', 
  }),
  featured: z.boolean({
    required_error: 'featured is required',
    invalid_type_error: 'featured must be a boolean',
  }).default(false),
  title: z.string({
    required_error: 'title is required',
    invalid_type_error: 'title must be a string', 
  }),
  url: z.string({
    required_error: 'url is required',
    invalid_type_error: 'url must be a string', 
  }),
  imageUrl: z.string({
    required_error: 'imageUrl is required',
    invalid_type_error: 'imageUrl must be a string', 
  }),
  newsSite: z.string({
    required_error: 'newsSite is required',
    invalid_type_error: 'newsSite must be a string', 
  }),
  summary: z.string({
    required_error: 'summary is required',
    invalid_type_error: 'summary must be a string', 
  }).min(1),
  publishedAt: z.string({
    required_error: 'publishedAt is required',
    invalid_type_error: 'publishedAt must be a string', 
  }),
  launches: z.object({}).array(),
  events: z.object({}).array(),
});

export type Article = z.infer<typeof ArticleSchema>;

export { ArticleSchema };
