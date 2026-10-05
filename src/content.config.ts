import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const localized = z.object({
  sk: z.string(),
  en: z.string(),
});

const works = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/works' }),
  schema: ({ image }) =>
    z.object({
      type: z.enum(['code', 'graphic', 'video']),
      title: localized,
      summary: localized,
      year: z.number().int(),
      /** Poradie na osi aj v mriežke (menšie = skôr). */
      order: z.number().int().default(100),
      /** Veľkosť dlaždice v bento mriežke. */
      size: z.enum(['s', 'm', 'l']).default('s'),
      tech: z.array(z.string()).default([]),
      /** Obrázok zo src/assets/works/<slug>/, cesta relatívna k .md súboru. */
      cover: image().optional(),
      coverAlt: localized.optional(),
      links: z
        .object({
          repo: z.url().optional(),
          demo: z.url().optional(),
        })
        .default({}),
      video: z
        .object({
          provider: z.enum(['youtube', 'vimeo']),
          id: z.string(),
        })
        .optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { works };
