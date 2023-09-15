// import sanityClient from '@sanity/client';
// import imageUrlBuilder from '@sanity/image-url';

// export const client = sanityClient({
//   projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
//   dataset: 'production',
//   apiVersion: '2023-05-0',
//   useCdn: true,
//   token: process.env.REACT_APP_SANITY_TOKEN,
// });

// const builder = imageUrlBuilder(client);

// export const urlFor = source => builder.image(source);

import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

// Implement the 'createIfNotExist' function
export async function createIfNotExist(document) {
  try {
    const existingDoc = await client.getDocument(document._id);
    if (!existingDoc) {
      // The document does not exist, so create it
      await client.create(document);
    }
    // Document already exists or was created
    return existingDoc || document;
  } catch (error) {
    throw error;
  }
}
